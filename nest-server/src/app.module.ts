import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthModule} from "./Auth/auth.module";
import {CarModule} from "./Cars/car.module";
import {RideModule} from "./Ride/ride.module";
import {FileModule} from "./File/file.module";


@Module({
    imports: [
        CarModule,
        RideModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'UZfah1t2l',
            database: 'sf_drive',
            entities: ['dist/**/*.entity{.ts,.js}'],
            synchronize: true
        }),
        AuthModule,
        // GraphQLModule.forRoot({
        //     autoSchemaFile: 'schema.gql',
        //     typePaths: ['./**/*.graphql'],
        //     definitions: {
        //         path: join(process.cwd(), '/src/graphql.ts')
        //     }
        // })
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
