#!/usr/bin/env node
import { MongoClient } from "mongodb";
import { spawn } from "child_process";
import fs from "fs";

const DB_URI = "mongodb://49.43.230.141/32";
const DB_NAME = "realEstate";
const OUTPUT_DIR = "Resdiency";
const client = new MongoClient(DB_URI);

async function run() {
  try {
    await client.connect();

    const db = client.db(DB_NAME);
    const collections = await db.collections();

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }

    collections.forEach(async (c) => {
      const name = c.collectionName;
      spawn("mongoexport", [
        "--db",
        DB_NAME,
        "--collection",
        name,
        "--jsonArray",
        "--pretty",
        `--out=./${OUTPUT_DIR}/${name}.json`,
      ]);
    });
  } finally {
    await client.close();
    console.log(`DB Data for ${DB_NAME} has been written to ./${OUTPUT_DIR}/`);
  }
}
run().catch(console.dir);
