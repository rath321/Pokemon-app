import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataFetchService } from '../data-fetch.service';

@Component({
  selector: 'app-pokemon-data',
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.css']
})
export class PokemonDataComponent implements OnInit {
Data?: any;
value:any;
FilteredData?:any;
totalLength:any;
page:number=1;
  constructor(private router:Router, private route: ActivatedRoute, private dataFetchService: DataFetchService) {


   }

  ngOnInit(): void {
    this.getPokemonData()
  }
getPokemonData(){
  this.route.params.subscribe(params => {

    this.dataFetchService.getData().subscribe(data => {
      this.Data = data;
      console.log(data);
      this.FilteredData = this.Data.results;
      this.totalLength = this.Data.results.length();
    });
  });
}
applyFilters(value:any) {
console.log(value)
  this.FilteredData = this.Data.results.filter((item:any) => {
    console.log(item.name.includes(value));
     if(item.name.includes(value))
     {
        return item;
     }
  });
}
fn(i:any)
{
  this.router.navigate(['details',i]);
}
}


