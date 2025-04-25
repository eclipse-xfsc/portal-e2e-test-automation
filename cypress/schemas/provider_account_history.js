export const providerAccountHistorySchema = {
	"definitions": {},
	"$schema": "http://json-schema.org/draft-07/schema#", 
	"$id": "https://example.com/object1651757539.json", 
	"title": "Root", 
	"type": "object",
	"required": [
		"history"
	],
	"properties": {
		"history": {
			"$id": "#root/history", 
			"title": "History", 
			"type": "array",
			"default": [],
			"items":{
				"$id": "#root/history/items", 
				"title": "Items", 
				"type": "object",
				"required": [
					"date",
					"name",
					"id",
					"time"
				],
				"properties": {
					"date": {
						"$id": "#root/history/items/date", 
						"title": "Date", 
						"type": "string",
						"default": "",
						"examples": [
							"14.12.2020"
						],
						"pattern": "^.*$"
					},
					"name": {
						"$id": "#root/history/items/name", 
						"title": "Name", 
						"type": "string",
						"default": "",
						"examples": [
							"Provider Name"
						],
						"pattern": "^.*$"
					},
					"id": {
						"$id": "#root/history/items/id", 
						"title": "Id", 
						"type": "string",
						"default": "",
						"examples": [
							"110"
						],
						"pattern": "^.*$"
					},
					"time": {
						"$id": "#root/history/items/time", 
						"title": "Time", 
						"type": "string",
						"default": "",
						"examples": [
							"10:40 am"
						],
						"pattern": "^.*$"
					}
				}
			}

		}
	}
}
