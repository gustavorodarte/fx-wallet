const startServer = (server) => server.start();
const connectDatabase = (db) => db.authenticate();

module.exports = ({
  server,
  database,
}) => (
  connectDatabase(database).then(() => startServer(server))
);
