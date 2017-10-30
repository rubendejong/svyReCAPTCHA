{
	"name": "recaptcha-google-Recaptcha",
	"displayName": "Google reCAPTCHA",
	"version": 1,
	"icon": "recaptcha/googleRecaptcha/icon.png",
	"definition": "recaptcha/googleRecaptcha/googleRecaptcha.js",
	"serverscript": "recaptcha/googleRecaptcha/server.js",
	"libraries": 
	[
		{
			"name": "api.js",
			"version": "1.0",
			"url": "https://www.google.com/recaptcha/api.js?render=explicit",
			"mimetype": "text/javascript"
		}
	],

	"model": 
	{
		"theme": 
		{
			"type": "string",
			"default": "light",
			"values": 
			[
				"dark",
				"light"
			],

			"tags": 
			{
				"scope": "design"
			}
		},

		"scaleRatio": 
		{
			"type": "int",
			"default": "100",
			"tags": 
			{
				"scope": "design"
			}
		},

		"tabSeq": 
		{
			"type": "tabseq",
			"tags": 
			{
				"scope": "design"
			}
		},

		"siteKey": 
		{
			"type": "string",
			"tags": 
			{
				"scope": "runtime"
			}
		},

		"language": 
		{
			"type": "string",
			"tags": 
			{
				"scope": "runtime"
			}
		},
		
		"response": 
		{
			"type": "string",
			"pushToServer": "allow",
			"tags": 
			{
				"scope": "private"
			}
		},

		"isRendered": 
		{
			"type": "boolean",
			"default": false,
			"pushToServer": "allow",
			"tags": 
			{
				"scope": "private"
			}
		}
	},

	"handlers": 
	{
		"onSuccessful": 
		{
			"parameters": 
			[
				{
					"name": "response",
					"type": "string"
				}
			]
		},

		"onExpired": "function"
	},

	"api": 
	{
		"isLoaded": 
		{
			"returns": "boolean"
		},

		"getResponse": 
		{
			"returns": "string"
		},

		"render": 
		{
			
		},

		"reset": 
		{
			
		},

		"validateResponse": 
		{
			"parameters": 
			[
				{
					"name": "secretKey",
					"type": "string"
				}
			],

			"returns": "boolean"
		}
	}
}