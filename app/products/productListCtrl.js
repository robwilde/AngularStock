/**
 * Created by robert on 19/08/2015.
 */
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                    ["productResource", "$log", ProductListCtrl]);

    function ProductListCtrl(productResource, $log) {
        var vm = this;

        productResource.query(function(data){
           vm.products = data;
        });

        vm.batteryImageThumb = function (productNumber) {
            return "http://brisrb.dev/images/thumb/" + productNumber + ".jpg";
        };

        vm.batteryImage = function () {
            return "http://brisrb.dev/images/brisbra-battery-with-label.fw.png";
        };

        vm.showImage = false;

        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        }
    }
}());
