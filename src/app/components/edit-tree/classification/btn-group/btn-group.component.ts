import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from '../../../info-dialog/info-dialog.component';
import { EditTreeService } from '../../../../services/edit-tree.service';

@Component({
  selector: 'app-btn-group',
  templateUrl: './btn-group.component.html',
  styleUrls: ['./btn-group.component.scss']
})
export class BtnGroupComponent implements OnInit {
  /** number of current cathegory */
  @Input() kategorie: number;

  /** index of subCategory I'm displaying to user (index of radio group) */
  @Input() groupIndex: number;

  /** data loaded from AddTreeService */
  groupData: any;

  /** array holding true/false values representing checked/unchecked buttons on group */
  public checkedArray: boolean[] = [false];

  constructor(
    private dialog: MatDialog,
    private editTreeService: EditTreeService
    ) { }

  ngOnInit() {
    this.groupData = this.editTreeService.ConfKData[0].subCat[this.groupIndex];

    // init array of checked = true/false for displaying checked buttons
    for (let i = 0; i < this.groupData.I; i++) {
      this.checkedArray.push(false);
    }

    // read value from AddTreeService, it tells me which button should be activated
    const buttonIndex = this.editTreeService.getKData(this.kategorie, this.groupIndex);
    this.checkedArray[buttonIndex] = true;
  }

  /** on change of checked box, change value in matrix in AddTreeService
   * @param i index of pressed radio button
   */
  getValues(i: number) {
    // change value of index of checked button in AddTreeService
    this.editTreeService.setKData(this.kategorie, this.groupIndex, i);
    this.editTreeService.getKValues();
  }

  /** open info dialog */
  openDialog() {
    this.dialog.open(InfoDialogComponent, { data: { title: this.groupData.H, info: this.groupData.info } });
  }

}
