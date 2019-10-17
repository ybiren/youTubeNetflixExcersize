import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ISource } from '../interfaces';
import { ToastrService } from 'ngx-toastr';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-link-parser',
  templateUrl: './link-parser.component.html',
  styleUrls: ['./link-parser.component.scss']
})
export class LinkParserComponent implements OnInit {

  @Input() source: ISource;
  @Output() videoParsed: EventEmitter<string>  = new EventEmitter<string>();

  public url: string;

  constructor(private svc: SearchService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  // Parses link according to its source
  doParse() {
    if (this.url.trim()) {
      const videoId = this.svc.ParseLink(this.url);
      if (videoId) {
        this.videoParsed.emit(videoId);
      } else {
        this.toastr.error('Link is not valid', 'Error');
      }
    }
  }
}
