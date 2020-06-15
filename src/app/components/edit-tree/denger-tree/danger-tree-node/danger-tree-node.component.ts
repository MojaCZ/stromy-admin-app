import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-danger-tree-node',
  templateUrl: './danger-tree-node.component.html',
  styleUrls: ['./danger-tree-node.component.scss']
})
export class DangerTreeNodeComponent implements OnInit {
  @Input() data: any;
  folded = false;
  grades: boolean[] = [];
  mainChecked: boolean;
  mainIndeterminate: boolean;

  constructor() {
  }

  ngOnInit() {
    for (const grade of this.data.value.grades) {
      this.grades.push(false);
    }
    // this.grades[1] = true;
    this.checkAll();
  }

  fold() {
    this.folded = !this.folded;
  }

  changeAll() {
    this.mainChecked = !this.mainChecked;
    this.mainIndeterminate = false;
    for (let grade of this.grades) {
      grade = this.mainChecked;
    }
  }

  // check all subcheckboxes and if all are checked, return true
  checkAll() {
    let allChecked = true;
    let noneChecked = false;

    for (const grade of this.grades) {
      if (grade) {
        noneChecked = true;
      } else {
        allChecked = false;
      }
    }

    if (allChecked) {  // all checkboxes are checked
      this.mainIndeterminate = false;
      this.mainChecked = true;
    } else {
      this.mainChecked = false;
      if (noneChecked) { // non of the checkboxes is checked
        this.mainIndeterminate = true;
      } else {  // some are checked
        this.mainIndeterminate = false;
      }
    }

  }

}
