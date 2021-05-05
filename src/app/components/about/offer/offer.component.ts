import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  yoe : string;
  selectedItems = [];
  addedproject = [];
  isSwitched:boolean;
  constructor(private service :DataServiceService) {
    this.yoe = this.service.setYoe();
    this.selectedItems = this.service.setSkills();
    this.addedproject = this.service.setProject();
    this.isSwitched = this.service.setFresher();
    
   }

  ngOnInit(): void {
  }

}
