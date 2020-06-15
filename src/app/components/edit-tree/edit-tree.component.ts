import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoadedTreesService } from 'src/app/services/loaded-trees.service';
import { TreeTypes, Tree} from '../../../lib';
import { EditTreeService } from 'src/app/services/edit-tree.service';

// import { CommentI } from '../../../../../shared/tree.interface';
interface SelectInterface {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-tree',
  templateUrl: './edit-tree.component.html',
  styleUrls: ['./edit-tree.component.scss']
})
export class EditTreeComponent implements OnInit {
  // @Input() date;
  tree: Tree;
  treeId: number;

  objectTypes: SelectInterface[] = [];

  baseFormGroup: FormGroup;
  dangerFormGroup: FormGroup;
  categoryFormGroup: FormGroup;
  adminFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private loadedTreesService: LoadedTreesService,
    private editTreeService: EditTreeService
    ) {
      for (const type of TreeTypes) { // input select types
        this.objectTypes.push({ value: type, viewValue: type });
      }
    }

  ngOnInit() {
    this.initFormParams();
    this.activatedRoute.params.subscribe(
      params => {
        this.treeId = params.id;
        this.loadedTreesService.getTreeById(params.id).subscribe((data: Tree) => {
          this.tree = data;
          this.tree.S.DATAK = new Date();
          this.editTreeService.setTree(data);
          this.setFormParams(data);
        });
      }
      );
  }

  setFormParams(T: Tree) {
    this.baseFormGroup.setValue({
      lonCtrl: T.L.LON,
      latCtrl: T.L.LAT,
      typeCtrl: T.S.TYP_OBJ,
      commUCtrl: T.C.COM_U,
      dateAktCtrl: T.S.DATAK
    });
  }

  initFormParams(){
    this.baseFormGroup = this.formBuilder.group({
      lonCtrl: [''],
      latCtrl: [''],
      typeCtrl: [''],
      commUCtrl: [''],
      dateAktCtrl: ['']
    });
    this.dangerFormGroup = this.formBuilder.group({
    });
    this.categoryFormGroup = this.formBuilder.group({
    });
    this.adminFormGroup = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)],
      files: ['']
    });
  }

}
