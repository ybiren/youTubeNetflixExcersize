import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Http } from '@angular/http';
import { ISize } from '../../../node_modules/@types/selenium-webdriver';
import { ISource } from '../interfaces';
import { ToastrService } from '../../../node_modules/ngx-toastr';


@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss']
})
export class SearchEngineComponent implements OnInit {

  @Input() source: ISource;
  @Output() videoSelected: EventEmitter<string>  = new EventEmitter<string>();

  public query: string;
  public items: any[]  = [];

  constructor(
    private http: Http,
    private toastr: ToastrService) { }

  ngOnInit() {
  }


  // Do web request for given keyword
  doRequest() {
    this.http.get(`${this.source.url}&q=${this.query}`).subscribe((res) => {
      this.items = res.json().items;
    }, (error) => {
      this.toastr.error(JSON.stringify(error), 'Error');
    });
  }

  handleVideoSelected(videoId: string) {
    this.videoSelected.emit(videoId);
  }
}
