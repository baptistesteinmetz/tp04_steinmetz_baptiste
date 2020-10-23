"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var product_state_1 = require("./../shared/states/product-state");
var store_1 = require("@ngxs/store");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/common/http");
var customdirectives_directive_1 = require("./customdirectives.directive");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var get_products_service_1 = require("./get-products.service");
var app_component_1 = require("./app.component");
var header_form_component_1 = require("./header-form/header-form.component");
var footer_component_1 = require("./footer/footer.component");
var form_component_1 = require("./form/form.component");
var recap_component_1 = require("./recap/recap.component");
var forms_1 = require("@angular/forms");
var product_list_component_1 = require("./product-list/product-list.component");
var search_bar_component_1 = require("./search-bar/search-bar.component");
var router_1 = require("@angular/router");
var shopping_cart_component_1 = require("./shopping-cart/shopping-cart.component");
var product_detail_component_1 = require("./product-detail/product-detail.component");
var header_component_1 = require("./header/header.component");
var appRoutes = [
    { path: 'tp02', component: form_component_1.FormComponent },
    { path: 'tp03', component: product_list_component_1.ProductListComponent },
    { path: 'tp04', component: shopping_cart_component_1.ShoppingCartComponent },
    { path: '', component: product_list_component_1.ProductListComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_form_component_1.HeaderFormComponent,
                footer_component_1.FooterComponent,
                form_component_1.FormComponent,
                recap_component_1.RecapComponent,
                customdirectives_directive_1.ErrorInputDirective,
                recap_component_1.PhonePipe,
                recap_component_1.CodePipe,
                product_list_component_1.ProductListComponent,
                search_bar_component_1.SearchBarComponent,
                shopping_cart_component_1.ShoppingCartComponent,
                product_detail_component_1.ProductDetailComponent,
                header_component_1.HeaderComponent,
            ],
            imports: [
                animations_1.NoopAnimationsModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                store_1.NgxsModule,
                store_1.NgxsModule.forRoot([
                    product_state_1.ProductState
                ]),
                router_1.RouterModule.forRoot(appRoutes),
            ],
            providers: [get_products_service_1.ProductService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
