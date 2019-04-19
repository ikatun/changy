/* tslint:disable */
import {MigrationInterface, QueryRunner} from "typeorm";

export class useSeconds1554936945874 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "source" RENAME COLUMN "intervalMilliseconds" TO "intervalSeconds"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "source" RENAME COLUMN "intervalSeconds" TO "intervalMilliseconds"`);
    }

}
