import { trigger, transition, query, style, animate, group, animateChild } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Home=> About', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          "background-color": "white",
          content: ''
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
    ]),
    transition('* => *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          "background-color": "white",
          content: ''
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ left: '100%' }))
        ], { optional: true }),
        query(':enter', [
          animate('1000ms ease-out', style({ left: '0%' }))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ])

  ]);




