(function(){
  'use strict';

  angular
    .module('app.<%= module %>', [])
    .config(configuration);

  configuration.$injector = ['$stateProvider'];

  function configuration($stateProvider){

    //add your state mappings here
    //$stateProvider
    //  .state();
  }
}());
