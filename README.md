Task (Client)
You can check the application here: https://task-rszt.onrender.com

The Task web application provides a responsive and user-friendly interface for managing task assignments within an organization. Built with Angular and styled using SCSS, the frontend ensures a seamless experience for both admin and employee users. Authentication is handled via JWT, enabling secure access and role-based routing across the app.

🔑 Key Features:

Admin and Employee role-based dashboards

Secure login, registration, and logout with JWT

Task creation, assignment, and tracking by Admins

Employees can view, update status, and comment on assigned tasks

Task detail and list view with card-based UI

Keyword search for products/tasks

Comment threads for task collaboration

🎨 Technologies:

Angular (SPA framework)

Angular Material (UI components and layout)

SCSS (modular and maintainable styling)

RxJS (reactive programming for async data)

JWT (for secure route guarding and user sessions)

TypeScript (strong typing and scalable codebase)

✅ Design & Architecture:

Component-Based Architecture
Encapsulated UI and logic for maintainability and reusability.

Reactive Forms
Used for login, registration, and task input with full validation support.

Route Guards
Role-based access control implemented via Angular route guards.

Service Layer
Centralized services handle API communication and state management.

Responsive Design
Fully responsive UI using Angular Material’s grid and layout utilities.
### Endpoints

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
