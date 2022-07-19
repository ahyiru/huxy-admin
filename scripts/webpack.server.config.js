const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const postcssPresetEnv = require('postcss-preset-env');
const nodeExternals = require('webpack-node-externals');

const {appName,PUBLIC_DIR,BUILD_DIR,DEV_ROOT_DIR,publicPath}=require('../configs');

const publics=path.resolve(__dirname,PUBLIC_DIR);
const app=path.resolve(__dirname,`../${appName}`);

// const rootDir=DEV_ROOT_DIR==='/'?DEV_ROOT_DIR:`${DEV_ROOT_DIR}/`;

const frame=appName==='vue'?{vue:['vue']}:{react:['react','react-dom']};

const frameChunks=appName==='vue'?{
  vue:{
    idHint:'vue',
    test: /[\\/]node_modules[\\/]vue[\\/]/,
    enforce:true,
    priority:15,
  },
}:{
  react:{
    idHint:'react',
    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
    enforce:true,
    priority:15,
  },
};

const entry={
  app:[path.resolve(app,'index.jsx')],
  ...frame,
};
const templ=path.resolve(publics,'index.html');
const icon=path.resolve(publics,'favicon.ico');

const htmlPlugin=()=>new HtmlWebpackPlugin({
  title:appName,
  template:templ,
  favicon:icon,
  inject:true,
  minify:{
    html5:true,
    collapseWhitespace:true,
    // conservativeCollapse:true,
    removeScriptTypeAttributes:true,
    removeStyleLinkTypeAttributes:true,
    removeComments:true,
    removeTagWhitespace:true,
    removeEmptyAttributes:true,
    removeRedundantAttributes:true,
    useShortDoctype:true,
    keepClosingSlash:true,
    minifyJS:true,
    minifyCSS:true,
    minifyURLs:true,
  },
});

const postcssOptions={
  stage: 0,
  features: {
    'nesting-rules':true,
  },
  // autoprefixer: { grid: true }
  browsers: 'last 2 versions',
  importFrom:[
    // './commons/global.css',
    // './configs/themeCfg.js',
    ()=>{
      const environmentVariables={'--viewport-1':'1200px'};
      return {environmentVariables};
    },
  ],
};

const MyExampleWebpackPlugin=function(){};

MyExampleWebpackPlugin.prototype.apply=compiler=>{
  compiler.plugin('webpacksEventHook',(compilation,callback)=>{
    console.log(compilation,callback);
    callback();
  });
  compiler.plugin('compilation',compilation=>{
    compilation.plugin('optimize',()=>{
      console.log('Assets are being optimized.');
    });
  });
};

