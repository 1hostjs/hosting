#!/usr/bin/env node
if (process.argv[2] === "start") {
  await import("../src/index.js");
} else if (process.argv[2] === "config") {
  await import("./config.js");
} else {
  await import("./help.js");
}
