import { Component } from '@angular/core';
import { ExpenseService} from '..//..//service/expense.service'


@Component({
  selector: 'app-expense2',
  templateUrl: './expense2.component.html',
  styleUrls: ['./expense2.component.css']
})
export class Expense2Component {
  expenses:any;

  constructor(private expenseData:ExpenseService)
 {
  expenseData.expense().subscribe((data)=>{
    console.warn("data",data);
    this.expenses=data
  });  
 }
 
}
