import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})


export class AppComponent implements OnInit {
  users: [] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url = 'https://dummyjson.com/users';
    this.http.get<any>(url).subscribe((response) => {
      this.users = response.users.map((user: any) => ({
        firstName: user.firstName,
        lastName: user.lastName
      }));
    });
  }
}
