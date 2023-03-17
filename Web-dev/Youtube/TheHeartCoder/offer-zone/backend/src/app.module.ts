import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import config from 'config';

@Module({
  imports: [
    MongooseModule.forRoot(config.get('mongoDbUrl'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      w: 1,
      keepAlive: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
