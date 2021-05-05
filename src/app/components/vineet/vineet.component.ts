import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DataServiceService } from 'src/app/service/data-service.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-vineet',
  templateUrl: './vineet.component.html',
  styleUrls: ['./vineet.component.scss']
})
export class VineetComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  addedproject = [];
  dropdownSettings:IDropdownSettings = {};
  fname : string = "";
  lname : string = "";
  email : string = "";
  title : string = "";
  yoe : string = "";
  project : string;
  onOff : string;
  isSwitched:boolean=false;

  constructor(private service :DataServiceService,private router: Router) { }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'Angularjs' },
      { item_id: 2, item_text: 'Angular2+' },
      { item_id: 3, item_text: 'Nodejs' },
      { item_id: 4, item_text: 'Expressjs' },
      { item_id: 5, item_text: 'Django' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: false
    };
    
  }

  onItemSelect(item: any) {
    console.log(item.item_text);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

   namecaller() : void{
      console.log(this.fname+this.lname+this.email+this.title+this.yoe+JSON.stringify(this.selectedItems));
      if(!this.fname || !this.lname || !this.email || !this.title || !this.yoe || !this.selectedItems){
        window.alert("Please fill required Fields")
      }else{
        if(this.isSwitched){
          if(this.yoe === '0'){
            this.service.getData(this.fname,this.lname,this.email,this.title,this.yoe,this.selectedItems,this.isSwitched);
            this.service.getProject(this.addedproject);
            this.router.navigate(['/about']); 
          }else{
            window.alert("Fresher must have years of experience as 0")
          }
        }else{
        if(this.addedproject.length >0){
          this.service.getData(this.fname,this.lname,this.email,this.title,this.yoe,this.selectedItems,this.isSwitched);
          this.service.getProject(this.addedproject);
          this.router.navigate(['about']);
        }else{
          window.alert("Please enter atleast 1 Project")
        }
      }
    } 
  }

  getSwitcherValue(onoffswitch) {
    this.isSwitched=!this.isSwitched;
   console.log("onoffswitch:"+this.isSwitched);
  }

  addProject(){
    if(!!this.project){
    console.log("project:"+this.project);
    var str = this.project;
    this.addedproject.push({str});
    console.log("list project:"+this.addedproject);
    this.project = "";
    }else{
      window.alert("enter a value");
    }
  }
}
