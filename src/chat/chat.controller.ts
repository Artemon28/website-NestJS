import { ChatService } from "./chat.service";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ChatHistory } from "@prisma/client";
import { CreateChatDto } from "./create-chat.dto";

@ApiTags('Chat')
@Controller('/chat')
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
  ) {}

  @Post()
  public createChatRec(@Body() creatChatDto: CreateChatDto): Promise<ChatHistory> {
    return this.chatService.create(creatChatDto);
  }


  @Get(':id')
  public returnAllRec(@Param('id') id: string): Promise<ChatHistory[]> {
    return this.chatService.getAllRecords();
  }
}