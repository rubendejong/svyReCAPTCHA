angular.module('recaptchaGoogleRecaptcha',['servoy']).directive('recaptchaGoogleRecaptcha', ['$timeout', '$window', function($timeout, $window) {
	return {
		restrict: "E",
		scope: {
			model: "=svyModel",
			api: "=svyApi",
			handlers: "=svyHandlers",
			svyServoyapi: "=svyServoyapi"
		},
		link: function($scope, $element, $attrs) {				
			$window.onReCaptchaSuccessful = function(response) {
				$scope.model.response = response;
				$scope.svyServoyapi.apply("response");

				if ($scope.handlers.onSuccessful) {
					$scope.handlers.onSuccessful(response);
				}
			}

			if ($scope.handlers.onExpired) {
				$window.onReCaptchaExpired = function() {
					$scope.handlers.onExpired();
				}
			}

			if ($scope.model.isRendered) {
				$timeout(render);
			}

			/**
			 * Returns whether or not the widget has properly been loaded in the browser
			 *
			 * @return {Boolean}
			 */
			$scope.api.isLoaded = function() {
				return isLoaded();
			}
			
			/**
			 * Renders the actual widget in the browser for it to become visible
			 * <br/>
			 * <b>Note</b>: this can only be done once and cannot be rendered again
			 */
			$scope.api.render = function() {
				render();
			}

			/**
			 * Resets the value of the widget in order for the user to (re)validate it
			 * <br/>
			 * <b>Note</b>: this function needs to be called in case the reCAPTCHA has expired
			 */
			$scope.api.reset = function() {
				if (!isLoaded()) {
					throw "Google reCAPTCHA widget is not loaded!";
				}

				grecaptcha.reset();
			}

			/**
			 * @return {Boolean}
			 */
			function isLoaded() {
				return typeof grecaptcha !== "undefined";
			}

			function render() {
				if (!$scope.model.siteKey) {
					throw "Google reCAPTCHA needs a valid \"siteKey\" value!";
				}

				var options = {sitekey: $scope.model.siteKey, theme: $scope.model.theme};
				
				if ($scope.model.language) {
					options.hl = $scope.model.language;
				}
				
				if ($scope.handlers.onSuccessful) {
					options.callback = "onReCaptchaSuccessful";
				}

				if ($scope.handlers.onExpired) {
					options["expired-callback"] = "onReCaptchaExpired";
				}
				
				grecaptcha.render($scope.model.svyMarkupId, options);
				
				if ($scope.model.tabSeq) {
					// "hack" the tab sequence as the API supplies broken functionality
					var iframe = $("#" + $scope.model.svyMarkupId + " iframe");
					if (iframe) {
						iframe.attr("tabindex", $scope.model.tabSeq);
					}
				}
				
				$scope.model.isRendered = true;
				$scope.svyServoyapi.apply("isRendered");
			}
		},
		templateUrl: "recaptcha/googleRecaptcha/googleReCaptcha.html"
	};
}]);