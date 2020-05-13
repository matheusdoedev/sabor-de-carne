const config = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  resolve: {
    /* ... */
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;
