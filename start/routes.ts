/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Route.get('/', async () => {
//   return 'Hello world from a slim app'
// })
Route.get('/', 'PostsController.showAll')

// API
Route.get('/barang', 'PostsController.showAll')
Route.get('/barang/:idbarang', 'PostsController.show')
Route.post('/barang', 'PostsController.create')
Route.put('/barang/:idbarang', 'PostsController.update')
Route.delete('/barang/:idbarang', 'PostsController.delete')

// Auth
Route.get('register', 'AuthController.registerShow').as('auth.register.show')
Route.post('register', 'AuthController.register').as('auth.register')
Route.get('login', 'AuthController.loginShow').as('auth.login.show')
Route.post('login', 'AuthController.login').as('auth.login')
Route.get('logout', 'AuthController.logout').as('auth.logout')

