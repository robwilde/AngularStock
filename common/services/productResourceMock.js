/**
 * Created by robert on 19/08/2015.
 */
(function() {
    "use strict";

    var app = angular.module("productResourceMock", ["ngMockE2E"]);

    app.run(function ($httpBackend) {

        var products = [
            {" productId": 1,
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
            },
            {" productId": 2,
                "productNumber": "S50D20L",
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
                "cost": 55.00,
                "price": 95.00,
                "type": "JIS",
                "orders": 2,
                "ordered": 2,
                "vehicleStock": 1,
                "primeStock": 3
            },
            {" productId": 3,
                "productNumber": "AU22R600SMF",
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
                "cost": 85.00,
                "price": 125.00,
                "type": "22F",
                "orders": 4,
                "ordered": 3,
                "vehicleStock": 3,
                "primeStock": 5
            }
        ];

        var productUrl = "/api/products";

        $httpBackend.whenGET(productUrl).respond(products);

        var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var product = {"productId": 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId == id) {
                        product = products[i];
                        break;
                    }
                };
            }
            return [200, product, {}];
        });

        $httpBackend.whenPOST(productUrl).respond(function (method, url, data) {
            var product = angular.fromJson(data);

            if (!product.productId) {
                // new product Id
                product.productId = products[products.length - 1].productId + 1;
                products.push(product);
            }
            else {
                // Updated product
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId == product.productId) {
                        products[i] = product;
                        break;
                    }
                };
            }
            return [200, product, {}];
        });

        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();

    });

}());
