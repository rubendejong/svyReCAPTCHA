/**
 * Returns the response which is generated as soon as the user successfully validated the reCAPTCHA
 *
 * @return {String}
 */
$scope.api.getResponse = function() {
	return $scope.model.response;
}

/**
 * Validates the response against the online Google service
 * <br/>
 * <b>Note</b>: this can only be executed if the user has validated the reCAPTCHA as the service needs the generated response. 
 * Will throw an exception otherwise.
 *
 *
 * @throws {String}
 * @param {String} secretKey
 *
 * @return {Boolean}
 */
$scope.api.validateResponse = function(secretKey) {
	if (!$scope.model.response) {
		throw "Response not present!"; //$NON-NLS-1$
	}

	if (!secretKey) {
		throw "Argument \"secretKey\" cannot be empty!"; //$NON-NLS-1$
	}

	var url = new java.net.URL("https://www.google.com/recaptcha/api/siteverify"); //$NON-NLS-1$

	/** @type {java.net.HttpURLConnection} */
	var connection = url.openConnection();
	connection.setRequestMethod("POST"); //$NON-NLS-1$
	connection.setDoOutput(true);

	var outputStream = connection.getOutputStream();
	var writer = new java.io.BufferedWriter(new java.io.OutputStreamWriter(outputStream, "UTF-8")); //$NON-NLS-1$
	writer.write("secret=" + secretKey + "&response=" + $scope.model.response); //$NON-NLS-1$ //$NON-NLS-2$
	writer.flush();
	writer.close();
	outputStream.close();

	connection.connect();

	var reader = new java.io.BufferedReader(new java.io.InputStreamReader(connection.getInputStream()));
	var line = null;
	/** @type {String} */
	var content = new java.lang.String();
	while ( (line = reader.readLine()) != null) {
		content = content + line;
	}
	reader.close();

	connection.disconnect();

	var data = JSON.parse(content); //$NON-NLS-1$

	return data.hasOwnProperty("success") && data.success; //$NON-NLS-1$
}