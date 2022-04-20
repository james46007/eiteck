import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/components/characters/characters.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public itemsPerPage!: number;
  public currentPage: number = 1;
  public totalItems: number = 0;

  public characters: any = [];
  public characterName: string = '';

  constructor(
    private _characterService: CharactersService,
  ) { }

  ngOnInit(): void {
    this.pageChanged(this.currentPage);
  }

  pageChanged(currentPage: number) {
    this._characterService.getFilterCharacters(currentPage, this.characterName).subscribe((data) => {
      this.characters = data.results;
      this.totalItems = data.info.pages * data.results.length;
      this.itemsPerPage = data.results.length;
      this.currentPage = currentPage;
    });
  }

  onSubmit() {
    this.pageChanged(1);
  }

}
