import angular from 'angular';
import angularMeteor from 'angular-meteor';
import loginForm from '../imports/users/loginForm.js';

angular.module('amber',[
	angularMeteor,
	loginForm.name
]);