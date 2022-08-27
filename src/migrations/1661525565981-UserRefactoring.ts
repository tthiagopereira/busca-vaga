import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserRefactoring1661525565981 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('alter table users');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
