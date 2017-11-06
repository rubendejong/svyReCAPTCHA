/**
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"7D28C1D9-5CCF-4A07-8334-2FE25A908D78"}
 */
function getName() {
	return 'Google Recaptcha';
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"538BB9CD-FC28-4266-BFA8-5EC8D45F5448"}
*/
function getDescription() {
	return 'Protect your solution from spam and abuse with Google Recaptcha'
}

/**
*
* @return {RuntimeForm<AbstractMicroSample>}
*
* @properties={typeid:24,uuid:"F929788A-AF40-45D9-8FCA-830913DE8A85"}
*/
function getParent() {
	return forms.specializedSamples;
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"0D10F711-7556-4C77-8F3E-CB6C9365DDE2"}
*/
function getIconStyleClass() {
	return 'fa fa-recycle';
}

/**
* @public 
* @return {Array<String>} code lines
* @SuppressWarnings(private) TODO suppress not working ?
* @properties={typeid:24,uuid:"474ADC34-9F8B-4A71-8ADD-16CFC313A22E"}
*/
function getSampleCode() {
	return printMethodCode(forms.googleRecaptchaExample.onLoad)
		.concat(printMethodCode(forms.googleRecaptchaExample.validateResponse))
}

/**
*
* @return {String} Website URL
*
* @properties={typeid:24,uuid:"91436D45-90F8-43B5-BA42-0D8B9D94A3B6"}
*/
function getWebSiteURL() {
	return 'https://github.com/Servoy/svyReCAPTCHA';
}

/**
*
* @return {String} Additioanl info (wiki markdown supported)
*
* @properties={typeid:24,uuid:"3502A05C-080C-4D35-A13A-291AB6EBF70E"}
*/
function getMoreInfo() {
//	var url = 'https://raw.githubusercontent.com/Servoy/aggridcomponents/master/README.md';
//	return plugins.http.getPageData(url);
	return 'A Servoy Web Component which allow you to use the Google reCAPTCHA to validate the user is not a bot.'
}

/**
*
* @return {String} Download URL
*
* @properties={typeid:24,uuid:"A14D4BEB-A083-46D3-958D-B8CE56ADECF6"}
*/
function getDownloadURL() {
	return 'https://github.com/Servoy/svyReCAPTCHA/releases/download/v1.0.0/svyRecaptcha.servoy';
}
