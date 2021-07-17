import { IFlickrImage } from './flickr-image.interface';

export interface IFlickrResponse {
  photos: {
    photo: IFlickrImage[];
  };
}
