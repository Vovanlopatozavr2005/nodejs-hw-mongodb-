import { setupServer } from './server.js';
import { initDBConnection } from './db/initMongoConnection.js';
// Hppgjsd67xbr
async function bootstrap() {
  try {
    await initDBConnection();

    setupServer();
  } catch (err) {
    console.error(err);
  }
}

bootstrap();
