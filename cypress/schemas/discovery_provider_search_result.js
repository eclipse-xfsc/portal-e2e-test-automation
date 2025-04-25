export const discoveryProviderSearchResultSchema = {
	"definitions": {},
	"$schema": "http://json-schema.org/draft-07/schema#", 
	"$id": "https://example.com/object1654765932.json", 
	"title": "Root", 
	"type": "object",
	"required": [
		"data",
		"pages_count"
	],
	"properties": {
		"next": {
			"$id": "#root/next", 
			"title": "Next", 
			"type": "string",
			"default": "",
			"examples": [
				"/discovery/ppr/search?page=2&parameters"
			],
			"pattern": "^.*$"
		},
		"data": {
			"$id": "#root/data", 
			"title": "Data", 
			"type": "array",
			"default": [],
			"items":{
				"$id": "#root/data/items", 
				"title": "Items", 
				"type": "object",
				"required": [
					"type",
					"logo",
					"name",
					"id",
					"sustainability",
					"availability",
					"location",
					"ppr_url"
				],
				"properties": {
					"type": {
						"$id": "#root/data/items/type", 
						"title": "Type", 
						"type": "string",
						"default": "",
						"examples": [
							"ppr"
						],
						"enum": ["ppr"]
					},
					"logo": {
						"$id": "#root/data/items/logo", 
						"title": "Logo", 
						"type": "string",
						"default": "",
						"examples": [
							"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1200px-Android_O_Preview_Logo.png"
						],
						"pattern": "^.*$"
					},
					"name": {
						"$id": "#root/data/items/name", 
						"title": "Name", 
						"type": "string",
						"default": "",
						"examples": [
							"The Service Power"
						],
						"pattern": "^.*$"
					},
					"id": {
						"$id": "#root/data/items/id", 
						"title": "Id", 
						"type": "string",
						"default": "",
						"examples": [
							"0"
						],
						"pattern": "^.*$"
					},
					"sustainability": {
						"$id": "#root/data/items/sustainability", 
						"title": "Sustainability", 
						"type": "string",
						"default": "",
						"examples": [
							"sustainability"
						],
						"pattern": "^.*$"
					},
					"availability": {
						"$id": "#root/data/items/availability", 
						"title": "Availability", 
						"type": "string",
						"default": "",
						"examples": [
							"availability"
						],
						"pattern": "^.*$"
					},
					"location": {
						"$id": "#root/data/items/location", 
						"title": "Location", 
						"type": "string",
						"default": "",
						"examples": [
							"New York"
						],
						"pattern": "^.*$"
					},
					"ppr_url": {
						"$id": "#root/data/items/ppr_url", 
						"title": "Ppr_url", 
						"type": "string",
						"default": "",
						"examples": [
							"https://my.company.url"
						],
						"pattern": "^.*$"
					}
				}
			}

		},
		"pages_count": {
			"$id": "#root/pages_count", 
			"title": "Pages_count", 
			"type": "integer",
			"examples": [
				5
			],
			"default": 0
		}
	}
}