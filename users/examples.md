
# Queries and Mutations

```bash
{
  company(id:"2") {
    id
    name
    description
  },
  user(id:"23") {
    firstName
    company {
      id
      name
      description
    }
  }
}
```

___

```bash
{
  company(id:"1") {
    id
    name
    description
    users {
      id
      firstName
    }
  }
}
```

___

Naming a query:

```bash
query findCompany {
  company(id:"2") {
    name
    description
  }
}
```

___

Naming companies:

```bash
query findCompany {
  apple: company(id:"1") {
    name
    description
  }
  google: company(id:"2") {
    name
    description
  }
}
```

Result:

```bash
{
  "data": {
    "apple": {
      "name": "Apple",
      "description": "iphone"
    },
    "google": {
      "name": "Google",
      "description": "search"
    }
  }
}
```

___

Using a fragment:

```bash
query findCompany {
  apple: company(id:"1") {
    ...companyDetails
  }
  google: company(id:"2") {
    ...companyDetails
  }
}

fragment companyDetails on Company {
  id
  name
  description
}
```

Response:

```bash
{
  "data": {
    "apple": {
      "id": "1",
      "name": "Apple",
      "description": "iphone"
    },
    "google": {
      "id": "2",
      "name": "Google",
      "description": "search"
    }
  }
}
```

___

Mutation to add a user:

```bash
mutation {
  addUser(firstName: "Stephen", age: 26) {
    id
    firstName
    age
  }
}
```

Response:

```bash
{
  "data": {
    "addUser": {
      "id": "0rxG86j",
      "firstName": "Stephen",
      "age": 26
    }
  }
}
```

___

Mutation to delete a user:

```bash
mutation {
  deleteUser(id: "0rxG86j") {
    id
  }
}
```

Response:

```bash
{
  "data": {
    "deleteUser": {
      "id": null
    }
  }
}
```

___

Mutation to edit a user:

```bash
mutation {
  editUser(id: "23", firstName:"Jon", age: 34) {
    id
    firstName
    age
    company {
      name
    }
  }
}
```

Response:

```bash
{
  "data": {
    "editUser": {
      "id": "23",
      "firstName": "Jon",
      "age": 34,
      "company": {
        "name": "Apple"
      }
    }
  }
}
```
