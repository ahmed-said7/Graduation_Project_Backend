import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { UploadModule } from './upload/upload.module';
import { catchExceptionsFilter } from './common/global-filter';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UploadModule],
  controllers: [],
  providers: [{ provide: APP_FILTER, useClass: catchExceptionsFilter }],
})
export class AppModule {
  // MiddlewareConsumer is used to configure the middleware vvv
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(CheckHeaderMiddleware /* , otherMiddleWare */)
  //     .forRoutes(
  //       { path: '*', method: RequestMethod.ALL } /* OR AppController */,
  //     );
  //   /*  // to implement other middleware:
  //        consumer
  //             .apply(NewMiddleware)
  //             .forRoutes({ path: 'demo', method: RequestMethod.GET });*/
  // }
}
