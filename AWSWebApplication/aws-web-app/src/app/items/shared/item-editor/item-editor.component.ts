import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../models/item';

@Component({
  selector: 'app-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.css']
})
export class ItemEditorComponent implements OnInit {
    @Input() item: Item;
  constructor() { }

  ngOnInit() {
  }

}
