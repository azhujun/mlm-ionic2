import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  @ViewChild('mySlider') slider:Slides;
  mySlideOptions={
    autoplay:0,
    initialSlide:0,
    pager:false,
    loop:true,
    speed:300
  };
  constructor(public navCtrl: NavController) {

  }


}
