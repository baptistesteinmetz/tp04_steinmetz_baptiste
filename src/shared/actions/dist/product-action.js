"use strict";
exports.__esModule = true;
exports.DelProduct = exports.AddProduct = void 0;
var AddProduct = /** @class */ (function () {
    function AddProduct(payload) {
        this.payload = payload;
    }
    AddProduct.type = '[Product] Add';
    return AddProduct;
}());
exports.AddProduct = AddProduct;
var DelProduct = /** @class */ (function () {
    function DelProduct(payload) {
        this.payload = payload;
    }
    DelProduct.type = '[Product] Del';
    return DelProduct;
}());
exports.DelProduct = DelProduct;
