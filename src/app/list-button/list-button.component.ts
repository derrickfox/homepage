import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-button',
  templateUrl: './list-button.component.html',
  styleUrls: ['./list-button.component.css']
})
export class ListButtonComponent implements OnInit {
  @Input() button: {
    title: string,
    url: string
  }
  @Input() url: string;

  constructor() { }

  ngOnInit() {
    // this.title = 'Init'
  }
  linkClicked(item) {
    this.url = item.url;
  }

}
