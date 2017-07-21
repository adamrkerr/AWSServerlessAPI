import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdListModule, MdInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


import { ItemViewComponent } from './item-view/item-view.component';
import { ItemEditorComponent } from './item-editor/item-editor.component';

@NgModule({
    imports: [
        CommonModule,
        MdListModule,
        MdInputModule,
        FlexLayoutModule,
        FormsModule
    ],
    declarations: [ItemViewComponent, ItemEditorComponent],
    exports: [ItemViewComponent, ItemEditorComponent]
})
export class SharedModule { }
