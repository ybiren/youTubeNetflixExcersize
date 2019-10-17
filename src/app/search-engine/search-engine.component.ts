import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ISource, ISearchResult } from '../interfaces';
import { ToastrService } from '../../../node_modules/ngx-toastr';
import { SearchService } from '../search.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss']
})
export class SearchEngineComponent implements OnInit {

  @Input() source: string;
  @Output() videoSelected: EventEmitter<string>  = new EventEmitter<string>();

  public query: string;
  public items$: Observable<ISearchResult[]>

  constructor(
    private toastr: ToastrService,
    private svc: SearchService) { }

  ngOnInit() {
  }


  // Do web request for given keyword
  doRequest() {
    this.items$ = this.svc.DoSearch(this.source, this.query);
    
    /*
    this.http.get(`${this.source.url}&q=${this.query}`).subscribe((res) => {
      this.items = res.json().items;
    }, (error) => {
      console.log(error);
      this.toastr.error(JSON.stringify(error), 'Error');
    });
    */

  }

  handleVideoSelected(videoId: string) {
    this.videoSelected.emit(videoId);
  }
}
