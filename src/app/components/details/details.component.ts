import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataFetchService } from '../data-fetch.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
id:any;
Data:any;
  constructor(private dataFetchService: DataFetchService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id=params['id'];
      this.dataFetchService.getIdData(this.id).subscribe((data:any) => {
        this.Data = data.abilities;
        console.log(this.Data);
      })
    });


  }

}
