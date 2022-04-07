import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataFetchService {
  Url='https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) {
  }
  getData(){
    return this.http.get(this.Url);
  }
getIdData(id:any)
{
  return this.http.get(this.Url+id);
}
}
