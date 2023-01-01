import { Component } from '@angular/core';

@Component({
  selector: 'app-rahul',
  templateUrl: './rahul.component.html',
  styleUrls: ['./rahul.component.css']
})
export class RahulComponent {
  title = 'my-app';
  myName = 'Rahul';
  getValue()
  {
    return "Get Function Data"
  }

}
