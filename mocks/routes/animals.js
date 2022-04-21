const ANIMALS = [
    {
        "id": 1924,
        "nickname": "Loki",
        "breed": "Norwegian Forest cat",
        "price": 1823,
        "createAt": "",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Norwegian_Forest_Cat_in_snow_%28closeup%29_%28cropped%29.jpg/800px-Norwegian_Forest_Cat_in_snow_%28closeup%29_%28cropped%29.jpg",
        "title": "c338b0c70a8c3836a160295978b51000",
        "age": 3,
        "type": "cat"
    },
    {
        "id": 1923,
        "nickname": "Oliver",
        "breed": "Maine Coon",
        "price": 2745,
        "createAt": "",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Maine_Coon_cat_by_Tomitheos.JPG",
        "title": "32583eaf1d214c0ca64715648a65867e",
        "age": 1,
        "type": "cat"
    },
    {
        "id": 1922,
        "nickname": "Bella",
        "breed": "Maine Coon",
        "price": 2494,
        "createAt": "",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Maine_Coon_cat_by_Tomitheos.JPG",
        "title": "2b6d6d6e9fd863974e74c571b7b0d5dd",
        "age": 1,
        "type": "cat"
    },
    {
        "id": 1921,
        "nickname": "Loki",
        "breed": "Persian",
        "price": 2605,
        "createAt": "",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg",
        "title": "f1d1a6e650e6c338dad2595b9d60e829",
        "age": 7,
        "type": "cat"
    },
    {
        "id": 1920,
        "nickname": "Oliver",
        "breed": "Maine Coon",
        "price": 2161,
        "createAt": "",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Maine_Coon_cat_by_Tomitheos.JPG",
        "title": "b9b7cf6d8d841ad0eed2c084e83c56a6",
        "age": 8,
        "type": "cat"
    },
    {
        "id": 1919,
        "nickname": "Bella",
        "breed": "Persian",
        "price": 2609,
        "createAt": "",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg",
        "title": "ec7629f6f42feb0014cda6911367dfda",
        "age": 6,
        "type": "cat"
    },
    {
        "id": 1918,
        "nickname": "Fluffy",
        "breed": "Maine Coon",
        "price": 2399,
        "createAt": "",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Maine_Coon_cat_by_Tomitheos.JPG",
        "title": "87be2a5eb776d54db131bd087bc1b214",
        "age": 11,
        "type": "cat"
    },
    {
        "id": 1917,
        "nickname": "Loki",
        "breed": "Maine Coon",
        "price": 1209,
        "createAt": "",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Maine_Coon_cat_by_Tomitheos.JPG",
        "title": "fbf19b49d50ff428efbeb71ee55cca90",
        "age": 7,
        "type": "cat"
    },
    {
        "id": 1916,
        "nickname": "Loki",
        "breed": "Persian",
        "price": 1289,
        "createAt": "",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg",
        "title": "7f8a83a473de3bf159fd2b1c181c7399",
        "age": 4,
        "type": "cat"
    },
    {
        "id": 1915,
        "nickname": "Loki",
        "breed": "Maine Coon",
        "price": 2918,
        "createAt": "",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Maine_Coon_cat_by_Tomitheos.JPG",
        "title": "7914ab9a9d0e7083a2dcd5342ba43cbd",
        "age": 9,
        "type": "cat"
    }
];

const ANIMALS_RESPONSE = {
    animals: ANIMALS,
    maxPage: 10
}

module.exports = [
    {
      id: "get-animals", // id of the route
      url: "/animals", // url in express format
      method: "GET", // HTTP method
      variants: [
        {
          id: "success", // id of the variant
          response: {
            status: 200, // status to send
            body: ANIMALS_RESPONSE, // body to send
          },
        }
      ],
    },
]