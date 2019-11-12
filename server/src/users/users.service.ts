import { Injectable, Inject  } from "@nestjs/common";
import { hashPassword } from '../shared/helpers/bcrypt';
import { User } from "./interfaces/user.interface";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {  
  constructor(@Inject('USER_MODEL') private userModel: Model<User>) {}
  
  async create(user: CreateUserDto): Promise<User> { 
    user.password = await hashPassword(user.password);
    const createUser = new this.userModel(user);
    return await createUser.save();
  }
  
  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User | undefined> {
    return await this.userModel.findOne({ _id: id });
  }
}