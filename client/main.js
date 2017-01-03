import angular from 'angular';
import angularMeteor from 'angular-meteor';
import loginForm from '../imports/components/users/loginForm.js';

angular.module('amber',[
	angularMeteor,
	loginForm.name
]);