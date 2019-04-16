import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sign-up2',
  templateUrl: './sign-up2.component.html',
  styleUrls: ['./sign-up2.component.scss']
})
export class SignUP2Component implements OnInit {

  email:string = ""
  user:string = ""

onSubmit() {
  alert('SUCCES!! :-)')

}

  constructor() { }

  ngOnInit() {
  }

}
