// init an app router
angular.module('UltraShopApp', ['ngRoute', 'uiSlider']).
config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
	when('/goods', {templateUrl: 'assets/views/goods-list.html', controller: GoodsListCtrl}).
	otherwise({redirectTo: '/goods'});
}]);