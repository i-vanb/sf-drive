import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthModule} from "./Auth/auth.module";
import {GraphQLModule} from "@nestjs/graphql";
import {CarModule} from "./Cars/car.module";

@Module({
    imports: [
        CarModule,
        TypeOrmModule.forRoot({
            name: 'default',
            type: "mongodb",
            host: 'localhost',
            port: 27017,
            database: 'cars-mongo',
            useNewUrlParser: true,
            useUnifiedTopology: true,
            entities: [
                `${__dirname}/**/*.entity.{ts,js}`
            ]
        }),
        AuthModule,
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql'
            // typePaths: ['./**/*.graphql'],
            // definitions: {
            //     path: join(process.cwd(), '/src/graphql.ts')
            // }
        })
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
