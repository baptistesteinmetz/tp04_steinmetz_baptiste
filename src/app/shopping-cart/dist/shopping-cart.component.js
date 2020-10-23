"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShoppingCartComponent = void 0;
var product_action_1 = require("./../../shared/actions/product-action");
var product_state_1 = require("./../../shared/states/product-state");
var rxjs_1 = require("rxjs");
var animations_1 = require("@angular/animations");
var core_1 = require("@angular/core");
var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(router, _renderer, _elemRef, store) {
        this.router = router;
        this._renderer = _renderer;
        this._elemRef = _elemRef;
        this.store = store;
        // @HostBinding('class.homeLogo') isHome:boolean = false;
        this.stateHide = 'inactive';
        this.empty = true;
        // i want different styles depending on the route, since the shopping cart is shown on the store page (like amazon)
        if (this.router.url == '/tp04') {
            this._renderer.setAttribute(this._elemRef.nativeElement, 'id', 'shopping-cart-page');
        }
    }
    ShoppingCartComponent.prototype.hideCart = function (event) {
        var _this = this;
        var switchState = this.stateHide;
        switchState == 'active' ? switchState = 'inactive' : switchState = 'active';
        var timer$ = rxjs_1.timer(100);
        timer$.subscribe(function (t) {
            _this.stateHide = switchState;
        });
    };
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.listProduct$ = this.store.select(function (state) { return state.listProducts.products; });
        // Solution 1
        this.nbProducts$ = this.store.select(product_state_1.ProductState.getNbProducts);
        this.priceProducts$ = this.store.select(product_state_1.ProductState.getFullPriceProducts);
    };
    ShoppingCartComponent.prototype.onClickRemove = function (product) {
        this.removeItem(product);
    };
    ShoppingCartComponent.prototype.removeItem = function (product) {
        this.store.dispatch(new product_action_1.DelProduct(product));
    };
    ShoppingCartComponent = __decorate([
        core_1.Component({
            selector: 'app-shopping-cart',
            templateUrl: './shopping-cart.component.html',
            styleUrls: ['./shopping-cart.component.scss'],
            animations: [
                animations_1.trigger('hide', [
                    animations_1.state('active', animations_1.style({
                        transform: 'translateX(80%)'
                    })),
                    animations_1.state('inactive', animations_1.style({
                        transform: 'translateX(0%)'
                    })),
                    animations_1.transition('active => inactive', animations_1.animate('800ms ease-in')),
                ])
            ]
        })
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());
exports.ShoppingCartComponent = ShoppingCartComponent;
