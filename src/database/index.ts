import { DataSource } from 'typeorm'

const appDataSource = new DataSource({
  type: "postgres",
  host: "database_ignite", // Com o nome do container funciona
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
});
