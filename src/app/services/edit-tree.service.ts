import { Injectable, OnDestroy, ApplicationRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer, Subject } from 'rxjs';

import {
  TreeI,
  Tree,
  ClassificationSchema,
  ClassificationInterface,
  Dangers,
  Weights
} from '../../lib';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { ObserversModule } from '@angular/cdk/observers';

@Injectable()

export class EditTreeService implements OnDestroy {

  /** class keeping all informations about tree user is editing */
  public T: Tree;

  /** matrix of classification elements user filled in */
  public kData: number[][] = [];

  /** structure of object holding texts in configuration file */
  public ConfKData: ClassificationInterface[] = ClassificationSchema;

  /** message returned from server */
  public message: any;

  /** calculated values K and W */
  public kValuesSubject: Subject<number[]> = new Subject();

  public dangersMatrix: boolean[][] = [];

  constructor(
    private http: HttpClient
    ) {

  }

  setTree(T: Tree) {
    this.T = T;
    this.initKData();
    this.initDData();
  }

  /** get categ data from loaded tree and fit them into matrix for categ component */
  initKData() {
    const K1: number[] = this.T.K.KATEG1.split(',').map((x) => {
      return parseInt(x, 10);
    });
    const K2 = this.T.K.KATEG2.split(',').map((x) => {
      return parseInt(x, 10);
    });
    const K3 = this.T.K.KATEG3.split(',').map((x) => {
      return parseInt(x, 10);
    });
    const K4 = this.T.K.KATEG4.split(',').map((x) => {
      return parseInt(x, 10);
    });
    const K5 = this.T.K.KATEG5.split(',').map((x) => {
      return parseInt(x, 10);
    });
    this.kData = [K1, K2, K3, K4, K5];
    this.getKValues();

  }

  /** set a value of kData matrix
   * @param i index of section that should be edited
   * @param j index of subSection (question) that should be edited
   * @param value new value user select that should
   */
  setKData(i: number, j: number, value: number) {
    if (i >= this.kData.length) {
      throw new Error('[setKData] dim I doesnt fit');
    }
    if (j >= this.kData[i].length) {
      throw new Error('[setKData] dim J doesnt fit');
    }
    this.kData[i][j] = value;
  }
  /** get single data from kData matrix
   * @param i index of section that should be returned
   * @param j index of subSection (question) that should be returned
   * @returns selected number
   */
  getKData(i: number, j: number): number {
    if (i >= this.kData.length) {
      throw new Error('[getKData] dim I doesnt fit');
    }
    if (j >= this.kData[i].length) {
      throw new Error('[getKData] dim J doesnt fit');
    }
    return this.kData[i][j];
  }

  /** calculate values of all Classification categories */
  getKValues() {
    const V1 = this.kValue(this.kData[0] , Weights.w1);
    const V2 = this.kValue(this.kData[1] , Weights.w2);
    const V3 = this.kValue(this.kData[2] , Weights.w3);
    const V4 = this.kValue(this.kData[3] , Weights.w4);
    const V5 = this.kValue(this.kData[4] , Weights.w5);
    this.kValuesSubject.next([V1, V2, V3, V4, V5]);
  }

  /** calculate category value (mark) dependent on weights
   * @param K values submitted by user
   * @param W weights from configuraton file
   */
  kValue(K: number[], W: number[]): number {
    let V = 0;
    for (let i = 0; i < K.length; i++) {
      V += +K[i] * W[i];
    }
    V = Math.round(V * 100) / 100;
    return V;
  }

  initDData() {
    for (const dangerSection in Dangers) {
      if ( Dangers.hasOwnProperty(dangerSection) ) {
        const row: boolean[] = [];
        for (const grade of Dangers[dangerSection].grades) {
          row.push(false);
        }
        this.dangersMatrix.push(row);
      }
    }
  }

  /** send form to backend and return observable of response */
  send(): Observable<any> {
    this.prepareData();
    const body = this.allTogether();
    const request = this.http
      .post(
        `${environment.server}/tree/addTreeUser`,
        body,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
        });
    request.pipe(
      map(val => this.message = val)
    );
    return request;
  }

  /** form body before sending request to backend */
  allTogether(): string {
    const jsonBody = `
    {
      "strom":${JSON.stringify(this.T.S)},
      "lokal":${JSON.stringify(this.T.L)},
      "pisemneD":${JSON.stringify(this.T.PD)},
      "obrazoveD":${JSON.stringify(this.T.OD)},
      "kateg":${JSON.stringify(this.T.K)},
      "comment":${JSON.stringify(this.T.C)},
      "ohro":${JSON.stringify(this.T.O)}
    }`;
    return jsonBody;
  }

  /** prepare data before forming body
   * classification matrix on strings and some hardcoded fields for now 
   */
  prepareData = () => {
    for (let i = 0; i < this.kData.length; i++) {
      let row = `${this.kData[i][0]}`;

      for (let j = 1; j < this.kData[i].length; j++) {
        row += `,${this.kData[i][j]}`;
      }
      this.T.K[`KATEG${i + 1}`] = row;
    }
    if (this.T.S.DATIN instanceof Date) {
      this.T.S.DATIN = `${this.T.S.DATIN.getDate()}.${this.T.S.DATIN.getMonth()}.${this.T.S.DATIN.getFullYear()}`;
    }

    // TODO this should be filled by form
    this.T.S.VLAST = 'APPVS';
    this.T.OD.URL[0] = 'someURL';
    this.T.PD.URL[0] = 'someURL';
  }

  ngOnDestroy() {
    console.log("BY")
  }
}
