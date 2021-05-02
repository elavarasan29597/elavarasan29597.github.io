import { TranslateService } from '@ngx-translate/core';
import { slideInAnimation } from './animation/router.service';
import { ViewChild, Attribute, Component, Directive, ElementRef, Inject, InjectionToken, ViewEncapsulation, ChangeDetectionStrategy, OnDestroy, OnInit, Optional, HostListener } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

type WindowXY = [number, number];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {




  constructor(
    public translate: TranslateService,
    private router: Router,
    private elementRef: ElementRef,
  ) {
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {

  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }




}