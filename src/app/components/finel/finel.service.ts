import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FinelService {

  constructor(private http:HttpClient) { }
  expence(){
    return this.http.get('')
  }
}
