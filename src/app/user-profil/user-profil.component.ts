import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
  
})

export class UserProfilComponent implements OnInit {

  User = {
    name : 'Hettak',
    firstName : 'Mehdi',
    age : 37,
    quote : '',
    photo : "http://document.nintendo-difference.com/47487/artworks/3de78fa737bf38afeef4de286d00abc7.jpg",
    hide: true
  };


  
  ngOnInit() {
  }

}

