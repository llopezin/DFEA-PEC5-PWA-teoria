import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Image from 'src/app/shared/models/image.model';
import { ImagesService } from 'src/app/shared/services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.sass'],
})
export class ImagesComponent implements OnInit {
  public images: Image[];

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.imagesService.getImages().subscribe((images) => {
      this.images = images;
    });
  }
}
