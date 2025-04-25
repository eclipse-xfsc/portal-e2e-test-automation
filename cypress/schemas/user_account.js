export const userAccountSchema = {
	"definitions": {},
	"$schema": "http://json-schema.org/draft-07/schema#", 
	"$id": "https://example.com/object1651260217.json", 
	"title": "Root", 
	"type": "object",
	"required": [
		"avatarImageLink",
		"email",
		"name",
		"surname",
		"attributeA",
		"attributeB",
		"attributeC"
	],
	"properties": {
		"avatarImageLink": {
			"$id": "#root/avatarImageLink", 
			"title": "Avatarimagelink", 
			"type": "string",
			"default": "",
			"examples": [
				"link.to.image.png"
			],
			"pattern": "^.*$"
		},
		"email": {
			"$id": "#root/email", 
			"title": "Email", 
			"type": "string",
			"default": "",
			"examples": [
				"max.mustermann@example.net"
			],
			"pattern": "^.*$"
		},
		"name": {
			"$id": "#root/name", 
			"title": "Name", 
			"type": "string",
			"default": "",
			"examples": [
				"Max"
			],
			"pattern": "^.*$"
		},
		"surname": {
			"$id": "#root/surname", 
			"title": "Surname", 
			"type": "string",
			"default": "",
			"examples": [
				"Mustermann"
			],
			"pattern": "^.*$"
		},
		"attributeA": {
			"$id": "#root/attributeA", 
			"title": "Attributea", 
			"type": "string",
			"default": "",
			"examples": [
				"attribute A"
			],
			"pattern": "^.*$"
		},
		"attributeB": {
			"$id": "#root/attributeB", 
			"title": "Attributeb", 
			"type": "string",
			"default": "",
			"examples": [
				"attribute B"
			],
			"pattern": "^.*$"
		},
		"attributeC": {
			"$id": "#root/attributeC", 
			"title": "Attributec", 
			"type": "string",
			"default": "",
			"examples": [
				"attribute C"
			],
			"pattern": "^.*$"
		}
	}
}