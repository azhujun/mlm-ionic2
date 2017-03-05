import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Wholookme page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wholookme',
  templateUrl: 'wholookme.html'
})
export class WholookmePage {
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
