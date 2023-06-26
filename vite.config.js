const path = require('path');
import dotenv from 'dotenv';

dotenv.config(); // load env vars from .env

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
  },
  server: {
    port: 8080,
  },
};
