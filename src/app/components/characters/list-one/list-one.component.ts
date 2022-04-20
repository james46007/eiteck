import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-list-one',
  templateUrl: './list-one.component.html',
  styleUrls: ['./list-one.component.css']
})
export class ListOneComponent implements OnInit {

  public character: any;

  constructor(
    private route: ActivatedRoute,
    private _characterService: CharactersService,
  ) { 
    
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getASingleCharacter(id);
  }

  getASingleCharacter(id: number) {
    this._characterService.getASingleCharacter(id).subscribe((data) => {
      this.character = data;
    });
  }

}
