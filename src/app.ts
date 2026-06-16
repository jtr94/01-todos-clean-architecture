import { Server } from "./presentation/server.ts";

function main() {
  const server = new Server({
    port: 3001,
  });
  server.start();
}

(() => {
  main();
})();
