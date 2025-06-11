
| ENDPOINT             | METHOD | REQUEST BODY                              | RESPONSE BODY                            | FUNCTION                     |
|----------------------|--------|-------------------------------------------|------------------------------------------|------------------------------|
|`/api/auth/signup`|POST|`{ "email": "test@gmail.com", "firstName": "Juan", "lastName": "Cruz", "password": "juancruz123" }`|`{ "email": "test@gmail.com", "firstName": "Juan", "lastName": "Cruz", "password": "juancruz123", "_id": "1" }`|Sign Up User|
| `/api/cart` | GET   | - | -     | Get All Cart Items         |
| `/api/cart`    | POST   | `{ "username": "john", "password": "123" }` | `{ "token": "jwt-token" }`              | Add Cart Item |
| `/api/products`      | GET    | –                                         | `[ { "id": 1, "name": "Item A" } ]`      | Fetch product list           |
| `/api/products/:id`  | GET    | –                                         | `{ "id": 1, "name": "Item A" }`          | Get product details by ID    |
| `/api/cart`          | POST   | `{ "productId": 1, "quantity": 2 }`        | `{ "message": "Added to cart" }`         | Add item to cart             |
| `/api/cart/:id`      | DELETE | –                                         | `{ "message": "Item removed" }`          | Remove item from cart        |
