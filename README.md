
| ENDPOINT             | METHOD | REQUEST BODY                              | FUNCTION                     |
|----------------------|--------|-------------------------------------------|------------------------------|
|`/api/auth/signup`|POST|`{ email, firstName, lastName, password }`|Sign Up User|
|`/api/auth/signin`|POST|`{ email, password }`|Sign In User|
|`/api/auth`|GET|Authorization: Bearer Token |Get User Data|
|`/api/products`|GET|–|Get All Products|
|`/api/products/:productId`|GET|–|Get Single Product|
|`/api/products`|POST|`{ name, price, description, stock, imageUrl, category, trending }`|Post Product|
|`/api/products/trending`|GET|-|Get Trending Products|
|`/api/cart`|GET|-|Get All Cart Items|
|`/api/cart`|POST|{ productId, imageUrl, name, price, quantity, color, size }|Add Cart Item|
|`/api/cart/checkout`|POST|{ email, firstName, lastName, address, province, city, phone, order }|Checkout Order|
|`/api/cart/increment`|PATCH|{ productId, color, size }|Increment Cart Item|
|`/api/cart/decrement`|PATCH|{ productId, color, size }|Decrement Cart Item|
|`/api/cart`|DELETE|{ productId, color, size }|Delete Cart Item|
