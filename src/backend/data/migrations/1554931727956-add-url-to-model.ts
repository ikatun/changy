/* tslint:disable */
import {MigrationInterface, QueryRunner} from "typeorm";

export class addUrlToModel1554931727956 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "source" ADD "url" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "source" DROP COLUMN "url"`);
    }

}
