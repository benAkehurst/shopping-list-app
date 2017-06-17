(function(){

	"use strict";

	var appModule = angular.module("appModule", ["ngRoute",
												 "landingModule",
												 "profileModule"
												]);

	appModule.config(function($routeProvider) {
	
			$routeProvider

			.when("/landing",{
				controller:"LandingController",
				templateUrl:"app/landing/landingView.html"
			})

			.when("/profile",{
				controller:"ProfileController",
				templateUrl:"app/profile/profileView.html"
			});
	});

})();