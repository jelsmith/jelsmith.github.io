'use strict';

/**
 * @ngdoc overview
 * @name jeanasmithgithubioApp
 * @description
 * # jeanasmithgithubioApp
 *
 * Main module of the application.
 */
angular.module('jeanasmithgithubioApp', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
    
    $locationProvider.hashPrefix('');
    
    $routeProvider
        .when('/', {
            templateUrl: '',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angular.module('jeanasmithgithubioApp').controller('MainCtrl', function ($scope) {

    $scope.category = {
        logo: {
            display: 'logos',
            type: 'logo-i'
        },
        tshirt: {
            display: 't-shirts',
            type: 't-shirt'
        },
        showPoster: {
            display: 'show posters',
            type: 'show-poster'
        },
        website: {
            display: 'websites',
            type: 'website'
        }
    }

    /*
    PORTFOLIO OBJECT TEMPLATE
        {
            'name': '',
            'path': imgPrefix + '',
            'category': '',
            'layout': '',
            'link', ''
        }
    */

    var imgPrefix = 'images/portfolio/';
    var portfolio = [
        {
            'name': 'Codetta South Logo',
            'path': imgPrefix + 'codetta-south-record-guy_multicolored-bkg.png',
            'category': $scope.category.logo.type,
            'layout': 'landscape',
            'link': undefined
        },
        {
            'name': 'C Spire Gaming Club Logo',
            'path': imgPrefix + 'csgc-profile-img.png',
            'category': $scope.category.logo.type,
            'layout': 'landscape',
            'link': undefined
        },
        {
            'name': 'Empty Atlas Key Logo',
            'path': imgPrefix + 'ea-key.png',
            'category': $scope.category.logo.type,
            'layout': 'portrait',
            'link': undefined
        },
        {
            'name': 'Empty Atlas T-Shirt',
            'path': imgPrefix + 'navy-pentagon-rose.png',
            'category': $scope.category.tshirt.type,
            'layout': 'landscape',
            'link': undefined
        },
        {
            'name': 'Empty Atlas T-Shirt',
            'path': imgPrefix + 'gray-pupapple.png',
            'category': $scope.category.tshirt.type,
            'layout': 'landscape',
            'link': undefined
        },
        {
            'name': 'Empty Atlas T-Shirt',
            'path': imgPrefix + 'ea-topographic-t-shirt.png',
            'category': $scope.category.tshirt.type,
            'layout': 'landscape',
            'link': undefined
        },
        {
            'name': 'The Hero And A Monster T-Shirt',
            'path': imgPrefix + 'the-hero-and-a-monster_gray-bkg.png',
            'category': $scope.category.tshirt.type,
            'layout': 'landscape',
            'link': undefined
        },
        {
            'name': '5th Special Olympics MS T-Shirt',
            'path': imgPrefix + 'soms-mudbug-mambo.png',
            'category': $scope.category.tshirt.type,
            'layout': 'landscape',
            'link': undefined
        },
        {
            'name': 'Empty Atlas CD Release Show Poster',
            'path': imgPrefix + 'ea-hestia-release-show-poster.png',
            'category': $scope.category.showPoster.type,
            'layout': 'portrait',
            'link': undefined
        },
        {
            'name': 'Big Sleepy\'s Show Poster',
            'path': imgPrefix + 'big-sleepys-show-poster.png',
            'category': $scope.category.showPoster.type,
            'layout': 'portrait',
            'link': undefined
        },
        {
            'name': 'Martin\'s Show Poster',
            'path': imgPrefix + 'martins-show-poster.png',
            'category': $scope.category.showPoster.type,
            'layout': 'portrait',
            'link': undefined
        },
        {
            'name': 'OffBeat Show Poster',
            'path': imgPrefix + 'offbeat-show-poster.png',
            'category': $scope.category.showPoster.type,
            'layout': 'portrait',
            'link': undefined
        },
        {
            'name': 'OffBeat Show Poster',
            'path': imgPrefix + 'offbeat-show-poster-2.png',
            'category': $scope.category.showPoster.type,
            'layout': 'portrait',
            'link': undefined
        },
        {
            'name': 'Growlers Show Poster',
            'path': imgPrefix + 'growlers-show-poster.png',
            'category': $scope.category.showPoster.type,
            'layout': 'portrait',
            'link': undefined
        },
        {
            'name': 'The Flamingo Show Poster',
            'path': imgPrefix + 'the-flamingo-show-poster.png',
            'category': $scope.category.showPoster.type,
            'layout': 'portrait',
            'link': undefined
        },
        {
            'name': 'Empty Atlas Website',
            'path': imgPrefix + 'empty-atlas-site.png',
            'category': $scope.category.website.type,
            'layout': 'portrait',
            'link': 'https://emptyatlas.com/'
        },
        {
            'name': 'C Spire Gaming Website',
            'path': imgPrefix + 'c-spire-gaming-site.png',
            'category': $scope.category.website.type,
            'layout': 'portrait',
            'link': 'https://cspiregaming.com/#/'
        },
        {
            'name': 'First Baptist Church Poplarville Website',
            'path': imgPrefix + 'fbc-poplarville-site.png',
            'category': $scope.category.website.type,
            'layout': 'portrait',
            'link': 'https://www.firstbaptistpoplarville.church/'
        }
    ];

    function shuffle(list) {
        var m = list.length,
            t, i;

        while (m) {
            i = Math.floor(Math.random() * m--);
            t = list[m];
            list[m] = list[i];
            list[i] = t;
        };

        return list;
    };

    function groupBy(myArray, chunk_size) {
        var index = 0;
        var arrayLength = myArray.length;
        var tempArray = [];

        for (index = 0; index < arrayLength; index += chunk_size) {
            var myChunk = myArray.slice(index, index + chunk_size);
            // Do something if you want with the group
            tempArray.push(myChunk);
        }

        return tempArray;
    }

    function initPortfolio() {
        var shuffledList = shuffle(portfolio);
        var n = Math.ceil(shuffledList.length / 4);
        var lists = groupBy(shuffledList, n);
        return lists;
    };

    $scope.portfolio = shuffle(portfolio); // initPortfolio();
    console.log('portfolio');
    console.log($scope.portfolio);

//    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
//        baguetteBox.run('.tz-gallery');
//    });

});

//angular.module('jeanasmithgithubioApp').directive('onFinishRender', function ($timeout) {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attr) {
//            if (scope.$last === true) {
//                $timeout(function () {
//                    scope.$emit(attr.onFinishRender);
//                });
//            }
//        }
//    }
//});
