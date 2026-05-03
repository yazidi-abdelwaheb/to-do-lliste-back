import { program } from "commander";
import { getListMigrationName } from "./utils.js";
import runMigration from "./run-migration.js";
import { newFileData, newMigration } from "./new-files.js";

const choice = ["help", "all", "new", "run", "new_data"];

async function migration_system() {
  const option = process.argv[2];
  const param = process.argv[3];

  switch (option) {
    case "help": {
      console.log(`
        Migration system for manegment migration files.
        To be run or create a new migration file with the specified migration name.


        npm run migration new <migration-name>
        Create a new migration file in "@/src/migrations/migrations-files"

        npm run migration new_data <data-file-name>
        Create a new data file in "@/src/migrations/data"

        npm run migration run <migration-name>
        Run the migration file from "@/src/migrations/migrations-files"
        
        npm run migration all , View all migrations names
        
        `);
      break
    }
    case "all": {
      console.log("");
      console.log("View all migrations");
      console.log("");
      console.table(getListMigrationName());
      break
    }
    case "new": {
      console.log("");
      console.log("create new migration : " + param);
      console.log("");
      await newMigration(param);
      break
    }
    case "new_data": {
      console.log("");
      console.log("create new data file : " + param);
      console.log("");
      await newFileData(param);
      break
    }
    case "run" : {
       console.log("");
        console.log("run migration : " + args.run);
        console.log("");
        await runMigration(args.run);
        break
    }
    default : {
        console.log(
          "Choice valid option for manage your migration . Run ```npm run migration help``` for view all migration option ",
        );
        console.log("");
        break
    }
  }
}

await migration_system();
