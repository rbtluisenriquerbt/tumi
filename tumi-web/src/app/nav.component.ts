import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: [`
    .nav-box div{
        background-color: #0288D1;
        -webkit-transition: background-color 1s; /* For Safari 3.1 to 6.0 */
        transition: background-color 0.5s;
    }

    .active div{
        background-color: #03a9f4;
        -webkit-transition: background-color 1s; /* For Safari 3.1 to 6.0 */
        transition: background-color 0.5s;
    }
    `]
})
export class NavComponent{
}
