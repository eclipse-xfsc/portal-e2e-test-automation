export const providerAccountCredentialUserSchema = {
	"definitions": {},
	"$schema": "http://json-schema.org/draft-07/schema#", 
	"$id": "https://example.com/object1651828238.json", 
	"title": "Root", 
	"type": "object",
	"required": [
		"email",
		"firstName",
		"id",
		"lastName",
		"role",
		"userName"
	],
	"properties": {
		"email": {
			"$id": "#root/email", 
			"title": "Email", 
			"type": "string",
			"default": "",
			"examples": [
				"user.name@domain.com"
			],
			"pattern": "^.*$"
		},
		"firstName": {
			"$id": "#root/firstName", 
			"title": "Firstname", 
			"type": "string",
			"default": "",
			"examples": [
				"string"
			],
			"pattern": "^.*$"
		},
		"id": {
			"$id": "#root/id", 
			"title": "Id", 
			"type": "integer",
			"examples": [
				0
			],
			"default": 0
		},
		"lastName": {
			"$id": "#root/lastName", 
			"title": "Lastname", 
			"type": "string",
			"default": "",
			"examples": [
				"string"
			],
			"pattern": "^.*$"
		},
		"role": {
			"$id": "#root/role", 
			"title": "Role", 
			"type": "string",
			"default": "",
			"examples": [
				"string"
			],
			"pattern": "^.*$"
		},
		"userName": {
			"$id": "#root/userName", 
			"title": "Username", 
			"type": "string",
			"default": "",
			"examples": [
				"string"
			],
			"pattern": "^.*$"
		}
	}
}
