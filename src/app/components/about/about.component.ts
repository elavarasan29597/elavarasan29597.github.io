import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  scroll: boolean = false;

  constructor(
    private router: Router,

  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
  }


  loadingdownloadCv = false
  loadinghearMe = false

  downloadCv() {
    this.loadingdownloadCv = true;
    setTimeout(() => this.loadingdownloadCv = false, 1000);
  }
  hearMe() {
    this.loadinghearMe = true;
    setTimeout(() => this.loadinghearMe = false, 1000);
  }


  // @HostListener("window:scroll", ["$event"])
  // onWindowScroll(e: any) {

  //   let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;

  //   let max = document.documentElement.scrollHeight;

  //   if (pos == max) {
  //     this.router.navigate(['/services'])
  //     window.scrollTo(0, pos - 20);
  //   }
  //   if (window.pageYOffset == 0) {
  //     this.router.navigate(['/'])
  //     window.scrollTo(0, pos - 20);
  //   }

  // }


}
