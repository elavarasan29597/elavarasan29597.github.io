import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hobbit',
  templateUrl: './hobbit.component.html',
  styleUrls: ['./hobbit.component.css']
})
export class HobbitComponent implements OnInit {

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
  }

}
