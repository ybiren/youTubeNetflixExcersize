import { ISearchResult } from "src/app/interfaces";
import { Observable, of } from "rxjs";
import { baseSearch } from "./baseSearch";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Inject } from "@angular/core";


export class NetflixSearch extends baseSearch {
    
    private _url: string = "https://www.netflix.com"; 
    
    constructor(@Inject(HttpClient) http) {
        super(http);
    }
    
    doSearch(query: string) : Observable<ISearchResult[]> {
    
        return of([{videoId: "XXX", 
                   title: "not implemented",
                   url:"https://image.shutterstock.com/image-photo/web-page-not-implemented-error-600w-1176011533.jpg"}
                  ])
    }

    parseLink(url: string): string {
      return "";
    } 

}