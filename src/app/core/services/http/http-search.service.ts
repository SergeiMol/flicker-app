import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';
import { IFlickrResponse } from '../../interfaces/flickr-response.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpSearchService {

  constructor(private http: HttpClient) {
  }

  getFlickrPhotos(params: string): Observable<IFlickrResponse> {
    return this.http.get<IFlickrResponse>(environment.flickr.url + params);
  }
}
