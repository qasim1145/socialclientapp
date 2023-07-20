import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'social-app';
  users: any = [];
  constructor(private http: HttpClient) {
  
  }

  ngOnInit(): void {
  
   this.getActiveusers();
  }

  getActiveusers() {

    this.http.get<any>("https://localhost:44322/api/User/GetAllActiveUsers").subscribe(
      {
        next: (response) => {
          this.users = response.data;
          console.log(response);
        },
        error: (e) => console.error(e)
      }
     )

  }
  
}
