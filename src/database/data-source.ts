import { DataSource } from 'typeorm'

const appDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  synchronize: false,
  logging: false,
  entities: [],
  migrations: ["./src/database/migrations/*.ts"],
  subscribers: [],
})

export function createConnection(host = "postgres"): Promise<DataSource> {
  return appDataSource.setOptions({ host }).initialize();
}

export default appDataSource