/**
 * Created by pery on 27-Oct-16.
 */
module.exports = function () {
    /*Style*/
    require('./vendor.scss');

    /*Icons*/
    require('../../node_modules/font-awesome/scss/font-awesome.scss');

    /*JS*/
    global.$ = require('jquery');
    require('angular');


};
