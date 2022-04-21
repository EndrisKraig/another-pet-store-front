const SPECIALS = {
    "special_offers": [
        {
            "id": 5,
            "nickname": "Loki",
            "breed": "Maine Coon",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Maine_Coon_cat_by_Tomitheos.JPG",
            "price": 2169,
            "beginDate": "2022-04-13 11:46:07.150834 +0000 UTC",
            "endDate": "2023-04-13 11:46:07.150834 +0000 UTC",
            "conditions": "some6"
        },
        {
            "id": 6,
            "nickname": "Bella",
            "breed": "Maine Coon",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Maine_Coon_cat_by_Tomitheos.JPG",
            "price": 2350,
            "beginDate": "2022-04-13 11:46:21.171211 +0000 UTC",
            "endDate": "2023-04-13 11:46:21.171211 +0000 UTC",
            "conditions": "sadopaopd[o"
        },
        {
            "id": 2,
            "nickname": "Oliver",
            "breed": "Persian",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg",
            "price": 2169,
            "beginDate": "2022-04-13 08:48:49.27461 +0000 UTC",
            "endDate": "2023-04-13 08:48:49.27461 +0000 UTC",
            "conditions": "Super cat"
        },
        {
            "id": 4,
            "nickname": "Fluffy",
            "breed": "Persian",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg",
            "price": 1494,
            "beginDate": "2022-04-13 11:45:56.055321 +0000 UTC",
            "endDate": "2023-04-13 11:45:56.055321 +0000 UTC",
            "conditions": "some1"
        },
        {
            "id": 3,
            "nickname": "Oliver",
            "breed": "Maine Coon",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Maine_Coon_cat_by_Tomitheos.JPG",
            "price": 1540,
            "beginDate": "2022-04-13 11:45:43.322593 +0000 UTC",
            "endDate": "2023-04-13 11:45:43.322593 +0000 UTC",
            "conditions": "some"
        }
    ]
}

module.exports = [
    {
      id: "get-specials", // id of the route
      url: "/animals/specials", // url in express format
      method: "GET", // HTTP method
      variants: [
        {
          id: "success", // id of the variant
          response: {
            status: 200, // status to send
            body: SPECIALS, // body to send
          },
        }
      ],
    },
]