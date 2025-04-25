export const discoveryFilterCriteriasSchema = {
	"definitions": {},
	"$schema": "http://json-schema.org/draft-07/schema#", 
	"$id": "https://example.com/object1654785728.json", 
	"title": "Root", 
	"type": "object",
	"required": [
		"type",
		"categories"
	],
	"properties": {
		"type": {
			"$id": "#root/type", 
			"title": "Type", 
			"type": "string",
			"default": "",
			"examples": [
				"data/services/ppr"
			],
			"pattern": "^.*$"
		},
		"categories": {
			"$id": "#root/categories", 
			"title": "Categories", 
			"type": "array",
			"default": [],
			"items":{
				"$id": "#root/categories/items", 
				"title": "Items", 
				"type": "object",
				"required": [
					"name",
					"items"
				],
				"properties": {
					"name": {
						"$id": "#root/categories/items/name", 
						"title": "Name", 
						"type": "string",
						"default": "",
						"examples": [
							"Location"
						],
						"pattern": "^.*$"
					},
					"items": {
						"$id": "#root/categories/items/items", 
						"title": "Items", 
						"type": "array",
						"default": [],
						"items":{
							"$id": "#root/categories/items/items/items", 
							"title": "Items", 
							"type": "object",
							"required": [
								"name",
								"qty"
							],
							"properties": {
								"name": {
									"$id": "#root/categories/items/items/items/name", 
									"title": "Name", 
									"type": "string",
									"default": "",
									"examples": [
										"Berlin"
									],
									"pattern": "^.*$"
								},
								"qty": {
									"$id": "#root/categories/items/items/items/qty", 
									"title": "Qty", 
									"type": "integer",
									"examples": [
										10
									],
									"default": 0
								}
							}
						}

					}
				}
			}

		}
	}
}
