/**
 * Created by pery on 27-Oct-16.
 */

require('./vendor')();

var appModule = require('../index');
// instead of ng-app="appName"
angular.element(document).ready(function () {
    angular.bootstrap(document, [appModule.name],{
        strictDi:true
    });
});
