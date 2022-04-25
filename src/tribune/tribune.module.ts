import { Module } from '@nestjs/common';
import { TribuneController } from './tribune.controller';
import { TribuneService } from "./tribune.service";
import { PrismaModule } from "../Prisma/prisma.module";

@Module({
    imports: [],
    controllers: [TribuneController],
    providers: [TribuneService]
})
export class TribuneModule {}