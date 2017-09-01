/* jshint esversion: 6 */

let cotApp;
let cotLogin;
let navi;

// Document ready.
$(document).ready(function() {
	cotApp = new cot_app('doadmin2');
	cotApp.render(function() {
		function onLoginReady(cot_login_instance) {}

		function onLoginLogin(cot_login_instance) {}

		cotApp.setTitle('Do Admin 2');

		cotLogin = new cot_login({
			appName: 'c3app',
			ccRoot: 'https://insideto-secure.toronto.ca',
			welcomeSelector: null,
			onReady: onLoginReady,
			onLogin: onLoginLogin
		});
	});
});
