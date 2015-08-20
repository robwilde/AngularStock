/**
 * Created by robert on 20/08/2015.
 */
(function() {
    "use strict";

    angular
        .module("productManagement")
        .controller("ProductDetailCtrl",
                    ["product", ProductDetailCtrl]);

    function ProductDetailCtrl(product){
        var vm = this;

        vm.product = product;
        vm.title = "Product Detail: " + vm.product.productNumber;

    }

}());