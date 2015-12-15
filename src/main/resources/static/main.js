(function () {

    var app = angular.module('test', ['pascalprecht.translate']);

    app.config(function ($translateProvider) {
        var defaultLang = 'fr';
        $translateProvider.preferredLanguage(defaultLang);
        $translateProvider.fallbackLanguage(defaultLang);
        $translateProvider.useSanitizeValueStrategy('escaped');
        $translateProvider.useStaticFilesLoader({
            prefix: '/languages/',
            suffix: '.json'
        });
        moment.locale(defaultLang);
    });

    app.filter('momentL', function () {
        return function (input) {
            return moment(input).format('L');
        };
    })

    app.controller('TranslateController', function ($translate, $scope) {
        $scope.date = new Date();
        $scope.changeLanguage = function (langKey) {
            moment.locale(langKey);
            $translate.use(langKey);
        };
    });

})();