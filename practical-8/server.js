// const path = require('path'),
//     express = require('express'),
//     webpack = require('webpack'),
//     webpackConfig = require('./webpack.config.js'),
//     app = express(),
//     port = process.env.PORT || 3000; app.listen(port, () => { console.log(`App is listening on port ${port}`) }); app.get('/', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
//     }); let compiler = webpack(webpackConfig);
// app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true, publicPath: webpackConfig.output.publicPath, stats: { colors: true }
// }));
// app.use(require('webpack-hot-middleware')(compiler));
// app.use(express.static(path.resolve(__dirname, 'dist')));

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});