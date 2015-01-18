// set Goods list controller
function GoodsListCtrl($scope, $location, $anchorScroll, $http) {
    $http.get('assets/scripts/models/goods-list.json').success(function (data) {
        var filterGroupsObj = {},
        filterCompaniesObj = {},
        filterSelectGroups = $('#goods-filter-group'),
        filterSelectCompanies = $('#goods-filter-company');

        $scope.goods = data;
        $scope.orderProp = 'group';

        // init filters selects
        initFiltersSelects();

        function initFiltersSelects() {
            for (var elem in data) {
                filterGroupsObj[data[elem].group] = data[elem].group;
                filterCompaniesObj[data[elem].company] = data[elem].company;
            }
            $scope.filterGroupsObj = filterGroupsObj;
            $scope.filterCompaniesObj = filterCompaniesObj;
        }
    });

    $scope.lower_price_bound = 0;
    $scope.upper_price_bound = 100;

    // show selected goods item in modal window
    $scope.showElem = function (item) {
        $scope.curItem = item;
        $scope.curItemGroup = item.group;

        $('.modal-item-block').fadeIn(100);
        $('.modal-background').fadeIn(100);
        return false;
    };

    // show list of goods, simmillar to chosed one
    $scope.showSimillarElem = function (item) {
        $scope.curItem = item;
        $scope.curItemGroup = item.group;
        return false;
    };

    // close modal window
    $scope.closeElemModal = function () {
        if ($('.modal-item-block').css('display') == 'block') {
            $('.modal-item-block').fadeOut(0);
            $('.modal-background').fadeOut(0);
        }
    };

    // scroll to top
    $scope.scrollToTop = function () {
        $anchorScroll();
    };

    // reset filter
    $scope.resetFilter = function () {
        $scope.orderProp = 'group';
        $scope.group = '';
        $scope.company = '';
        $scope.lower_price_bound = 20;
        $scope.upper_price_bound = 100;

    };

    // bind value of 'price range' variable to current values of lower and upper bounds
    $scope.priceRange = function (item) {
        return (parseInt(item['priceDiscount']) >= $scope.lower_price_bound && parseInt(item['price']) <= $scope.upper_price_bound);
    };
}