import { IFlickrImage } from './flickr-image.interface';

export interface IFlickrResponse {
  photos: {
    pages: number;
    photo: IFlickrImage[];
  };
}
