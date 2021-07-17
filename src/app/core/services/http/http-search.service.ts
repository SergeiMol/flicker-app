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
    console.log(params);
    return this.http.get<IFlickrResponse>(environment.flickr.url + params);
    /*.pipe(map((res: IFlickrResponse) => {
      const urlArr = [];
      res.photos.photo.forEach((ph: FlickrPhoto) => {
        const photoObj = {
          url: `https://farm${ph.farm}.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}`,
          title: ph.title
        };
        urlArr.push(photoObj);
      });
      return urlArr;
    }));*/

  }
}
