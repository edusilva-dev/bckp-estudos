import { Request, Response } from 'express'
import { UsersService } from '../services/UsersService'

class UsersController {
  async create(req: Request, res: Response): Promise<Response> {
    const { username, password, email } = req.body

    const usersService = new UsersService()

    const user = await usersService.create(username, password, email)

    return res.json(user)
  }

  async listAllUsers(req: Request, res: Response): Promise<Response> {
    const usersService = new UsersService()
    
    const users = await usersService.listAllUsers()

    return res.json(users)
  }

  async authenticate(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body

    const usersService = new UsersService()

    const user = await usersService.authenticate(username, password)

    if (!user) {
      res.status(401.1).send({error: 'Username or password is incorrect'})
      return
    }

    return res.json(user)
  }
}

export { UsersController }