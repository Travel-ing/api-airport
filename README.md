# REST API

The REST API to the example app is described below.

## Get fly by Id

### Request

`GET /fly/:id`

### Response

    {
        "start": {
            "delay": 0,
            "airport": "639b2389461444b6c0c176cc",
            "date": "2023-01-09T02:24:00.000Z"
        },
        "finish": {
            "delay": 0,
            "airport": "63b7f55b2879e9c072c9dcd1",
            "date": "2023-01-10T22:24:00.000Z"
        },
        "_id": "63b7fbe009bd09d5e5d7b51b",
        "plane": "639b21683067549beaf3b653",
        "passenger": 221,
        "__v": 0
    }

## Create fly

### Request

`POST /fly`

With admin account

body:
{
"plane":"639b21683067549beaf3b653",
"passenger": 125,
"start": {
"airport": "639b2389461444b6c0c176cc",
"date": "2023-01-03T11:10:18.188Z"
},
"finish": {
"airport": "63b7f55b2879e9c072c9dcd1",
"date": "2023-01-08T11:10:18.188Z"
}
}

### Response

    {
        "plane": "639b21683067549beaf3b653",
        "passenger": 125,
        "start": {
            "airport": "639b2389461444b6c0c176cc",
            "date": "2023-01-03T11:10:18.188Z",
    	    "delay": 0
        },
        "finish": {
            "airport": "63b7f55b2879e9c072c9dcd1",
            "date": "2023-01-08T11:10:18.188Z",
            "delay": 0
        },
        "_id": "63b9b6d2c8698f7815ce6efb",
        "__v": 0
    }

## Update fly

### Request

With admin account

`PUT /fly/:id`

body:
{
"plane":"639b21683067549beaf3b653",
"passenger": 126,
"start": {
"airport": "639b2389461444b6c0c176cc",
"date": "2023-01-03T11:10:18.188Z"
},
"finish": {
"airport": "63b7f55b2879e9c072c9dcd1",
"date": "2023-01-08T11:10:18.188Z"
}
}

### Response

    {
        "plane": "639b21683067549beaf3b653",
        "passenger": 126,
        "start": {
            "airport": "639b2389461444b6c0c176cc",
            "date": "2023-01-03T11:10:18.188Z",
    	    "delay": 0
        },
        "finish": {
            "airport": "63b7f55b2879e9c072c9dcd1",
            "date": "2023-01-08T11:10:18.188Z",
            "delay": 0
        },
        "_id": "63b9b6d2c8698f7815ce6efb",
        "__v": 0
    }

## Delete fly

### Request

`DELETE /fly/:id`

With admin account

### Response

    {
        "start": {
            "airport": "639b2389461444b6c0c176cc",
            "date": "2023-01-03T11:10:18.188Z",
            "delay": 0
        },
        "finish": {
            "airport": "63b7f55b2879e9c072c9dcd1",
            "date": "2023-01-08T11:10:18.188Z",
            "delay": 0
        },
        "_id": "63bfd861b1b9c9d375670e25",
        "plane": "639b21683067549beaf3b653",
        "passenger": 125,
        "__v": 0
    }

## Get plane

### Request

`GET /plane`

### Response

    [
        {
            "_id": "639b21683067549beaf3b653",
            "name": "A180",
            "brand": "Airbus",
            "maxPlace": 584,
            "size": 180,
            "emptyWeight": 50,
            "maxWeight": 80,
            "__v": 0
        }
    ]

## Get list of plane

### Request

`GET /plane/:id`

### Response

    {
        "_id": "639b21683067549beaf3b653",
        "name": "A180",
        "brand": "Airbus",
        "maxPlace": 584,
        "size": 180,
        "emptyWeight": 50,
        "maxWeight": 80,
        "__v": 0
    }

## Create plane

### Request

`POST /plane`

With admin account

body:
    {
        "name": "B70",
        "brand": "Boeig",
        "maxPlace": 391,
        "size": 270,
        "emptyWeigth": 69,
        "maxWeight": 100
    }

### Response

    {
        "name": "B70",
        "brand": "Boeig",
        "maxPlace": 391,
        "size": 270,
        "maxWeight": 100,
        "_id": "63bfda3760366c2c1e254dc9",
        "__v": 0
    }

## Update plane

### Request

`PUT /plane/:id`

With admin account

body:
    {
        "name": "B77",
        "brand": "Boeig",
        "maxPlace": 391,
        "size": 270,
        "emptyWeigth": 69,
        "maxWeight": 100
    }

