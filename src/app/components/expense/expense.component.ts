import { Component } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {
  isSidePanelOpen: boolean = false;








  addSidePanel(){
    this.isSidePanelOpen= true;
   }
   closeSidePanel(){
    this.isSidePanelOpen= false;
   }


}
