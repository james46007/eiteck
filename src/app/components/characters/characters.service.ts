import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private apiUrl:string = 'https://rickandmortyapi.com/api/character';

  constructor(private _httpClient: HttpClient) { }

  getFilterCharacters(currentPage: number, characterName: string) {
    return this._httpClient.get<any>(`${this.apiUrl}?page=${currentPage}&name=${characterName}`);
  }
  getASingleCharacter(id: number){
    return this._httpClient.get<any>(`${this.apiUrl}/${id}`);
  }
}
