const path = require('path');
const fs = require('fs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const isDev = process.env.NODE_ENV;
console.log(argv.watch);

fs.writeFileSync(
  path.resolve(__dirname, 'dist', 'index.html'),
  fs.readFileSync(path.resolve(__dirname, 'public', 'index.html')).toString(),
);

require('esbuild')
  .build({
    entryPoints: ['./src/index.jsx'],
    bundle: true,
    sourcemap: isDev,
    watch: argv.watch,
    outfile: 'dist/bundle.js',
  })
  .then((result) => {
    console.log('Running on port 8080, http://localhost:8080/');
  })
  .catch((server) => {
    server.stop();
  });
