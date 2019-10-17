import { Observable, of } from "rxjs";
import { ISearchResult } from "src/app/interfaces";
import { HttpClient } from "@angular/common/http";

export abstract class baseSearch {
    constructor(public http: HttpClient) {}
    abstract doSearch(query: string) : Observable<ISearchResult[]>;
    abstract parseLink(url: string): string;
}