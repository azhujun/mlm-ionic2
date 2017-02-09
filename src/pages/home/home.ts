import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeModel } from '../../model/Home-model';
import {CallBack} from "../../Interface/Index";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild("leftContent") leftContent:ElementRef;
  @ViewChild("rightContent") rightContent:ElementRef;
  public List:Array<{title:string}>;
  constructor(public navCtrl: NavController,public homemodel: HomeModel) {
    this.List = [
    ]
  }
  ionViewDidLoad(){
      this.homemodel.getAllList((res)=>{
          console.log(res);
          this.List = res.list;
      })
  }

}
