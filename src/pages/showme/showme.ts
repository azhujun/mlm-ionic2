import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-showme',
  templateUrl: 'showme.html'
})
export class ShowmePage {
  showFirst  = false;
  showSecond = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  ionViewDidLoad() {
    // console.log(this.navParams.data);
  }
  showTab(index){
    switch (index){
      case 1:
        this.showFirst = !this.showFirst;
      break;
      case 2:
        this.showSecond = !this.showSecond;
      break;
    }
  }

}

