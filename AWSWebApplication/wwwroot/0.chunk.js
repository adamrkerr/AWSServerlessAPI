webpackJsonp([0],{

/***/ "../../../../../src/app/all-items/all-items.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_list_item_list_component__ = __webpack_require__("../../../../../src/app/all-items/item-list/item-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllItemsModule", function() { return AllItemsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__item_list_item_list_component__["a" /* ItemListComponent */]
    }
];
var AllItemsModule = (function () {
    function AllItemsModule() {
    }
    return AllItemsModule;
}());
AllItemsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(appRoutes)
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__item_list_item_list_component__["a" /* ItemListComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__item_list_item_list_component__["a" /* ItemListComponent */]]
    })
], AllItemsModule);

//# sourceMappingURL=all-items.module.js.map

/***/ }),

/***/ "../../../../../src/app/all-items/item-list/item-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all-items/item-list/item-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  item-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/all-items/item-list/item-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemListComponent = (function () {
    function ItemListComponent() {
    }
    ItemListComponent.prototype.ngOnInit = function () {
    };
    return ItemListComponent;
}());
ItemListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'app-item-list',
        template: __webpack_require__("../../../../../src/app/all-items/item-list/item-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/all-items/item-list/item-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ItemListComponent);

//# sourceMappingURL=item-list.component.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map