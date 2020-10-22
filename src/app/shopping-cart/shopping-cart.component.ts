import { Observable, of, timer } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  animations: [
    trigger('hide', [
      state('active', style({
        transform: 'translateX(80%)'
      })),
      state('inactive', style({
        transform: 'translateX(0%)'
      })),
      transition('active => inactive', animate('800ms ease-in')),
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {
  // @HostBinding('class.homeLogo') isHome:boolean = false;
  public stateHide : string = 'inactive';
  public empty: boolean = true;

  constructor(private router: Router, private _renderer: Renderer2, private _elemRef : ElementRef) {
    // i want different styles depending on the route, since the shopping cart is shown on the store page (like amazon)
    if(this.router.url == '/tp04') {
      console.log('prout');
      this._renderer.setAttribute(this._elemRef.nativeElement, 'id','shopping-cart-page' );
    }
  }
  hideCart(event : any)
  {
    let state = this.stateHide;
    state == 'active' ? state = 'inactive' : state = 'active';
    let timer$ = timer(100);
    timer$.subscribe(t=> {
      this.stateHide = state;
    });
  }
  ngOnInit(): void {

  }

}
