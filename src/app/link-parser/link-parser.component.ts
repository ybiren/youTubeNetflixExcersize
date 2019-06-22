import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ISource } from '../interfaces';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-link-parser',
  templateUrl: './link-parser.component.html',
  styleUrls: ['./link-parser.component.scss']
})
export class LinkParserComponent implements OnInit {

  @Input() source: ISource;
  @Output() videoParsed: EventEmitter<string>  = new EventEmitter<string>();

  public url: string;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

 /*
  Parses youtube links and gets video id,
  supported links:

  https://www.youtube.com/watch?v=[videoId]
	https://youtu.be/[videoId]?t=37
	https://www.youtube.com/watch?v=[videoId]&feature=youtu.be#t=37
	https://youtu.be/[videoId]
  */
  private youtubeParse() {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = this.url.match(regExp);
    if (match&&match[2].length === 11) {
        return match[2];
    } else {
      return '';
    }
  }

  // Parses link according to its source
  doParse() {
    if (this.url.trim()) {
      let videoId = '';
      switch (this.source.name) {
        case 'YOUTUBE':
          videoId = this.youtubeParse();
        break;
        default:
        break;
      }
      if (videoId) {
        this.videoParsed.emit(videoId);
      } else {
        this.toastr.error('Link is not valid', 'Error');
      }
    }
  }

}
