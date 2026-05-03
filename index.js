import { server } from "./src/app.js";
import setupMongoServer from "./src/config/db.config.js";
import { PORT } from "./src/config/env.config.js";

async function main() {
  try {

    // connect data base
    await setupMongoServer();


    // start server
    const port = PORT || 3000;
    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Startup error:", error);
    process.exit(1);
  }
}

main();
