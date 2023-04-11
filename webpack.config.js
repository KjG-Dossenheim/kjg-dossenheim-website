const path = require('path');

module.exports = {
    mode: 'production',
    entry: [path.resolve('src', 'js', 'app.js')],
    output: {
        path: path.resolve('assets'),
        filename: 'bundle.js',
    },
};