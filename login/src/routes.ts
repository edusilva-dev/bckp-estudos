import { Router } from 'express'
import { UsersController } from './controllers/UsersController'

const routes = Router()

const usersController = new UsersController()

routes.post('/login/authentication', usersController.authenticate)
routes.post('/users/add', usersController.create)
routes.get('/users', usersController.listAllUsers)

export { routes }