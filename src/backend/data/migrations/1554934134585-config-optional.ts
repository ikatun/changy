/* tslint:disable */
import {MigrationInterface, QueryRunner} from "typeorm";

export class configOptional1554934134585 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "secondary_listener" ADD "url" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "primary_listener" ADD "url" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "secondary_listener" ALTER COLUMN "requestConfig" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "source" ALTER COLUMN "requestConfig" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "primary_listener" ALTER COLUMN "requestConfig" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "primary_listener" ALTER COLUMN "requestConfig" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "source" ALTER COLUMN "requestConfig" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "secondary_listener" ALTER COLUMN "requestConfig" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "primary_listener" DROP COLUMN "url"`);
        await queryRunner.query(`ALTER TABLE "secondary_listener" DROP COLUMN "url"`);
    }

}
