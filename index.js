import { server } from "./src/app.js"
import dotenv from "dotenv";
import { migration_system_commands_names } from "./src/migrations/utils.js";
import { migration_system } from "./src/migrations/index.js";

dotenv.config();



async function main() {
  if (migration_system_commands_names.includes(process.argv[2])) {
    // running migration command use ` node index.js migration --help ` for more information
    await migration_system();
  } else {
    // config and run server
    try {

      const port = process.env.PORT || 3000;
      server.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
    } catch (error) {
      console.error("Startup error:", error);
      process.exit(1);
    }
  }
}

main();

