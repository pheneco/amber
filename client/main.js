import angular from 'angular';
import angularMeteor from 'angular-meteor';
import loginForm from '../imports/ui/components/users/loginForm.js';

angular.module('amber',[
	angularMeteor,
	loginForm.name
]);