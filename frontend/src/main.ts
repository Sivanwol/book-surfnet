import { APIServer } from './common/server/ApiServer';
import { AppModule } from './app.module';
async function bootstrap() {
  const serverName = process.env.SERVER_NAME || false;
  if (!serverName) {
    console.error("Required server name param for run this server");
    process.exit(1);
  }
  console.log("Init Server settings", serverName);
  const apiServer = new APIServer( serverName , AppModule);
  await apiServer.startServer();
  console.log("Finshed Loading Server");
}
// http
bootstrap();