import { Injectable } from '@nestjs/common';
import { ISupportRequestService } from '../interfaces/support.request.interface';
import {
  SupportRequest,
  SupportRequestDocument,
} from '../schemas/support.request.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from '../schemas/message.schema';
import { GetChatListParams } from '../interfaces/message.interface';
import { SendMessageDto } from '../interfaces/dto/message.dto';

@Injectable()
export class SupportService implements ISupportRequestService {
  constructor(
    @InjectModel(SupportRequest.name)
    private readonly SupportRequestModel: Model<SupportRequestDocument>,

    @InjectModel(Message.name)
    private readonly MessageModel: Model<MessageDocument>,
  ) {}

  private readonly subscribers = [];

  findSupportRequests(params: GetChatListParams): Promise<SupportRequest[]> {
    return this.SupportRequestModel.find(params);
  }

  async sendMessage(data: SendMessageDto): Promise<Message> {
    const supportRequest = await this.SupportRequestModel.findOne({
      _id: data.supportRequest,
    });
    const newMessage = new this.MessageModel({
      author: data.author,
      text: data.text,
    });
    supportRequest.messages.push(newMessage);
    supportRequest.save();

    this.subscribers.forEach((subscriber) => {
      subscriber(supportRequest, newMessage);
    });

    return newMessage;
  }

  async getMessages(supportRequestID: string): Promise<Message[]> {
    const supportRequest = await this.SupportRequestModel.findOne({
      _id: supportRequestID,
    });
    return supportRequest.messages;
  }

  subscribe(
    handler: (supportRequest: SupportRequest, message: Message) => void,
  ) {
    this.subscribers.push(handler);
  }
}
