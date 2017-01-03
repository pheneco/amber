import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './loginForm.html';

class LoginCtrl {
	constructor(){
		
	}
}

export default angular.module('loginForm',[angularMeteor])
	.component('loginForm',{
		templateUrl	: 'imports/users/loginForm.html',
		controller	: LoginCtrl
	});