/**
 * Created by Deb on 8/20/2014.
 */
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                    ["productResource", ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm = this;

        productResource.query(function(data){
           vm.products = data;
        });


        vm.batteryImageThumb = function (productNumber) {
            return "http://brisrb.dev/images/thumb/" + productNumber + ".jpg";
        }

        vm.batteryImage = function () {
            return "http://brisrb.dev/images/brisbra-battery-with-label.fw.png";
        }

        vm.showImage = false;

        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        }
    }
}());