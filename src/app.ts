import { Server } from "./presentation/server.ts";

function main() {
  const server = new Server({
    port: 3000,
  });
  server.start();
}

(() => {
  main();
})();