### Response

    {
        "_id": "63bfda3760366c2c1e254dc9",
        "name": "B77",
        "brand": "Boeig",
        "maxPlace": 391,
        "size": 270,
        "maxWeight": 100,
        "__v": 0
    }

## Delete plane

### Request

`DELETE /plane/:id`

With admin account

### Response

    {
        "_id": "63bfda3760366c2c1e254dc9",
        "name": "B77",
        "brand": "Boeig",
        "maxPlace": 391,
        "size": 270,
        "maxWeight": 100,
        "__v": 0
    }

## Get list of airport

### Request

`GET /airport`

### Response

    [
        {
            "coordinate": {
                "latitude": 49.009724,
                "longitude": 2.547778
            },
            "_id": "639b2389461444b6c0c176cc",
            "name": "Orly",
            "AITA": "ORL",
            "__v": 0
        }
    ]

## Get airport

### Request

`GET /airport/:id`

### Response

    {
        "coordinate": {
            "latitude": 49.009724,
            "longitude": 2.547778
        },
        "_id": "639b2389461444b6c0c176cc",
        "name": "Orly",
        "AITA": "ORL",
        "__v": 0
    }

## Create airport

### Request

`POST /airport`

With admin account

body : 
    {
		"coordinate": {
			"latitude": 49.009724,
			"longitude": 2.547778
		},
		"name": "Orly",
		"AITA": "ORL"
	}

### Response

    {
        "coordinate": {
            "latitude": 49.009724,
            "longitude": 2.547778
        },
        "_id": "63b7f55b2879e9c072c9dcd1",
        "name": "Orly",
        "AITA": "ORL",
        "__v": 0
    }


## Update airport

### Request

`PUT /airport/:id`

With admin account

body : 
    {
		"coordinate": {
			"latitude": 49.009724,
			"longitude": 2.547778
		},
		"name": "Orly",
		"AITA": "ORL"
	}

### Response

    {
        "coordinate": {
            "latitude": 49.009724,
            "longitude": 2.547778
        },
        "_id": "63b7f55b2879e9c072c9dcd1",
        "name": "Orly",
        "AITA": "ORL",
        "__v": 0
    }

## Delete airport

### Request

`DELETE /airport/:id`

With admin account

### Response

    {
		"coordinate": {
			"latitude": 49.00809589065156,
			"longitude": 2.550922842977428
		},
		"_id": "63b7e8142879e9c072c9dccf",
		"name": "Charles De Gaule",
		"AITA": "CDG",
		"__v": 0
	}

## Get coming flies

### Request

`GET /coming`

### Response

    [
        {
            "start": {
                "airport": {
                    "coordinate": {
                        "latitude": 49.009724,
                        "longitude": 2.547778
                    },
                    "_id": "639b2389461444b6c0c176cc",
                    "name": "Orly"
                },
                "date": "2023-01-12T13:10:18.188Z",
                "delay": 0
            },
            "finish": {
                "airport": {
                    "coordinate": {
                        "latitude": 49.00809589065156,
                        "longitude": 2.550922842977428
                    },
                    "_id": "63b7f55b2879e9c072c9dcd1",
                    "name": "Charles De Gaule"
                },
                "date": "2023-01-13T15:10:18.188Z",
                "delay": 0
            },
            "_id": "63bfd87ab1b9c9d375670e2c",
            "plane": "639b21683067549beaf3b653",
            "passenger": 125,
            "__v": 0
        }
    ]

## Get current flies

### Request

`GET /current`

### Response

    [
        {
            "start": {
                "airport": {
                    "coordinate": {
                        "latitude": 49.009724,
                        "longitude": 2.547778
                    },
                    "_id": "639b2389461444b6c0c176cc",
                    "name": "Orly"
                },
                "date": "2023-01-11T13:10:18.188Z",
                "delay": 0
            },
            "finish": {
                "airport": {
                    "coordinate": {
                        "latitude": 49.00809589065156,
                        "longitude": 2.550922842977428
                    },
                    "_id": "63b7f55b2879e9c072c9dcd1",
                    "name": "Charles De Gaule"
                },
                "date": "2023-01-13T15:10:18.188Z",
                "delay": 0
            },
            "_id": "63bfd87ab1b9c9d375670e2c",
            "plane": "639b21683067549beaf3b653",
            "passenger": 125,
            "__v": 0
        }
    ]