export const discoveryDataSearchResultSchema = {
	"definitions": {},
	"$schema": "http://json-schema.org/draft-07/schema#", 
	"$id": "https://example.com/object1654694175.json", 
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
				"/discovery/data/search?page=2&parameters"
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
					"location",
					"ppr_url",
					"ppr_name",
					"short_description"
				],
				"properties": {
					"type": {
						"$id": "#root/data/items/type", 
						"title": "Type", 
						"type": "string",
						"default": "",
						"examples": [
							"data"
						],
						"enum": ["data"]
					},
					"logo": {
						"$id": "#root/data/items/logo", 
						"title": "Logo", 
						"type": "string",
						"default": "",
						"examples": [
							"https://cdn.logo.com/hotlink-ok/logo-social.png"
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
					"location": {
						"$id": "#root/data/items/location", 
						"title": "Location", 
						"type": "string",
						"default": "",
						"examples": [
							"London"
						],
						"pattern": "^.*$"
					},
					"ppr_url": {
						"$id": "#root/data/items/ppr_url", 
						"title": "Ppr_url", 
						"type": "string",
						"default": "",
						"examples": [
							"https://raciond.com"
						],
						"pattern": "^.*$"
					},
					"ppr_name": {
						"$id": "#root/data/items/ppr_name", 
						"title": "Ppr_name", 
						"type": "string",
						"default": "",
						"examples": [
							"Otus-M"
						],
						"pattern": "^.*$"
					},
					"short_description": {
						"$id": "#root/data/items/short_description", 
						"title": "Short_description", 
						"type": "string",
						"default": "",
						"examples": [
							"Lorem ipsum dolor si"
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