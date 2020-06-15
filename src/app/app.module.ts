import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materials.module';
import { ReactiveFormsModule } from '@angular/forms';

// COMPONENTS
import { NavigationComponent } from './components/navigation/navigation.component';
import { EditTreeComponent } from './components/edit-tree/edit-tree.component';
import { TreesTableComponent } from './components/trees-table/trees-table.component';
import { PrintTreeComponent } from './components/print-tree/print-tree.component';
import { DengerTreeComponent } from './components/edit-tree/denger-tree/denger-tree.component';
import { DangerTreeNodeComponent } from './components/edit-tree/denger-tree/danger-tree-node/danger-tree-node.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { ClassificationComponent } from './components/edit-tree/classification/classification.component';
import { BtnGroupComponent } from './components/edit-tree/classification/btn-group/btn-group.component';
import { InfoDialogComponent } from './components/info-dialog/info-dialog.component';
import { DownloadsComponent } from './components/downloads/downloads.component';

// SERVICES
import { EditTreeService } from './services/edit-tree.service';
import { LoadedTreesService } from './services/loaded-trees.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EditTreeComponent,
    DownloadsComponent,
    TreesTableComponent,
    PrintTreeComponent,
    DengerTreeComponent,
    DangerTreeNodeComponent,
    ListUsersComponent,
    EditUserComponent,
    AddUserComponent,
    ClassificationComponent,
    BtnGroupComponent,
    InfoDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [ EditTreeService, LoadedTreesService ],
  bootstrap: [AppComponent],
  entryComponents: [InfoDialogComponent]
})
export class AppModule { }
