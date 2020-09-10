import {Component, ElementRef} from '@angular/core';
import {StopWatchService} from '../services/stop-watch.service';


@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopWatchComponent  {
  constructor(public stopWatchService : StopWatchService) {

  }



  startORStop() {
    this.stopWatchService.startORstop();
  }

  wait() {
  this.stopWatchService.wait();
  }

  reset() {
  this.stopWatchService.reset();
  }
}
