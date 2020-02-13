# **DOC DE LAPI DU PROJET E-COMMERCE**

## Paths list

### Users
- [/api/auth/register](#Register)
- [/api/auth/login](#Login)
- [/api/auth/details](#Details)
- [/api/admin/user/delete/{id}](#Delete-user)
- [/api/admin/user/showAll](#Show-all-users)
- [/api/admin/user/show/{id}](#Show-one-user)
- [/api/admin/user/update/{id}](#Update-one-user)

### Categories
- [/api/admin/category/create](#Create-a-category)
- [/api/admin/category/update/{id}](#Update-a-category)
- [/api/admin/category/destroy/{id}](#Delete-a-category)
- [/api/category/show/{id}](#Show-a-category)
- [/api/category/showAll](#Show-all-categories)

### Articles
- [/api/admin/article/create](#Create-an-article)
- [/api/admin/article/update/{id}](#Update-an-article)
- [/api/admin/article/destroy/{id}](#Delete-an-article)
- [/api/article/show/{id}](#Show-an-article)
- [/api/article/showAll](#Show-all-articles)
- [/api/article/search](#Search-articles)

### Avis
- [/api/avis/create](#Create-an-avis)
- [/api/admin/avis/destroy/{id}](#Delete-an-avis)
- [/api/avis/show/{id}](#Show-an-avis)
- [/api/avis/showAll](#Show-all-avis)


# **PATH DETAILS**

# **Users**

## Register
- Method: POST
- Required header: none
- Required form-data: 
```
{
  name: Bob,
  email: bob@bob.bob,
  password: monpassword,
  c_password: monpassword,
} 
```
- Responses:
```
Success: 200 & a webtoken
Error on wrong form: 400 & {
  error: [
    {
      email: Wrong email format
    },
  ]
}
```

## Login
- Method: POST
- Required header: none
- Required form-data: 
```
{
  email: bob@bob.bob,
  password: monpassword,
} 
```
- Responses:
```
Success: 200 & a webtoken
Error on wrong form: 401 & Unauthorized
```

## Details
- Method: GET
- Required header: Authorization with a webtoken
- Required form-data: none
- Responses:
```
Success: 200 & {
  id: 1,
  name: bob,
  email: bob@bob.bob,
  role: ROLE_USER,
}
On error: 500 or 401
```

## Delete user
- Method: DELETE
- Permissions: ROLE_ADMIN
- Required header: Authorization with a webtoken
- Required form-data: none
- Responses:
```
Success: 200
On error: 500 or 401
```

## Show all users
- Method: GET
- Permissions: ROLE_ADMIN
- Required header: Authorization with a webtoken
- Required form-data: none
- Responses:
```
Success: 200 & array of all users [
  {
    id: 1,
    name: bob,
    email: bob@bob.bob,
    role: ROLE_USER,
  }
]
On error: 500 or 401
```

## Show one user
- Method: GET
- Permissions: ROLE_ADMIN
- Required header: Authorization with a webtoken
- Required form-data: none
- Responses:
```
Success: 200 & {
  id: 1,
  name: bob,
  email: bob@bob.bob,
  role: ROLE_USER,
}
On error: 500 or 401
```

## Update one user
- Method: POST
- Permissions: ROLE_ADMIN
- Required header: Authorization with a webtoken
- Required form-data: 
```
{
  name: Bob,
  email: bob@bob.bob,
  role: ROLE_ROLE,
} 
```
- Responses:
```
Success: 200 & a webtoken
Error on wrong form: 400 & {
  error: [
    {
      email: Wrong email format
    },
  ]
}
```

# **Category**

## Create a category
- Method: POST
- Permissions: ROLE_ADMIN
- Required header: Authorization with a webtoken
- Required form-data: 
```
{
  name: Vetement,
} 
```
- Responses:
```
Success: 200
Error on wrong form: 400 & {
  error: [
    {
      name: name doit etre unique
    },
  ]
}
```

## Update a category
- Method: POST
- Permissions: ROLE_ADMIN
- Required header: Authorization with a webtoken
- Required form-data: 
```
{
  name: Vetement,
} 
```
- Responses:
```
Success: 200
Error on wrong form: 400 & {
  error: [
    {
      name: name doit etre unique
    },
  ]
}
```

## Delete a category
- Method: DELETE
- Permissions: ROLE_ADMIN
- Required header: Authorization with a webtoken
- Required form-data: none
- Responses:
```
Success: 200
On error: 500 or 401
```

## Show a category
- Method: GET
- Required header: non
- Required form-data: none
- Responses:
```
Success: 200 & {
  id: 1,
  name: Vetement,
}
On error: 500
```

## Show all categories
- Method: GET
- Required header: non
- Required form-data: none
- Responses:
```
Success: 200 & array of categories[
  {
    id: 1,
    name: Vetement,
  }
]
On error: 500
```

# **Article**

## Create an article
- Method: POST
- Permissions: ROLE_ADMIN
- Required header: Authorization with a webtoken
- Required form-data: 
```
{
  name: Vetement,
  modele: tshirt,
  marque: tmd,
  prix: 13,
  description: 'jejejej',
  reference: RF34-T,
} 
```
- Responses:
```
Success: 200
Error on wrong form: 400 & {
  error: [
    {
      reference: reference doit etre unique
    },
  ]
}
```

## Update an article
- Method: POST
- Permissions: ROLE_ADMIN
- Required header: Authorization with a webtoken
- Required form-data: 
```
{
  name: Vetement,
  modele: tshirt,
  marque: tmd,
  prix: 13,
  description: 'jejejej',
  reference: RF34-T,
} 
```
- Responses:
```
Success: 200
Error on wrong form: 400 & {
  error: [
    {
      reference: reference doit etre unique
    },
  ]
}
```

## Delete an article
- Method: DELETE
- Permissions: ROLE_ADMIN
- Required header: Authorization with a webtoken
- Required form-data: none
- Responses:
```
Success: 200
On error: 500 or 401
```

## Show an article
- Method: GET
- Required header: non
- Required form-data: none
- Responses:
```
Success: 200 & {
  "id": 2,
  "name": "Chemise à carreaux",
  "reference": "a3dsqdqs",
  "modele": "carreau",
  "marque": "bobBos",
  "description": "belle chemis",
  "prix": 100,
  "created_at": "2020-01-14 16:04:30",
  "updated_at": "2020-01-14 17:45:25"
}
On error: 500
```

## Show all articles
- Method: GET
- Required header: non
- Required form-data: none
- Responses:
```
Success: 200 & an array of all articles [
  {
    "id": 2,
    "name": "Chemise à carreaux",
    "reference": "a3dsqdqs",
    "modele": "carreau",
    "marque": "bobBos",
    "description": "belle chemis",
    "prix": 100,
    "created_at": "2020-01-14 16:04:30",
    "updated_at": "2020-01-14 17:45:25"
  }
]
On error: 500
```

## Search articles
- Method: GET
- Required header: non
- Required form-data: none
- GET parameters:
- - name
- - category
- - description
- - min_price
- - max_price
- Responses:
```
Success: 200 & {
  "id": 2,
  "name": "Chemise à carreaux",
  "reference": "a3dsqdqs",
  "modele": "carreau",
  "marque": "bobBos",
  "description": "belle chemis",
  "prix": 100,
  "created_at": "2020-01-14 16:04:30",
  "updated_at": "2020-01-14 17:45:25"
}
On error: 500
```

# **Avis**

## Create an avis
- Method: POST
- Permissions: ROLE_USER
- Required header: Authorization with a webtoken
- Required form-data: 
```
{
  user_id: 1,
  article_id: 1,
  comment: 'coucou c un comment'
} 
```
- Responses:
```
Success: 200
```

## Delete an avis
- Method: DELETE
- Permissions: ROLE_ADMIN
- Required header: Authorization with a webtoken
- Required form-data: none
- Responses:
```
Success: 200
On error: 500 or 401
```

## Show an avis
- Method: GET
- Required header: non
- Required form-data: none
- Responses:
```
Success: 200 & {
  "id": 2,
  "user_id": "1",
  "article_id": "1",
  "comment": "coucocuc uncoment"
}
On error: 500
```

## Show all avis
- Method: GET
- Required header: non
- Required form-data: none
- Responses:
```
Success: 200 & an array of all avis [
  {
    "id": 2,
    "user_id": "1",
    "article_id": "1",
    "comment": "coucocuc uncoment"
  }
]
On error: 500
```