import { Module } from '@nestjs/common';
import { SupportService } from './support.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SupportRequest,
  SupportRequestSchema,
} from '../schemas/support.request.schema';
import { SupportController } from './support.controller';
import { Message, MessageSchema } from '../schemas/message.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SupportRequest.name, schema: SupportRequestSchema },
      { name: Message.name, schema: MessageSchema },
    ]),
  ],
  providers: [SupportService],
  controllers: [SupportController],
})
export class SupportModule {}