const plugins=[
  htmlPlugin(),
  new webpack.LoaderOptionsPlugin({
    minimize: false,
  }),
  /* new webpack.optimize.LimitChunkCountPlugin({
    maxChunks: 5,
  }), */
  new webpack.optimize.MinChunkSizePlugin({
    minChunkSize: 30000,
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
  // new BundleAnalyzerPlugin(),
  new ModuleFederationPlugin({
    name:'reactApp',
    // library:{ type:'var',name:'reactApp'},
    // filename:'remoteEntry.js',
    remotes:{
      useVueApp:'useVueApp',
    },
    // exposes:{
    //   ReactApp:path.resolve(__dirname, '../app'),
    //   // VueApp:path.resolve(__dirname, '../vue'),
    // },
    // shared:['react','react-dom'],
  }),
  // new HelloWorldPlugin(),
  /* {
    apply:compiler=>{
      // compiler.plugin('webpacksEventHook',(compilation,callback)=>{
      //   console.log(compilation,callback);
      //   callback();
      // });
      // compiler.plugin('compilation',compilation=>{
      //   compilation.plugin('optimize',()=>{
      //     console.log('Assets are being optimized.');
      //   });
      // });
      compiler.plugin('done', function() {
        console.log('Hello World!');
      });
    },
  }, */
];

const rules=[
  {
    test:/\.m?js/,
    resolve:{
      fullySpecified:false,
    },
  },
  {
    test:/\.(js|jsx)$/,
    loader:'babel-loader',
    exclude:[/node_modules/,path.resolve(__dirname,'node')],
  },
  {
    test:/\.tsx?$/,
    use:[
      {loader:'babel-loader'},
      {loader:'ts-loader'},
    ],
    exclude:[/node_modules/],
  },
  {
    test:/\.css$/,
    use:[
      // 'style-loader',
      'isomorphic-style-loader',
      {
        loader: 'css-loader',
        options:{
          importLoaders:1,
          modules:{
            mode:'global',
            localIdentName:'[path][name]__[local]--[hash:base64:5]',
          },
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions:{
            plugins:()=>[
              postcssPresetEnv(postcssOptions),
            ],
            /* plugins:[
              'postcss-preset-env',
              {
                // Options
              },
            ], */
          },
        },
      },
    ],
    // include:[/node_modules/],
    // exclude:[/node_modules/],
  },
  {
    test:/\.less$/,
    use: [
      // 'style-loader',
      'isomorphic-style-loader',
      {
        loader:'css-loader',
        options:{
          importLoaders:1,
          modules:{
            mode:'global',
            localIdentName:'[path][name]__[local]--[hash:base64:5]',
          },
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions:{
            plugins:()=>[
              postcssPresetEnv(postcssOptions),
            ],
            /* plugins:[
              'postcss-preset-env',
              {
                // Options
              },
            ], */
          },
        },
      },
      {
        loader:'less-loader',
        options:{
          lessOptions:{
            javascriptEnabled:true,
          },
        },
      },
    ],
    // include:[/node_modules/],
    // exclude:[/node_modules/],
  },
  {
    test: /\.html$/,
    use: {
      loader: 'html-loader',
      options: {
        minimize:true,
      },
    },
    include:[app],
  },
  {
    test:/\.(jpe?g|png|gif|psd|bmp|ico|webp|svg)/i,
    loader:'url-loader',
    options:{
      limit:20480,
      name:'img/img_[hash:8].[ext]',
      // publicPath:'../',
    },
    exclude:[/node_modules/],
  },
  {
    test:/\.(ttf|eot|svg|woff|woff2|otf)/,
    loader:'url-loader',
    options:{
      limit:20480,
      name:'fonts/[hash:8].[ext]',
      publicPath:'../',
    },
    exclude:[/images/],
  },
  {
    test:/\.(pdf)/,
    loader:'url-loader',
    options:{
      limit:20480,
      name:'pdf/[hash].[ext]',
    },
  },
  {
    test:/\.(swf|xap|mp4|webm)/,
    loader:'url-loader',
    options:{
      limit:20480,
      name:'video/[hash].[ext]',
    },
  },
];

module.exports={
  target:'node',
  mode:'development',
  context:app,
  /* cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [ __filename ],
    },
  }, */
  /* experiments: {
    asset: true,
  }, */
  entry:entry,
  output:{
    path:path.resolve(app,BUILD_DIR),
    publicPath:publicPath,
    filename:'js/[name]_[contenthash:8].js',
    chunkFilename:'js/[name]_[chunkhash:8].chunk.js',
    // assetModuleFilename: 'assets/[contenthash][ext]',
    // library:`${appName}App`,
    // libraryTarget:'umd',
  },
  optimization:{
    minimize:false,
    concatenateModules:true,

    usedExports: true,
    sideEffects: true,

    splitChunks:{
      chunks:'all',//'async','initial'
      // minSize:0,
      minSize:{
        javascript:8000,
        style:8000,
      },
      maxSize:{
        javascript:1000000,
        style:1000000,
      },
      minChunks:2,
      maxInitialRequests:10,
      maxAsyncRequests:10,
      // automaticNameDelimiter: '~',
      cacheGroups:{
        commons:{
          // chunks:'initial',
          // minSize:30000,
          idHint:'commons',
          test:app,
          priority: 5,
          reuseExistingChunk:true,
        },
        defaultVendors:{
          // chunks:'initial',
          idHint:'vendors',
          test:/[\\/]node_modules[\\/]/,
          enforce:true,
          priority:10,
        },
        ...frameChunks,
        echarts: {
          idHint:'echarts',
          chunks:'all',
          priority:20,
          test: function(module){
            const context = module.context;
            return context && (context.indexOf('echarts') >= 0 || context.indexOf('zrender') >= 0);
          },
        },
      },
    },
    // runtimeChunk:true,
    moduleIds:'deterministic',
    chunkIds:'named',
  },
  externals:[nodeExternals()],
  resolve:{
    modules:[
      app,
      'node_modules',
    ],
    alias:{
      '@app':app,
      // '@common':path.resolve(__dirname, '../commons'),
    },
    extensions:['.js','.mjs','.cjs','.jsx','.ts','.tsx','.json','.css','.less','.vue'],
  },
  module:{
    rules:rules,
  },
  plugins:plugins,
};


