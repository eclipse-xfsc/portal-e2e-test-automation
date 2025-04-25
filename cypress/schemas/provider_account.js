export const providerAccountSchema = {
	"definitions": {},
	"$schema": "http://json-schema.org/draft-07/schema#", 
	"$id": "https://example.com/object1651260153.json", 
	"title": "Root", 
	"type": "object",
	"required": [
		"alias",
		"avatarImageLink",
		"certification",
		"commercialRegister",
		"companyName",
		"dataProviderOfficer",
		"dunsNumber",
		"email",
		"individualContact",
		"legalEntityIdentifier",
		"localAttestation",
		"registeredAddress",
		"transparencyRegister",
		"webAddress"
	],
	"properties": {
		"alias": {
			"$id": "#root/alias", 
			"title": "Alias", 
			"type": "string",
			"default": "",
			"examples": [
				"string"
			],
			"pattern": "^.*$"
		},
		"avatarImageLink": {
			"$id": "#root/avatarImageLink", 
			"title": "Avatarimagelink", 
			"type": "string",
			"default": "",
			"examples": [
				"img.png"
			],
			"pattern": "^.*$"
		},
		"certification": {
			"$id": "#root/certification", 
			"title": "Certification", 
			"type": "string",
			"default": "",
			"examples": [
				"string"
			],
			"pattern": "^.*$"
		},
		"commercialRegister": {
			"$id": "#root/commercialRegister", 
			"title": "Commercialregister", 
			"type": "string",
			"default": "",
			"examples": [
				"string"
			],
			"pattern": "^.*$"
		},
		"companyName": {
			"$id": "#root/companyName", 
			"title": "Companyname", 
			"type": "string",
			"default": "",
			"examples": [
				"string"
			],
			"pattern": "^.*$"
		},
		"dataProviderOfficer": {
			"$id": "#root/dataProviderOfficer", 
			"title": "Dataproviderofficer", 
			"type": "object",
			"required": [
				"email",
				"name",
				"phoneNumber",
				"surname"
			],
			"properties": {
				"email": {
					"$id": "#root/dataProviderOfficer/email", 
					"title": "Email", 
					"type": "string",
					"default": "",
					"examples": [
						"string"
					],
					"pattern": "^.*$"
				},
				"name": {
					"$id": "#root/dataProviderOfficer/name", 
					"title": "Name", 
					"type": "string",
					"default": "",
					"examples": [
						"string"
					],
					"pattern": "^.*$"
				},
				"phoneNumber": {
					"$id": "#root/dataProviderOfficer/phoneNumber", 
					"title": "Phonenumber", 
					"type": "string",
					"default": "",
					"examples": [
						"string"
					],
					"pattern": "^.*$"
				},
				"surname": {
					"$id": "#root/dataProviderOfficer/surname", 
					"title": "Surname", 
					"type": "string",
					"default": "",
					"examples": [
						"string"
					],
					"pattern": "^.*$"
				}
			}
		}
,
		"dunsNumber": {
			"$id": "#root/dunsNumber", 
			"title": "Dunsnumber", 
			"type": "string",
			"default": "",
			"examples": [
				"string"
			],
			"pattern": "^.*$"
		},
		"email": {
			"$id": "#root/email", 
			"title": "Email", 
			"type": "string",
			"default": "",
			"examples": [
				"string"
			],
			"pattern": "^.*$"
		},
		"individualContact": {
			"$id": "#root/individualContact", 
			"title": "Individualcontact", 
			"type": "object",
			"required": [
				"email",
				"name",
				"phoneNumber",
				"surname"
			],
			"properties": {
				"email": {
					"$id": "#root/individualContact/email", 
					"title": "Email", 
					"type": "string",
					"default": "",
					"examples": [
						"string"
					],
					"pattern": "^.*$"
				},
				"name": {
					"$id": "#root/individualContact/name", 
					"title": "Name", 
					"type": "string",
					"default": "",
					"examples": [
						"string"
					],
					"pattern": "^.*$"
				},
				"phoneNumber": {
					"$id": "#root/individualContact/phoneNumber", 
					"title": "Phonenumber", 
					"type": "string",
					"default": "",
					"examples": [
						"string"
					],
					"pattern": "^.*$"
				},
				"surname": {
					"$id": "#root/individualContact/surname", 
					"title": "Surname", 
					"type": "string",
					"default": "",
					"examples": [
						"string"
					],
					"pattern": "^.*$"
				}
			}
		}
,
		"legalEntityIdentifier": {
			"$id": "#root/legalEntityIdentifier", 
			"title": "Legalentityidentifier", 
			"type": "string",
			"default": "",
			"examples": [
				"string"
			],
			"pattern": "^.*$"
		},
		"localAttestation": {
			"$id": "#root/localAttestation", 
			"title": "Localattestation", 
			"type": "string",
			"default": "",
			"examples": [
				"string"
			],
			"pattern": "^.*$"
		},
		"registeredAddress": {
			"$id": "#root/registeredAddress", 
			"title": "Registeredaddress", 
			"type": "object",
			"required": [
				"city",
				"country",
				"no",
				"postalCode",
				"street"
			],
			"properties": {
				"city": {
					"$id": "#root/registeredAddress/city", 
					"title": "City", 
					"type": "string",
					"default": "",
					"examples": [
						"string"
					],
					"pattern": "^.*$"
				},
				"country": {
					"$id": "#root/registeredAddress/country", 
					"title": "Country", 
					"type": "string",
					"default": "",
					"examples": [
						"string"
					],
					"pattern": "^.*$"
				},
				"no": {
					"$id": "#root/registeredAddress/no", 
					"title": "No", 
					"type": "string",
					"default": "",
					"examples": [
						"string"
					],
					"pattern": "^.*$"
				},
				"postalCode": {
					"$id": "#root/registeredAddress/postalCode", 
					"title": "Postalcode", 
					"type": "string",
					"default": "",
					"examples": [
						"string"
					],
					"pattern": "^.*$"
				},
				"street": {
					"$id": "#root/registeredAddress/street", 
					"title": "Street", 
					"type": "string",
					"default": "",
					"examples": [
						"string"
					],
					"pattern": "^.*$"
				}
			}
		}
,
		"transparencyRegister": {
			"$id": "#root/transparencyRegister", 
			"title": "Transparencyregister", 
			"type": "string",
			"default": "",
			"examples": [
				"string"
			],
			"pattern": "^.*$"
		},
		"webAddress": {
			"$id": "#root/webAddress", 
			"title": "Webaddress", 
			"type": "string",
			"default": "",
			"examples": [
				"string"
			],
			"pattern": "^.*$"
		}
	}
}
