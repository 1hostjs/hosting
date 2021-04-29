#!/usr/bin/env node
import path from "path";
if (process.argv[2] === "start") {
  await import(path.join("..", "src", "index.js"));
} else if (process.argv[2] === "config") {
  await import("./config.js");
} else {
  await import("./config.js");
}
