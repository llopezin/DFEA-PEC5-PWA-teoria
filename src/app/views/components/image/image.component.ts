import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Image from 'src/app/shared/models/image.model';
import { ImagesService } from 'src/app/shared/services/images.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.sass'],
})
export class ImageComponent implements OnInit {
  public image: Image;

  constructor(
    private imagesService: ImagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    this.getImage(identifier);
  }

  getImage(id): void {
    this.imagesService.getImageById(id).subscribe((image) => {
      if (!image) {
        return this.router.navigateByUrl('/');
      }

      this.image = image;
    });
  }
}
