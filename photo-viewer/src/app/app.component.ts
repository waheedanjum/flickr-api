
import { Component, OnInit } from '@angular/core';
import { PhotoSearchService } from './services/photo-search.service';
import { CombinedViewModel, Photo } from '../models/photo-gallery-model';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Photo Viewer';
  // model: CombinedViewModel;
  photo: Photo[];
  hideAll: boolean;

  constructor(private photoSearchService: PhotoSearchService) {
    this.hideAll = false;
  }

  ngOnInit(): void {
    this.showPhotoGallery();

  }

  showPhotoGallery() {
    console.log(this.photoSearchService.getPhotoGallery().subscribe(data => {
      // this.model = data;
      this.photo = this.insertImgURL(data.photos.photo);

    }));

    console.log(this.photo);
  }

  insertImgURL(photo: Photo[]): Photo[] {
    _.forEach(photo, (p) => {
      // tslint:disable-next-line: max-line-length
      p.img_url = 'https://farm' + p.farm + '.staticflickr.com/' + p.server + '/' + p.id + '_' + p.secret + '.jpg';
      p.isHidden = false;
    });
    return photo;
  }

  onClick(e: any) {
    e.srcElement.className = 'img-fluid w-100';
    const id = e.srcElement.id;
    _.forEach(this.photo, (p) => {
      p.id === id ? p.isHidden = false : p.isHidden = true;
    });
  }

}
