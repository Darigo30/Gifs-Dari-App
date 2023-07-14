import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h4 class="text-bold">Buscar:</h4>
    <input type="text"
      class="form-control mt-4 mb-4"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    >
  `
})

export class SearchBoxComponent  {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;


  constructor( private gifsService: GifsService ) { }


  // searchTag( newTag: string ) {
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';

  }

}
