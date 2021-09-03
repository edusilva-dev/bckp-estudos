import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User"
import { UsersRepository } from "../repositories/UserRepository"

class UsersService {
  private usersRepository: Repository<User>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository)
  }

  async create(username: string, password: string, email: string) {
    const userExists = await this.usersRepository.findOne({username})

    if (userExists) return userExists

    const user = this.usersRepository.create({
      username,
      password,
      email
    })

    await this.usersRepository.save(user)

    return user
  }

  async listAllUsers() {
    const allUsers = await this.usersRepository.find()

    return allUsers
  }

  async authenticate(username: string, password: string) {
    const userExists = await this.usersRepository.findOne({username, password})

    if (userExists) return userExists

    if (!userExists) return null
  }
}

export { UsersService }