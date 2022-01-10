# Lyrical-GraphQL

Based on a [GraphQL course](https://www.udemy.com/course/graphql-with-react-course) on Udemy.com

## Run the MongoDB container

```bash
docker compose up
```

## Configuring a MongoDB user locally

Run this inside of the container:

```bash
use admin
```

then:

```bash
db.createUser({ user: 'lyrical', pwd: 'lyricalpass', roles: [{ role: "userAdminAnyDatabase", db: "admin" }, { role: "readWriteAnyDatabase", db: "admin" }] });
```

## Queries and Mutations

Adding a song:

```bash
mutation {
  addSong(title: "Cold Night") {
    id
  }  
}
```

___

Adding lyrics to that song (get the songId which was returned to you and replace it below):

```bash
mutation {
  addLyricToSong(songId: "61dbe5904e923e76c9888158", content:"Oh my oh my it's a cold night") {
    id
  }  
}
```

___

Listing the songs with their lyrics:

```bash
{
  songs {
    id
    title
    lyrics {
      content
    }
  }
}
```

___

Adding a song using a variable:

```bash
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
```

query variables:

```bash
{"title": "Sprite vs Coke"}
```

___
