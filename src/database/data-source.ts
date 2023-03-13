// import { DataSource } from 'typeorm'

// const appDataSource = new DataSource({
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "docker",
//   password: "ignite",
//   database: "rentx",
//   synchronize: false,
//   logging: false,
//   entities: [],
//   migrations: ["./src/database/migrations/*.ts"],
//   subscribers: [],
// })

// export function createConnection(host = "postgres"): Promise<DataSource> {
//   return appDataSource.setOptions({ host }).initialize();
// }

// export default appDataSource

import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'database_ignite'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
  createConnection({
    ...options,
  });
});