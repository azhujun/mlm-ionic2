import { Component,ViewChild,ElementRef } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild("leftContent") leftContent:ElementRef;
  @ViewChild("rightContent") rightContent:ElementRef;
  constructor(public navCtrl: NavController) {
    this.init();
  }
  init(){
    console.log(this.leftContent,this.rightContent);
  }
  ionViewDidLoad(){
    console.log(this.leftContent,this.rightContent);
  }

}
