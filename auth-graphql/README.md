# auth-graphql

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
db.createUser({ user: 'example', pwd: 'mypassword', roles: [{ role: "userAdminAnyDatabase", db: "admin" }, { role: "readWriteAnyDatabase", db: "admin" }] });
```
