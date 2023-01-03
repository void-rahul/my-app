import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http' 
@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

 constructor(private http:HttpClient) { }
 expense(){
  return this.http.get('https://transtraapi.sparatec.com/api/Expens/get');
 }
}
