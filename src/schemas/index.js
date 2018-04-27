import { normalize, schema } from 'normalizr';

/*
//No Normalizados

  {
    "categories": [
      {
        "title": "las mas sonadas",
        "id":"1",
        "playlist":[
          {
            "title":"Despacito",
            "id":"123"
          }
        ]
      }
    ]
  }


  //Normalizados

  {
    "categories":{
      "1":{
        "title":"Las mas sonadas",
        "playlist":[
          "123"
        ]
      }
    },
    "media":{
      "123":{
        "title":"Despacito"
      }
    }
  } 

*/

const data = {
  id: '123',
  author: {
    id: '1',
    name: 'Paul'
  },
  title: 'My awesome blog post',
  comments: [
    {
      id: '324',
      commenter: {
        id: '2',
        name: 'Nicole'
      }
    }
  ]
};

const usuario = new schema.Entity('usuario');

const comentario = new schema.Entity('comentarios', {
  commenter: usuario
});

const articulo = new schema.Entity('articulo', {
  author: usuario,
  comments: [comentario]
});

// const normalizedData = normalize(data, articulo);

// Define a users schema
// const user = new schema.Entity('users');

// Define your comments schema
const comment = new schema.Entity('comments', {
  commenter: user
});
// En el segundo parametro de mi shema como hijo de ese schema

// Define your article
const article = new schema.Entity('articles', {
  author: user,
  comments: [comment]
});

// const normalizedData = normalize(data, article);

/* Ejemplo 2 */
const dataMovies = [
  {
    id: 468569,
    title: 'The Dark Knight',
    genres: [
      {
        id: 1,
        name: 'Action'
      },
      {
        id: 3,
        name: 'Crime'
      },
      {
        id: 4,
        name: 'Drama'
      }
    ],
    actors: [
      {
        id: 288,
        name: 'Christian Bale'
      },
      {
        id: 5132,
        name: 'Heath Ledger'
      },
      {
        id: 323,
        name: 'Michael Caine'
      }
    ]
  },
  {
    id: 482571,
    title: 'The Prestige',
    genres: [
      {
        id: 4,
        name: 'Drama'
      },
      {
        id: 5,
        name: 'Mystery'
      },
      {
        id: 6,
        name: 'Sci-Fi'
      }
    ],
    actors: [
      {
        id: 413168,
        name: 'Hugh Jackman'
      },
      {
        id: 288,
        name: 'Christian Bale'
      },
      {
        id: 323,
        name: 'Michael Caine'
      }
    ]
  },
  {
    id: 1430132,
    title: 'The Wolverine',
    genres: [
      {
        id: 1,
        name: 'Action'
      },
      {
        id: 2,
        name: 'Adventure'
      },
      {
        id: 6,
        name: 'Sci-Fi'
      }
    ],
    actors: [
      {
        id: 413168,
        name: 'Hugh Jackman'
      },
      {
        id: 5148840,
        name: 'Tao Okamoto'
      },
      {
        id: 3822462,
        name: 'Rila Fukushima'
      }
    ]
  }
];

const actor = new schema.Entity('actors');
const genre = new schema.Entity('genres');
const movie = new schema.Entity('movies', {
  genres: [genre],
  actors: [actor]
});
const movieList = [movie];

// const normalizedData = normalize(dataMovies, movieList);

/* Ejemplo 3 */
const myData = {
  usuarios: [{ id: 15, name: 'john' }, { id: 20, name: 'andrey' }]
};
const user = new schema.Entity('users');
const mySchema = { usuarios: [user] };

// const normalizedData = normalize(myData, mySchema);

/* 
const data = [{ id: '123', name: 'Jim' }, { id: '456', name: 'Jane' }];
const userSchema = new schema.Entity('users');

// const userListSchema = new schema.Array(userSchema);
// or use shorthand syntax:
const userListSchema = [userSchema];

const normalizedData = normalize(data, userListSchema);

*/

const dataAdmin = [
  { id: 1, type: 'admin' },
  { id: 2, type: 'user' },
  { id: 3, type: 'admin' }
];

const userSchema = new schema.Entity('users');
const adminSchema = new schema.Entity('admins');
const myArray = new schema.Values(
  {
    admins: adminSchema,
    users: userSchema
  },
  (value, parent, key) => `${value.type}s`
);

const normalizedData = normalize(dataAdmin, myArray);

export default normalizedData;
