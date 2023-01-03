import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LastService {

  constructor(private http:HttpClient) { }
  expenses(){
    return this.http.get('https://transtraapi.sparatec.com/api/Expens/get');
  }
  saveExpenses(data:any){
    return this.http.post('',data);

  }
}
