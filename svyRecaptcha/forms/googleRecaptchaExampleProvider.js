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
	return forms.ngServiceSamples;
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
