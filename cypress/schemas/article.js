export const articleSchema = {
	"definitions": {},
	"$schema": "http://json-schema.org/draft-07/schema#", 
	"$id": "https://example.com/object1646985530.json", 
	"title": "Root", 
	"type": "object",
	"required": [
		"category",
		"logoPath",
		"paragraphs",
		"previewImagePath",
		"teaserText",
		"timestamp",
		"title",
		"url"
	],
	"properties": {
		"category": {
			"$id": "#root/category", 
			"title": "Category", 
			"type": "string",
			"default": "",
			"pattern": "^.*$"
		},
		"logoPath": {
			"$id": "#root/logoPath", 
			"title": "Logopath", 
			"type": "string",
			"default": "",
			"pattern": "^.*$"
		},
		"paragraphs": {
			"$id": "#root/paragraphs", 
			"title": "Paragraphs", 
			"type": "array",
			"default": [],
			"items":{
				"$id": "#root/paragraphs/items", 
				"title": "Items", 
				"type": "object",
				"required": [
					"headline",
					"paragraphs"
				],
				"properties": {
					"headline": {
						"$id": "#root/paragraphs/items/headline", 
						"title": "Headline", 
						"type": "string",
						"default": "",
						"pattern": "^.*$"
					},
					"paragraphs": {
						"$id": "#root/paragraphs/items/paragraphs", 
						"title": "Paragraphs", 
						"type": "string",
						"default": "",
						"pattern": "^.*$"
					}
				}
			}

		},
		"previewImagePath": {
			"$id": "#root/previewImagePath", 
			"title": "Previewimagepath", 
			"type": "string",
			"default": "",
			"pattern": "^.*$"
		},
		"teaserText": {
			"$id": "#root/teaserText", 
			"title": "Teasertext", 
			"type": "string",
			"default": "",
			"pattern": "^.*$"
		},
		"timestamp": {
			"$id": "#root/timestamp", 
			"title": "Timestamp", 
			"type": "string",
			"default": "",
			"format": "date-time"		
		},
		"title": {
			"$id": "#root/title", 
			"title": "Title", 
			"type": "string",
			"default": "",
			"pattern": "^.*$"
		},
		"url": {
			"$id": "#root/url", 
			"title": "Url", 
			"type": "string",
			"default": "",
			"format": "uri"
		}
	}
}
