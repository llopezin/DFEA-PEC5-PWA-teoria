import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Image from '../models/image.model';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  public baseUrl: string = 'https://picsum.photos/';

  constructor(private http: HttpClient) {}

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.baseUrl}/v2/list?page=8`);
  }

  getImageById(id): Observable<Image> {
    return this.http.get<Image>(`${this.baseUrl}/id/${id}/info`);
  }
}
