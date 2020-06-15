import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TreesTableItem {
  id: number;
  date: string;
  type: string;
  K: number;
  K1: number;
  K2: number;
  K3: number;
  K4: number;
  K5: number;
  validate: boolean;
  iconEdit: string;
  iconPrint: string;
  iconDelete: string;
}

/**
 * Data source for the TreesTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TreesTableDataSource extends DataSource<TreesTableItem> {
  // data: TreesTableItem[] = [];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(public data: TreesTableItem[]) {
    super();
  }

  /** FOREACH function cannot be stoped or brake, only by throwing exception,
   * so when I used foreach here and wanted to return in loop, it continued executing
   * I have to use a classic for() loop
   * @param id id of tree to be removed
   */

  remove(id: number): TreesTableItem[] {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        this.data.splice(i, 1);
        return this.data;
      }
    }
    return this.data;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TreesTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TreesTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TreesTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'date': return compare(a.date, b.date, isAsc);
        case 'type': return compare(a.type, b.type, isAsc);
        case 'K': return compare(+a.K, +b.K, isAsc);
        case 'K1': return compare(+a.K1, +b.K1, isAsc);
        case 'K2': return compare(+a.K2, +b.K2, isAsc);
        case 'K3': return compare(+a.K3, +b.K3, isAsc);
        case 'K4': return compare(+a.K4, +b.K4, isAsc);
        case 'K5': return compare(+a.K5, +b.K5, isAsc);
        case 'validate': return compare(+a.validate, +b.validate, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
