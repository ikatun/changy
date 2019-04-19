/* eslint-disable */
require("ts-node").register({
  typeCheck: true,
});
require("dotenv").config();
require("reflect-metadata");

process.env.TZ = 'UTC';
require("./server/app");
