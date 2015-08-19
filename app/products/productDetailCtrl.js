/**
 * Created by robert on 20/08/2015.
 */
(function() {
    "use strict";

    angular
        .module("productManagement")
        .controller("ProductDetailCtrl",
                    ProductDetailCtrl);

    function ProductDetailCtrl(){
        var vm = this;

        vm.product = {" productId": 1,
            "productNumber": "22F520SMF",
            "ah": 54,
            "rc": 95,
            "cca": 520,
            "dimensions": {
                "length": 240,
                "width": 127,
                "height": 203
            },
            "terminal": "STD",
            "hold-downs": "B9",
            "cost": 75.00,
            "price": 110.00,
            "type": "BCI",
            "orders": 5,
            "ordered": 7,
            "vehicleStock": 3,
            "primeStock": 4
        };

        vm.title = "Product Detail: " + vm.product.productNumber;

    }

}());