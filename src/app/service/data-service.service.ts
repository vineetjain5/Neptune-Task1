import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataServiceService {

  selectedItems = [];
  addedproject = [];
  fname : string;
  lname : string;
  email : string;
  title : string;
  yoe : string;
  isSwitched : boolean;
  constructor() { }

  getData(fname,lname,email,title,yoe,selectedItems,isSwitched){
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.title = title;
    this.yoe = yoe;
    this.selectedItems = selectedItems;
    this.isSwitched = isSwitched;
    console.log("Inside Service"+this.fname+this.lname+this.email+this.title+this.yoe+JSON.stringify(this.selectedItems)+this.isSwitched);
  }

  setFresher():boolean{
    return this.isSwitched;
  }
  setfname():string{
    console.log("Inside Set Service"+this.fname);
    return this.fname;
  }

  setlname():string{
    console.log("Inside Set Service"+this.lname);
    return this.lname;
  }

  setEmail():string{
    console.log("Inside Set Service"+this.email);
    return this.email;
  }
  setTitle():string{
    console.log("Inside Set Service"+this.title);
    return this.title;
  }
  setYoe():string{
    console.log("Inside Set Service"+this.yoe);
    return this.yoe;
  }

  setSkills():any[]{
    console.log("Inside Set Service"+ JSON.stringify(this.selectedItems));
    return this.selectedItems;
  }

  getProject(addedproject){
    console.log("Inside get project"+ JSON.stringify(addedproject));
    this.addedproject = addedproject;
  }

  setProject():any[]{
    console.log("Inside Set project"+ JSON.stringify(this.addedproject));
    return this.addedproject;
  }
}
