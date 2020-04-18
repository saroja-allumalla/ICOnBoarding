import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImageService {
  constructor(private httpClient: HttpClient) { }

  public getImage(imageUrl: string): Observable<Blob> {
      return this.httpClient.get(imageUrl, {responseType: 'blob'});
  }

}