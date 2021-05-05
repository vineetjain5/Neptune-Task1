import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  fname : string;
  lname : string;
  title : string;
  constructor(private service :DataServiceService) {
    this.fname = this.service.setfname();
    this.lname = this.service.setlname();
    this.title = this.service.setTitle();

    console.log("Inside about"+this.lname+this.fname);
   }

  ngOnInit(): void {
    
  }

}
