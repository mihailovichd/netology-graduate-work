import { Body, Controller, Post } from '@nestjs/common';
import { SupportService } from './support.service';

@Controller('support')
export class SupportController {
  constructor(private readonly supportService: SupportService) {}

  @Post()
  sendMessage(@Body() data) {
    return this.supportService.sendMessage(data);
  }
}
