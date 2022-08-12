// src/app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { MessagesController } from './apis/messages/messages.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Admin:Admin@cluster0.xnbimps.mongodb.net/?retryWrites=true&w=majority'),
    MessagesModule,
  ],
  controllers: [AppController, MessagesController],
  providers: [AppService],
})
export class AppModule { }
