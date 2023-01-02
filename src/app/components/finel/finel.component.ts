import { Component } from '@angular/core';
import { ExpenseService } from 'src/app/service/expense.service';
import { FinelService } from './finel.service'
@Component({
  selector: 'app-finel',
  templateUrl: './finel.component.html',
  styleUrls: ['./finel.component.css']
})
export class FinelComponent {
  expense:any;
  constructor(private expenceData:ExpenseService)
  {
    expenceData.expense().subscribe((data)=>{
      console.warn("data",data)
      this.expense=data
    })
    
  }

}
