
| ENDPOINT             | METHOD | REQUEST BODY                              | FUNCTION                     |
|----------------------|--------|-------------------------------------------|------------------------------|
|`/api/auth/signup`|POST|`{ email, firstName, lastName, password }`|Sign Up User|
|`/api/auth/signin`|POST|`{ email, password }`|Sign In User|
|`/api/auth`|GET|Authorization: Token |Get User Data|
|`/api/products`|GET|–|Get All Products|
|`/api/products/:id`|GET|–|Get Single Product|
|`/api/products`|POST|`{ name, price, description, stock, imageUrl, category, trending }`|Post Product|
|`/api/products/trending`|GET|-|Get Trending Products|
|`/api/cart`|GET|-|Get All Cart Items|
|`/api/cart`|POST|{}|Add Cart Item|
|`/api/cart/checkout`|POST|{}|Checkout Order|
|`/api/cart/increment`|PATCH|-|Increment Cart Item|
|`/api/cart/decrement`|PATCH|-|Decrement Cart Item|
|`/api/cart`|DELETE|-|Delete Cart Item|
