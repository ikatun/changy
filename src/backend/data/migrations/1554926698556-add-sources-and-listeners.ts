/* tslint:disable */
import {MigrationInterface, QueryRunner} from "typeorm";

export class addSourcesAndListeners1554926698556 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "secondary_listener" ("id" SERIAL NOT NULL, "requestConfig" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "sourceId" integer, CONSTRAINT "PK_0011a2c219c7f9bcd9c7e0bdc92" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "source" ("id" SERIAL NOT NULL, "intervalMilliseconds" integer NOT NULL, "lastRefreshTime" TIMESTAMP NOT NULL, "hash" character varying NOT NULL, "requestConfig" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "ownerId" integer NOT NULL, CONSTRAINT "PK_018c433f8264b58c86363eaadde" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "primary_listener" ("id" SERIAL NOT NULL, "requestConfig" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "sourceId" integer NOT NULL, CONSTRAINT "REL_f25dd0e4a5601f42e04b11e9b3" UNIQUE ("sourceId"), CONSTRAINT "PK_1de3a81030d7561ad0a88383568" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "secondary_listener" ADD CONSTRAINT "FK_342ca308aa6828901b23fd87bfe" FOREIGN KEY ("sourceId") REFERENCES "source"("id") ON DELETE SET NULL`);
        await queryRunner.query(`ALTER TABLE "source" ADD CONSTRAINT "FK_8407a8810884900312a62917618" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "primary_listener" ADD CONSTRAINT "FK_f25dd0e4a5601f42e04b11e9b3e" FOREIGN KEY ("sourceId") REFERENCES "source"("id") ON DELETE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "primary_listener" DROP CONSTRAINT "FK_f25dd0e4a5601f42e04b11e9b3e"`);
        await queryRunner.query(`ALTER TABLE "source" DROP CONSTRAINT "FK_8407a8810884900312a62917618"`);
        await queryRunner.query(`ALTER TABLE "secondary_listener" DROP CONSTRAINT "FK_342ca308aa6828901b23fd87bfe"`);
        await queryRunner.query(`DROP TABLE "primary_listener"`);
        await queryRunner.query(`DROP TABLE "source"`);
        await queryRunner.query(`DROP TABLE "secondary_listener"`);
    }

}
