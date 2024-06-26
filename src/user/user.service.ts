import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { IUserService, SearchUserParams } from '../interfaces/user.interface';
import { CreateUserDto } from '../interfaces/dto/user.dto';
import { createHash } from 'crypto';

export const hashString = (string) =>
  createHash('sha256', string).digest('hex');

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectModel(User.name) private readonly UserModel: Model<UserDocument>,
  ) {}

  create(data: CreateUserDto): Promise<User> {
    const newUser = new this.UserModel({
      passwordHash: hashString(data.password),
      ...data,
    });
    return newUser.save();
  }

  findById(id: string): Promise<User> {
    return this.UserModel.findById(id);
  }

  findByEmail(email: string): Promise<UserDocument> {
    return this.UserModel.findOne({ email: email });
  }

  findAll(params: SearchUserParams): Promise<User[]> {
    return this.UserModel.find({
      email: { $regex: params.email, $options: 'i' },
      name: { $regex: params.name, $options: 'i' },
      contactPhone: { $regex: params.contactPhone, $options: 'i' },
      ...params,
    });
  }
}
