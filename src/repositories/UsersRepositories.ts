import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";


@EntityRepository(User)
class UsersRepositories extends Repository<User>{users}

export { UsersRepositories }