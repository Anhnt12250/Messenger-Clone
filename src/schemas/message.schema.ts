// src/schemas/message.schema.ts

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { type } from "os";

@Schema()
export class Message {
    @Prop()
    createdAt: Number;

    @Prop()
    fromuser: string;

    @Prop()
    touser: string;

    @Prop()
    content: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
export type MessageDocument = Message & Document;