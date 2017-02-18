import { HttpServer } from '../providers/http-server';
import { ICallBack } from '../interface/Index';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeModel {
  private _callbackMessage:ICallBack;
  constructor(public http: HttpServer) {
      this._callbackMessage = {
        code: 500,
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
          this._callbackMessage.message = res.message||'系统错误';
          callback(this._callbackMessage);
        }
    });
  }
}
