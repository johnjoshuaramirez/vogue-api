
| ENDPOINT             | METHOD | REQUEST BODY                              | RESPONSE BODY                            | FUNCTION                     |
|----------------------|--------|-------------------------------------------|------------------------------------------|------------------------------|
|`/api/auth/signup`|POST|`{ email, firstName, lastName, password }`| JSON |Sign Up User|
|`/api/auth/signin`|POST|`{ email, password }`| JSON |Sign In User|
|`/api/auth`|GET|-|JSON|Get User Data|
|`/api/products`|GET|–|JSON|Get All Products|
|`/api/products/:id`|GET|–|JSON|Get Single Product|
|`/api/products`|POST|`{ name, price, description, stock, imageUrl, category, trending }`|JSON|Post Product|
|`/api/products/trending`|GET|-|JSON|Get Trending Products|
|`/api/cart`|GET|-|JSON|Get All Cart Items|
|`/api/cart`|POST|{}|JSON|Add Cart Item|
|`/api/cart/checkout`|POST|{}|JSON|Checkout Order|
|`/api/cart/increment`|PATCH|-|JSON|Increment Cart Item|
|`/api/cart/decrement`|PATCH|-|JSON|Decrement Cart Item|
|`/api/cart`|DELETE|-|JSON|Delete Cart Item|
