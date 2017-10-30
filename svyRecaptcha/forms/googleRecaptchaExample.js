/**
 * @type {String}
 * @protected
 *
 * @properties={typeid:35,uuid:"22BED4D0-9A78-40C9-B832-3AD0A75D909F"}
 */
var labelMsg = null;

/**
 * @type {Number}
 * @protected
 *
 * @properties={typeid:35,uuid:"4FD976F0-5660-407A-A5E4-3909339CA452",variableType:4}
 */
var isResponseValid = 0;

/**
 * @type {Number}
 * @protected
 *
 * @properties={typeid:35,uuid:"41BFA1D3-EE85-42DC-9FD0-B725C64A98D4",variableType:4}
 */
var hasUserValidated = 0;


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"0CA003A5-3DAF-461B-87B0-04FF44E6ECE3"}
 */
function onLoad(event) {
	elements.google_Recaptcha_1.language = i18n.getCurrentLanguage();
	elements.google_Recaptcha_1.siteKey = "6LfUcDYUAAAAAEKJLQUw7EfNuP7Goudj-k0zYrKf";
	elements.google_Recaptcha_1.render();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"AAD75C43-6FAD-49C2-AFA2-43E62593E518"}
 */
function onShow(firstShow, event) {
	
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DD02CD73-F105-493A-BD7F-D13433FEF9BF"}
 */
function validateResponse(event) {
	if (!isResponseValid) {
		try {
			isResponseValid = elements.google_Recaptcha_1.validateResponse('6LfUcDYUAAAAABbnDdedCoFnb_W2jOx0WvD-QW1k');
			
			if (isResponseValid) {
				labelMsg = "Site response validated !"
			} else {
				labelMsg = "Site responsve is not valid !"
			}
			
		} catch (e) {
			labelMsg = "Please verify you are not a Robot !";
			isResponseValid = false;
		}


	} else {
		labelMsg = "Site response has been already validated. You cannot validate it again."
	}
	
	if (isResponseValid) {
		elements.labelMsg.removeStyleClass("btn-danger");
		elements.labelMsg.addStyleClass("btn-success");
	} else  {
		elements.labelMsg.removeStyleClass("btn-success");
		elements.labelMsg.addStyleClass("btn-danger");
	}                                                                           
	elements.labelMsg.visible = true;
}

/**
 * @param {string} response
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"20C8D818-2B55-487D-972A-D6FCF160BBD8"}
 */
function onSuccessful(response) {	
	labelMsg = "User validated !!!";
	elements.labelMsg.visible = true;
	elements.labelMsg.removeStyleClass("btn-danger");
	elements.labelMsg.addStyleClass("btn-success");
	hasUserValidated = true;
	
	elements.btnReset.enabled = false;
}

/**

 * @protected
 *
 * @properties={typeid:24,uuid:"FAC808A4-0382-4AF9-B49B-810980EF813E"}
 */
function onExpired() {
	labelMsg = "User validation expired. Please confirm again you are not a robot !";
	elements.labelMsg.visible = true;
	elements.labelMsg.removeStyleClass("btn-success");
	elements.labelMsg.addStyleClass("btn-danger");
	hasUserValidated = false;
	
	elements.btnReset.enabled = true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"212B7A4B-3947-4DB1-845B-BAB531E69DF2"}
 */
function onReset(event) {
	elements.google_Recaptcha_1.reset();
	hasUserValidated = false;
	isResponseValid = false;
	elements.labelMsg.visible = false;
}
