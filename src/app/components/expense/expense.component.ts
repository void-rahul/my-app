import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExpenseService } from 'src/app/service/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit{
  ngOnInit(): void {
  }

  isSidePanelOpen: boolean = false;
  expenseArray: any[]= [];
  expenseObj: any = {
    "Id": "",
    "ExpenseHead": "",
    "Head": "",
    "ExpenseAmount": '',
    "FirmID": "",
    "FirmName": "",
    "IsActive": '',
    "CreatedDate": "2023-01-01T13:06:16.996Z",
    "CreatedBy": ''
  };
 

  onEdit(Id: any) {
    this.getExpense();
  };
  onDelete(id: any) {
  };  
  getExpense(){
  };
  SaveExpense(){
  };
  updateExpense(){
  };
  cancelExpense(){
  };


  addSidePanel(){
    this.isSidePanelOpen= true;
  };
  closeSidePanel(){
    this.isSidePanelOpen= false;
  };
}
