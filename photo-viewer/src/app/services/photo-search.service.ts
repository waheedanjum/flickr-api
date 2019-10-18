
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PhotoSearchService {

  private accessPointUrl: string;

  constructor(private httpClient: HttpClient) {
    // tslint:disable-next-line: max-line-length
    this.accessPointUrl = 'https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=f2b91f0626d5bdfa57d403761b36a976&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1';
  }

  getPhotoGallery(): Observable<any> {
    return this.httpClient.get(this.accessPointUrl);
  }
}
