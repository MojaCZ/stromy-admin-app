import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tree } from '../../lib';
// import { environment } from '../../../../environments/environment';
import { environment } from '../../environments/environment';
import { Observable, Observer } from 'rxjs';

@Injectable()

export class LoadedTreesService implements OnDestroy {
  public loadedTrees: Tree[] = [];

  // public T: TreeI = new Tree();
  // public kData: number[][] = [];
  // public ConfKData: ClassificationInterface[];

  constructor(private http: HttpClient) {
    // this.ConfKData = ClassificationSchema;
    // for (let k = 0; k < ClassificationSchema.length; k++) {
    //   const kRow = [];
    //   for (let subK = 0; subK < ClassificationSchema[k].I; subK++) {
    //     kRow.push(0);
    //   }
    //   this.kData.push(kRow);
    // }
  }
  /** tak toto je hnus, to by chtělo trochu upravit */
  loadTrees(): Observable<Tree[]> {
    const start = 0;
    const n = 10;
    const body = `start=${start}&n=${n}`;

    const dataObservable: Observable<Tree[]> = new Observable( (observer: Observer<Tree[]>) => {
      this.http
      .post(
        `${environment.server}/tree/getNTrees`,
        body,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        })
      .subscribe(
        (data: any) => {
          if (!data.trees) {
            return;
          }

          const loadedTrees: Tree[] = [];
          for (const tree of data.trees) {
            loadedTrees.push(tree);
          }
          this.loadedTrees = loadedTrees;
          observer.next(loadedTrees);
          observer.complete();
        });
    });
    return dataObservable;
  }

  getTreeById(id: string): Observable<Tree> {
    const tree: Tree = this.loadedTrees.find(x => `${x.id}` === id);
    const treeObservable: Observable<Tree> = new Observable( (observer: Observer<Tree>) => {
      if (tree) {
        observer.next(tree);
        observer.complete();
      } else {
        this.http
        .post(
          `${environment.server}/tree/getById`,
          `id=${id}&`,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        }).subscribe((data: Tree) => {
          observer.next(data);
          observer.complete();
        });
      }
    });
    return treeObservable;
  }



  send() {
    // this.prepareData();
    // const body = this.allTogether();
    // this.http
    //   .post(
    //     `${environment.server}/tree/addTreeUser`,
    //     body,
    //     {
    //       headers: new HttpHeaders().set('Content-Type', 'application/json'),
    //     })
    //   .subscribe((data: any) => {
    //     console.log(data);
    //     if (data.message.status === 'ok') {
    //       console.log(`strom byl v pořádku přijat, gratuluji!, ID přidaného stromu je: ${data.message.id}`);
    //     } else {
    //       console.log(`Vyskytla se chyba!, zpráva je: ${data.message.message}`);

    //     }
    //   });
  }

  allTogether() {
    // const jsonBody = `
    // {
    //   "strom":${JSON.stringify(this.T.S)},
    //   "lokal":${JSON.stringify(this.T.L)},
    //   "pisemneD":${JSON.stringify(this.T.PD)},
    //   "obrazoveD":${JSON.stringify(this.T.OD)},
    //   "kateg":${JSON.stringify(this.T.K)},
    //   "comment":${JSON.stringify(this.T.C)},
    //   "ohro":${JSON.stringify(this.T.O)}
    // }`;
    // return jsonBody;
  }

  prepareData = () => {
    // for (let i = 0; i < this.kData.length; i++) {
    //   let row = `${this.kData[i][0]}`;

    //   for (let j = 1; j < this.kData[i].length; j++) {
    //     row += `,${this.kData[i][j]}`;
    //   }
    //   this.T.K[`KATEG${i + 1}`] = row;
    // }
    // if (this.T.S.DATIN instanceof Date) {
    //   this.T.S.DATIN = `${this.T.S.DATIN.getDate()}.${this.T.S.DATIN.getMonth()}.${this.T.S.DATIN.getFullYear()}`;
    // }

    // // TODO this should be filled by form
    // this.T.S.VLAST = 'APPVS';
    // this.T.OD.URL[0] = 'someURL';
    // this.T.PD.URL[0] = 'someURL';
  }

  ngOnDestroy() {
    // console.log('Im destroyed');
  }
}
