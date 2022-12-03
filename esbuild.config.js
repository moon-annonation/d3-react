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
    entryPoints: [path.resolve(__dirname, 'src')],
    bundle: true,
    sourcemap: true,
    watch: argv.watch,
    target: 'es2016',
    outfile: 'dist/bundle.js',
    inject: [path.resolve(__dirname, './react-shim.js')],
    loader: { '.ts': 'ts' },
  })
  .then((result) => {
    console.log('Running on http://localhost:12345/');
  })
  .catch((server) => {
    server.stop();
  });
