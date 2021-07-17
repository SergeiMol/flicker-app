import { Injectable } from '@angular/core';
import { HttpSearchService } from './http/http-search.service';
import { environment } from '../../../environments/environment.prod';
import { IFlickrResponse } from '../interfaces/flickr-response.interface';
import { IPhoto } from '../interfaces/photo.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchInputService {
  private urlArr: IPhoto[] = [];


  constructor(private httpSearch: HttpSearchService) {
  }

  onSearchFieldInput(word: string): IPhoto[] {
    this.urlArr = [];
    const params = `api_key=${environment.flickr.key}&text=${word}&format=json&nojsoncallback=1&per_page=12`;
    this.httpSearch.getFlickrPhotos(params).subscribe((res: IFlickrResponse) => {
      res.photos?.photo.forEach((photo) => {
        console.log(photo);
        const photoObj = {
          url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`,
          title: photo.title
        };
        this.urlArr.push(photoObj);
      });
    });
    return this.urlArr;
  }
}
