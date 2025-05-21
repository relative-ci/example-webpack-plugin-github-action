const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const RelativeCIAgentPlugin = require('@relative-ci/webpack-plugin');

const packageInfo = require('./package.json');

const SRC_DIR = path.resolve(__dirname, 'src');
const OUT_DIR = path.resolve(__dirname, 'dist');
const ARTIFACTS_DIR = path.resolve(__dirname, 'artifacts');

module.exports = (_, options) => {
  const { mode = 'production' } = options;
  const isProduction = mode === 'production';

  return {
    context: SRC_DIR,
    mode, 
    entry: './index.jsx',
    output: {
      path: OUT_DIR,
      filename: isProduction ? '[name].[contenthash].js': '[name].js',
      assetModuleFilename: isProduction ? '[path][name].[contenthash].[ext]' : '[path][name].[ext]',
      hashDigestLength: 8,
    },
    resolve: {
      extensions: ['.jsx', '.js', '.json'],
      alias: {
        // '@babel/runtime/helpers/esm': '@babel/runtime/helpers/',
      },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: 'babel-loader',
          include: [SRC_DIR],
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    require('autoprefixer'),
                    ... isProduction ? [require('cssnano')] : [],
                  ],
                },
              },
            },
          ],
          include: [
            SRC_DIR,
            /node_modules\/antd/,
          ],
        },
        {
          test: /\.(png|jpe?g|webp|gif)$/,
          type: 'asset/resource',
          include: [SRC_DIR],
        },
        {
          test: /\.svg$/,
          type: 'asset/resource',
          include: [path.join(SRC_DIR, 'assets')],
        },
        {
          test: /\.inline.svg$/,
          use: ['@svgr/webpack'],
        }
      ],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          },
        },
      },
    },
    plugins: [
      new HtmlPlugin({
        title: packageInfo.description,
        template: './index.html',
        publicPath: '/',
      }),
      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].[contenthash].css': '[name].css',
        chunkFilename: isProduction ? '[name].chunk.[contenthash].css': '[name].css',
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'public'),
          },
        ],
      }),
      new RelativeCIAgentPlugin({
        payloadFilepath: path.join(ARTIFACTS_DIR, 'relative-ci-payload.json'),
        failOnError: true,
      }),
    ]
  };
};
