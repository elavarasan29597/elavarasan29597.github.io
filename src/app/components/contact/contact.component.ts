import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  data!: "/find?q=london&cnt=0&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric";
  private options = {
    "method": "GET",
    "hostname": "community-open-weather-map.p.rapidapi.com",
    "port": null,
    "path": "/find?q=london&cnt=0&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric",
    "headers": {
      "x-rapidapi-key": "d8dbf2a841mshaa91d0b544f3b6ep1bcc58jsn233c7dca4885",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "useQueryString": true
    }
  };


  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:53970/'
    }),
    params: {
      'q': 'london',
      "appid": "50a7aa80fa492fa92e874d23ad061374",
    }
  }


  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     "x-rapidapi-key": "0f8191d0-ac46-11eb-8419-07c43e86acf5",
  //     "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
  //   }),
  //   params: {
  //     'q': 'london',
  //     "appid": "null",
  //   }
  // }

  ngOnInit(): void {

    this.http.get("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=3ea1d7b8d4a98b36fbc44409cc48a3bc")
      .pipe(map((iterable: any) => {
        for (const key in iterable) {
          if (Object.prototype.hasOwnProperty.call(iterable, key)) {
            const element = iterable[key];
            console.log(element);
          }
        }
      }))
      .subscribe((iterable: any) => {
        console.log(iterable);
      });

  }




}
