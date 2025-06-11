
| ENDPOINT             | METHOD | REQUEST BODY                              | RESPONSE BODY                            | FUNCTION                     |
|----------------------|--------|-------------------------------------------|------------------------------------------|------------------------------|
| `/api/cart` | GET   | - | -     | Get All Cart Items         |
| `/api/auth/login`    | POST   | `{ "username": "john", "password": "123" }` | `{ "token": "jwt-token" }`              | Authenticate user & get token |
| `/api/products`      | GET    | –                                         | `[ { "id": 1, "name": "Item A" } ]`      | Fetch product list           |
| `/api/products/:id`  | GET    | –                                         | `{ "id": 1, "name": "Item A" }`          | Get product details by ID    |
| `/api/cart`          | POST   | `{ "productId": 1, "quantity": 2 }`        | `{ "message": "Added to cart" }`         | Add item to cart             |
| `/api/cart/:id`      | DELETE | –                                         | `{ "message": "Item removed" }`          | Remove item from cart        |
