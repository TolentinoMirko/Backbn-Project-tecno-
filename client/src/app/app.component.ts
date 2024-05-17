import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  data!: any;
  constructor(private http: HttpClient)
  {
    this.http.get("https://5000-tolentinomi-backbnproje-43fq2etylt9.ws-eu111.gitpod.io/simple_json")
    .subscribe(
      (data) => this.data = data
    )
   
  }

}
