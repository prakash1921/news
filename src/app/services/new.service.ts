import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewService {
  dataList:any=[]
  url: any = 'https://newsapi.org/v2/everything?q=tesla&from=2021-04-19&sortBy=publishedAt&apiKey=c791e422aa4140029eb0a9717782fdea';
  constructor(public http: HttpClient,) { }
  getList() {
    return this.http.get(this.url)
  }
  setListeddata(data){
    this.dataList=data
  }
  getListeddata(){
    return this.dataList;
  }

}
