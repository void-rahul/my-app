import { Component } from '@angular/core';
import { ExpenseService } from 'src/app/service/expense.service';
import { LastService } from './last.service'

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.css']
})
export class LastComponent {
  expenses: any;
  constructor(private expenseData: ExpenseService) {
    expenseData.expense().subscribe((data) => {
      console.warn("data", data)
      this.expenses = data
    })
  }

  getexpenseFormData(data: any) {

    this.expenseData.expense().subscribe((data)=>{
    })
  }


  expenseArray: any[] = [];
  expenseObj: any = {
    // "Id": "",
    // "ExpenseHead": "",
    // "Head": "",
    // "ExpenseAmount": '',
    // "FirmID": "",
    // "FirmName": "",
    // "IsActive": '',
    // "CreatedDate": "2023-01-01T13:06:16.996Z",
    // "CreatedBy": ''

    // "Id": "",
    // "FirmName": "",
    // "CompanyId": "",
    // "OwnerName": "",
    // "PANNo": "",
    // "GSTNo": "",
    // "GumastaNo": "",
    // "IsActive": '' ,
    // "CreatedDate": "",
    // "CreatedBy": ''


  };

  onEdit(Id: any) {

  };
  onDelete(id: any) {
  };



  isSidePanelOpen: boolean = false;

  addSidePanel() {
    this.isSidePanelOpen = true;
  };

  closeSidePanel() {
    this.isSidePanelOpen = false;
  };

}
