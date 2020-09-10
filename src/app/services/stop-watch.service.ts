import { Injectable } from '@angular/core';
import {Subscription, timer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StopWatchService {
  public num: number = 0;
  public clicks: number = 0;
  public counter: Date;
  isStarted: boolean = false;
  isWaited: boolean = false;
  constructor() {
  }

  subscription: Subscription = timer(0, 1000).subscribe(t => {

      if (this.isStarted == true && this.isWaited == false) {
        this.counter = new Date(0, 0, 0, 0, 0, 0);
        this.counter.setSeconds(this.num++);
      }else if (this.isStarted == false && this.isWaited == false) {
        this.counter = new Date(0, 0, 0, 0, 0, 0);
        this.num = 0;
        this.counter.setSeconds(this.num)
      }else  if (this.isWaited == true && this.isStarted == true || this.isStarted == false){
        this.isStarted = false;
        this.counter = new Date(0, 0, 0, 0, 0, 0);
        this.counter.setSeconds(this.num);
      }
    }
  );

  subscriptoinForWaitButton: Subscription = timer(0,300).subscribe(t =>{
    console.log(this.clicks)
    if(this.clicks >= 2){
      console.log("two clicks")
      this.isStarted = true;
      this.isWaited = true;
      this.clicks = 0;
    }else {
      console.log(this.clicks + "==" + "CLICKS")
      this.clicks = 0;
    }
  })
  startORstop() {
    if (this.isStarted == false) {
      this.isStarted = true;
      this.isWaited = false;
    } else {
      this.isStarted = false;
    }
  }
  reset(){
        this.isStarted = false;
        this.isWaited = false;
        setTimeout(() => this.startORstop(), 1000);
  }
  wait(){
    this.clicks++;
  }


}
