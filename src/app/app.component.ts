import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'spms';
  menus=[
    { path: '/hrms', title:'HRMS' },
    { path: '/aems', title:'AEMS'},
    { path: '/aims', title:'AIMS'},
    { path: '/fams', title:'FAMS'},
    { path: '/lems', title:'LEMS'},
    { path: '/tims', title:'TIMS'}
    

  ];
  
}
