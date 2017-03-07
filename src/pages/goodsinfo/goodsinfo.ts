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
  public isActiveGoods = null;
  public GoodsCAR = [];
  public number = 1;
  public GoodsIndex = null;
  public GoodsIndexSize = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodsinfoPage');
    this.Goods = [
      {
        name:'妮子大衣',
        color:'红褐色',
        size:{
          s:200,
          m:23,
          l:46,
          xl:55
        }
      },
      {
        name:'妮子大衣',
        color:'红色',
        size:{
          s:200,
          m:23,
          l:46,
          xl:55
        }
      }
    ]
  }

  plus(){
    if(this.number < this.GoodsIndex.size[this.GoodsIndexSize]){
      this.number++;
    }else{
      console.log('没这么多')
    }
  }
  jian(){
    if(this.number>1){
      this.number--;
    }
  }

  ACTIVE_GOODS(item){
    this.GoodsIndex = item;
    let ActiveArray = [];
    for (var key in item.size) {
      if (item.size.hasOwnProperty(key)) {
        ActiveArray.push(key)
      }
    }
    this.isActiveGoods=ActiveArray;
  }

  addCar(){
    this.GoodsCAR.push({
      goodsName: this.GoodsIndex.name,
      goodsColor: this.GoodsIndex.color,
      goodsNumber: this.number,
      goodsSize:this.GoodsIndexSize
    })
    console.log(this.GoodsCAR)
  }
  ACTIVE_GOODS_SIZE(size){
    this.GoodsIndexSize = size;
    this.number = 1;
  }
  CanOrder(){
    console.log(1)
  }
}
