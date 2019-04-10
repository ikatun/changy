/* tslint:disable */
import {MigrationInterface, QueryRunner} from "typeorm";
import { hashPassword } from '../../utils/crypto';
import { UserRole } from '../enums/UserRole';

export class initial1554925275620 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "passwordHash" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "forgotPasswordCode" character varying, "role" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);

        const passwordHash = await hashPassword('password');
        const email = 'admin@technobabble.hr';
        const role: UserRole = UserRole.ADMIN;
        const firstName = 'Super';
        const lastName = 'Admin';

        await queryRunner.query(`
      INSERT INTO "user"("passwordHash", "email", "role", "firstName", "lastName")
      VALUES ('${passwordHash}', '${email}', '${role}', '${firstName}', '${lastName}');`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
