import { ISearchResult } from "src/app/interfaces";
import { Observable, throwError } from "rxjs";
import { baseSearch } from "./baseSearch";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { Inject, Injectable } from "@angular/core";


export class YoutubeSearch extends baseSearch {
    
    private _url: string = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBIWc6TY912DjmHzWocSlvLsg6cSUZWOaQ&part=snippet&type=video&maxResults=50"; 
    
    constructor(@Inject(HttpClient) http) {
        super(http);
    }
    
    doSearch(query: string) : Observable<ISearchResult[]> {
    
        return this.http.get(`${this._url}&q=${query}`).pipe(map((x) => {
            const searchResArr: ISearchResult[] = [];
            x["items"].forEach((item) => {
              searchResArr.push({ videoId: item.id.videoId, title: item.snippet.title, url: item.snippet.thumbnails.default.url});
            });
            return searchResArr;
          }),catchError((exp)=> {alert(exp); return throwError(exp);}
             ))
    }

    /*
     Parses youtube links and gets video id,
     supported links:

    https://www.youtube.com/watch?v=[videoId]
	https://youtu.be/[videoId]?t=37
	https://www.youtube.com/watch?v=[videoId]&feature=youtu.be#t=37
	https://youtu.be/[videoId]
  */
   parseLink(url: string): string {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      if (match&&match[2].length === 11) {
            return match[2];
        } else {
            return '';
        }
    }
}