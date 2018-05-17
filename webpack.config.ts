export default {
  mode: 'production',
  entry: __dirname + '/src/calendar-utils.ts',
  output: {
    path: __dirname + '/dist/umd',
    filename: 'calendar-utils.js',
    libraryTarget: 'umd',
    library: 'calendarUtils'
  },
  externals: {
    'date-fns': {
      root: ['dateFns'],
      commonjs: 'date-fns',
      commonjs2: 'date-fns',
      amd: 'date-fns'
    }
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'tslint-loader',
      exclude: /node_modules/,
      enforce: 'pre',
      options: {
        emitErrors: true,
        failOnHint: true
      }
    }, {
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        compilerOptions: {
          module: 'es2015',
          declaration: false
        }
      }
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  optimization: {
    minimize: false
  }
};
