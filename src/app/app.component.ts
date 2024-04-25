import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any[] = [];

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

  downloadFile() {
    const fichier = new Blob([JSON.stringify(this.users)], { type: 'application/json' });
    const lien = document.createElement('a');

    lien.href = URL.createObjectURL(fichier);
    lien.download = 'users.json';
    
    document.body.appendChild(lien);
    lien.click();
    document.body.removeChild(lien);
    URL.revokeObjectURL(URL.createObjectURL(fichier));
  }
}
