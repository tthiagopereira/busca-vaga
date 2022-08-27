module.exports = {
  type: 'postgres',
  host: 'db',
  port: Number(process.env.DATABASE_PORT),
  username: 'postgres',
  password: '1234',
  database: 'busca_servico',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
