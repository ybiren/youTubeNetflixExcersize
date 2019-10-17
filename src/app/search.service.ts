import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISource, ISearchResult } from './interfaces';
import { map } from 'rxjs/operators';
import { YoutubeSearch } from 'src/models/classes/youtubeSearch';
import { NetflixSearch } from 'src/models/classes/netflixSearch';
import { baseSearch } from 'src/models/classes/baseSearch';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _baseSearch: baseSearch;
  private _youtubeSearch: YoutubeSearch; //= new youtubeSearch(null); 
  private _netflixSearch: NetflixSearch; //= new netflixSearch(null);

  constructor(private http: HttpClient, @Inject(YoutubeSearch) youtubeSearch, @Inject(NetflixSearch) netflixSearch) { 
    this._youtubeSearch = youtubeSearch;
    this._netflixSearch = netflixSearch;
  }

  private searchFactory(source: string) {
   const factObj = {
      "YOUTUBE": this._youtubeSearch,
      "NETFLIX": this._netflixSearch
   }
     return factObj[source];
  }
  
  // Get sources
  GetSources(): Observable<ISource[]> {
    return this.http.get<ISource[]>('assets/sources.json')
  }

  UpdateSelectedSource(source: string) {
    this._baseSearch = this.searchFactory(source);
  }

  DoSearch(source: string,query: string): Observable<ISearchResult[]> {
    return this._baseSearch.doSearch(query); 
  }
  
  ParseLink(url: string): string {
   return this._baseSearch.parseLink(url);  
  }
}
