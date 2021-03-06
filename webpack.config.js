var webpack = require('webpack');
//var nodeExternals = require('webpack-node-externals');
var path = require("path");

module.exports =  {
    entry: {
      "example": "./examples/example.ts"/*
      "app-startup": "./app/scripts/startup.ts",
      "legacy-app-loading": "./app/scripts/legacy-app-loading.ts"*/
    },
    output: {
      filename: "[name].js",
      path: path.join(__dirname, "./examples")
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"] // note if using webpack 1 you"d also need a "" in the array as well
    },
    plugins: [
      /*
      function() {
        this.plugin("done", function(stats) {
          const cacheBustMappingPath = path.join(__dirname, "/dist/cache-bust-mapping/");

          if (!fs.existsSync(cacheBustMappingPath)) {
            fs.mkdirSync(cacheBustMappingPath);
          }

          fs.writeFileSync(cacheBustMappingPath + "scripts.json",
            JSON.stringify(stats.toJson()));
          });
      }*/
    ],
    module: {
      loaders: [ 
        // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { 
          "test": /\.tsx?$/,
          loader: "ts-loader"
        }
      ]
    }
  };
