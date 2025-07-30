import { Component } from '@angular/core';

@Component({
  selector: 'app-walterer',
  imports: [],
  templateUrl: './walterer.html',
  styleUrl: './walterer.scss'
})
export class Walterer {
  name: string | undefined;
  age: number | undefined;

  constructor() {
    this.getWalter();
  }

  getWalter() {
    const baseUrl = window.location.origin;
    fetch(`${baseUrl}/api/v0/walter`)
      .then(response => response.json())
      .then(data => {
        this.name = data.name;
        this.age = data.age; 
      })
      .catch(error => {
        console.error('API call failed:', error);
      });
  }
}
