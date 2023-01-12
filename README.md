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

    body : {
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

    body : {
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