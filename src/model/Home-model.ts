import { HttpServer } from '../providers/http-server';
import { CallBack } from '../interface/';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeModel {
  public _callback:CallBack;
  constructor(public http: HttpServer) {
      this._callback = {
        code: 400,
        message: null,
        data:null,
        list: null
      }
  }

  getAllList = (callbackFn:Function):any =>{
    this.http.doGet('http://web.itaowan.cn/phpserver/index.php').then((res:CallBack )=>{
        if(res.code==200){
          callbackFn(res);
        }else{
          this._callback.code = res.code;
          callbackFn(this._callback);
        }
    });
  }
}
