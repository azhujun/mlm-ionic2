import { HttpServer } from '../providers/http-server';
import { ICallBack } from '../interface/Index';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeModel {
  private _callbackMessage:ICallBack;
  constructor(public http: HttpServer) {
      this._callbackMessage = {
        code: 400,
        message: null,
        data:null,
        list: null
      }
  }

  getAllList = (callback:Function):any => {
    this.http.doGet('http://web.itaowan.cn/phpserver/index.php').then((res:ICallBack)=>{
        if(res.code==200){
          callback(res);
        }else{
          this._callbackMessage.code = res.code;
          callback(this._callbackMessage);
        }
    });
  }
}
