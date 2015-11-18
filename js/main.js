import angular from 'angular';
import 'angular-ui-router';
import config from './config';
import PARSE from './constants';
import HomeController from './controllers/home.controller';
import FunService from './services/fun.service';
import 'angular-h-sweetalert';





angular
  .module('app', ['ui.router', 'hSweetAlert'])
  .config(config)
  .controller('HomeController', HomeController)
  .service('FunService', FunService)
  .constant('PARSE', PARSE)
;