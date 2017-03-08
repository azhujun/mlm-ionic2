import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Goodsinfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-goodsinfo',
  templateUrl: 'goodsinfo.html'
})
export class GoodsinfoPage {
  public Goods = null;
  public GoodsIndex = null;
  public showCar = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodsinfoPage');
    this.Goods = [
      {
        attrname:'红色M号',
        id:'1',
        gid:'2',
        num:'12',
        imgpath:'img'
      },
      {
        attrname:'红色s号',
        id:'1',
        gid:'2',
        num:'0',
        imgpath:'img'
      },
      {
        attrname:'红色l号',
        id:'1',
        gid:'2',
        num:'100',
        imgpath:'img'
      },
      {
        attrname:'红色xl号',
        id:'1',
        gid:'2',
        num:'2',
        imgpath:'img'
      },
      {
        attrname:'红色xxl号',
        id:'1',
        gid:'2',
        num:'0',
        imgpath:'img'
      }
    ]
  }

  ACTIVE_GOODS(item){
    if(item.num>0){
      this.GoodsIndex = item;
    }
  }
  showCarFn(){
    this.showCar = !this.showCar;
  }
  JoinOrder(){
    if(this.GoodsIndex){
      this.showCar = false;
    }
  }
}
