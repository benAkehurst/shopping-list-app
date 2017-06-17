(function() {

    "use strict";

    var profileModule = angular.module("profileModule", []);

    profileModule.controller("ProfileController", function($scope, $http, $rootScope) {

        $scope.addNewListItem = function() {

            var newListItemObj = {
                name: $scope.itemName,
                description: $scope.itemDesciption,
                category: $scope.itemCategory,
                amount: $scope.itemAmount,
                price: $scope.itemPrice,
            }

            $http({
                method: "POST",
                url: "/addOneItem",
                headers: { 'Content-Type': 'application/json' },
                data: newListItemObj
            })

            .then(function(response) {
                console.log(response);
            });
        }

    });

})();
