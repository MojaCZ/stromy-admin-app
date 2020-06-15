import { Component, OnInit} from '@angular/core';
import { Dangers } from '../../../../lib';


@Component({
  selector: 'app-denger-tree',
  templateUrl: './denger-tree.component.html',
  styleUrls: ['./denger-tree.component.scss']
})
export class DengerTreeComponent implements OnInit {

  dangerStructure = Dangers;

  constructor() {

  }

  ngOnInit() {
    // this.route.data.subscribe(data => {
    //   console.log(data)
    //   this.dangerStructure = data.Config.dangers;
    // });
  }

}
