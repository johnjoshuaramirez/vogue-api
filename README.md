Live site: https://vogue-ijwh.onrender.com/

### Technologies

[![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#) [![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)](#) [![JWT](https://img.shields.io/badge/JWT-black?logo=jsonwebtokens&logoColor=white)](#) [![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white)](#) [![Visual Studio Code](https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7.svg?logo=vsc&logoColor=white)](#)

### Endpoints

Application provides 13 endpoints. Please follow the specification below:

Service url: https://vogue-api.onrender.com
| ENDPOINT             | METHOD | REQUEST BODY                              | FUNCTION                     |
|----------------------|--------|-------------------------------------------|------------------------------|
|`/api/auth/signup`|POST|{ email, firstName, lastName, password }|Sign Up User|
|`/api/auth/signin`|POST|{ email, password }|Sign In User|
|`/api/auth`|GET|Authorization: Bearer Token |Get User Data|
|`/api/products`|GET|–|Get All Products|
|`/api/products/:productId`|GET|–|Get Single Product|
|`/api/products`|POST|{ name, price, description, stock, imageUrl, category, trending }|Post Product|
|`/api/products/trending`|GET|-|Get Trending Products|
|`/api/cart`|GET|-|Get All Cart Items|
|`/api/cart`|POST|{ productId, imageUrl, name, price, quantity, color, size }|Add Cart Item|
|`/api/cart/checkout`|POST|{ email, firstName, lastName, address, province, city, phone, order }|Checkout Order|
|`/api/cart/increment`|PATCH|{ productId, color, size }|Increment Cart Item|
|`/api/cart/decrement`|PATCH|{ productId, color, size }|Decrement Cart Item|
|`/api/cart`|DELETE|{ productId, color, size }|Delete Cart Item|
