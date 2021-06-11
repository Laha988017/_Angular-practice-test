import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input("is-fav") isFavourite: boolean = true;

onClick(){
  this.isFavourite = !this.isFavourite;
}

  constructor() { }

  ngOnInit(): void {
  }

}
