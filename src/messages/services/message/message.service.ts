// src/messages/services/message/message.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from 'src/schemas/message.schema';

@Injectable()
export class MessageService {
    constructor(
        @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
    ) { }

    async create(message: Message) {
        let createdMessage = new this.messageModel(message);
        message.createdAt = Date.now();
        await createdMessage.save();
    }

    async findAll() {
        return await this.messageModel.find().exec();
    }

    async findbyUserId(fromUserId: string, toUserId: string) {
        return await this.messageModel.find({
            $or: [
                { fromuser: fromUserId, touser: toUserId },
                { fromuser: toUserId, touser: fromUserId },
            ],
        }).exec();
    }
}
