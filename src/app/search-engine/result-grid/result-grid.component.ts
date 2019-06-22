import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ISource } from '../../interfaces';

@Component({
  selector: 'app-result-grid',
  templateUrl: './result-grid.component.html',
  styleUrls: ['./result-grid.component.scss']
})
export class ResultGridComponent implements OnInit {

  @Input() videoId: string;
  @Input() ttl: string;
  @Input() thumbUrl: string;
  @Input() source: ISource;
  @Output() videoSelected: EventEmitter<string>  = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  selectVideo() {
    this.videoSelected.emit(this.videoId);
  }

}
