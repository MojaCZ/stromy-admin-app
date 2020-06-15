import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TreesTableDataSource, TreesTableItem } from './trees-table-datasource';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClassificationSchema, ClassificationInterface, Weights, Tree } from '../../../lib';
import { LoadedTreesService } from '../../services/loaded-trees.service';

@Component({
  selector: 'app-trees-table',
  templateUrl: './trees-table.component.html',
  styleUrls: ['./trees-table.component.scss']
})
export class TreesTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TreesTableItem>;

  /** class storing data for table */
  dataSource: TreesTableDataSource;

  /** interface schema for categorization */
  public schema: ClassificationInterface[] = ClassificationSchema;

  constructor(
    private http: HttpClient,
    public loadedTreesService: LoadedTreesService
  ) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['date', 'type', 'K', 'K1', 'K2', 'K3', 'K4', 'K5', 'validate', 'iconEdit', 'iconPrint', 'iconDelete'];

  ngOnInit() {
    this.dataSource = new TreesTableDataSource([]);
    this.getTableData();
  }

  getTableData() {
    const newData: TreesTableItem[] = [];
    this.loadedTreesService.loadTrees().subscribe((data: Tree[]) => {
      for (const tree of data) {
        const kArr: number[] = [
          this.kValue(tree.K.KATEG1, Weights.w1),
          this.kValue(tree.K.KATEG2, Weights.w2),
          this.kValue(tree.K.KATEG3, Weights.w3),
          this.kValue(tree.K.KATEG4, Weights.w4),
          this.kValue(tree.K.KATEG5, Weights.w5)
        ];
        let kValue = 0;
        for (let j = 0; j < kArr.length; j++) {
          kValue += kArr[j] * Weights.W[j];
        }
        kValue = Math.round(kValue * 100) / 100;
        const item: TreesTableItem = {
          id: tree.id,
          date: `${tree.S.DATIN}`.split('T')[0],
          type: tree.S.TYP_OBJ,
          K: kValue,
          K1: kArr[0],
          K2: kArr[1],
          K3: kArr[2],
          K4: kArr[3],
          K5: kArr[4],
          validate: tree.S.PRIJEM === '0' ? false : true,
          iconEdit: `${tree.id}`,
          iconPrint: `${tree.id}`,
          iconDelete: `${tree.id}`
        };
        newData.push(item);
      }
      this.refresh(newData);
    });
  }

   /** calculate category value (mark) dependent on weights
    * @param K values submitted by user
    * @param W weights from configuraton file
    */
  kValue(K: string, W: number[]): number {
    const k = K.split(',');
    if (k.length !== W.length) {
      console.log('oou, length not same, something went wrong');
    }
    let V = 0;
    for (let i = 0; i < k.length; i++) {
      V += +k[i] * W[i];
    }
    V = Math.round(V * 100) / 100;
    return V;
  }

  /** refresh data for updating table
   * @param newData data to be inserted into table
   */
  refresh(newData: TreesTableItem[]) {
    this.dataSource = new TreesTableDataSource(newData);
    this.ngAfterViewInit();
  }

  /** send post request to backend to remove tree from database */
  delete(id) {
    const body = `id=${id}`;
    this.http
      .post(
        `${environment.server}/tree/deleteId`,
        body,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        })
      .subscribe((data: any) => {
        if (data.status === 'ok') {
          const newData: TreesTableItem[] = this.dataSource.remove(id);
          this.refresh(newData);
        }
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
