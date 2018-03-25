import { Component, OnInit } from '@angular/core';
import { Tile } from '../../data/tile';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tiles: Tile[];
  // TODO Have to be generic
  name: String = 'First';

  constructor() { }

  ngOnInit() {
    this.populateTiles();
  }

  populateTiles() {
    this.tiles = [
      {
        author: 'victor',
        text: 'This is my first tile',
        createdDate: '15-03-2018'
      },
      {
        author: 'john',
        text: 'This is really nice feature',
        createdDate: '20-03-2018'
      },
      {
        author: 'dizzy',
        text: 'Wow! I\'m impressed',
        createdDate: '01-02-2017'
      },
      {
        author: 'John Doe',
        text: 'Who am I? Girl or boy?',
        createdDate: '20-07-1999'
      },
      {
        author: 'robbie',
        text: 'This is definately something I will use',
        createdDate: '10-11-2015'
      },
      {
        author: 'trevor',
        text: 'Looks like a good starting point',
        createdDate: '27-03-2018'
      },
      {
        author: 'taras',
        text: 'No way, I\'m sysdba',
        createdDate: '20-01-2015'
      },
    ];
  }

}
