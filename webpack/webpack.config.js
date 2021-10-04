const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = ({ NODE_ENV }) => {
	const envConfig = require(`./webpack.${NODE_ENV}.js`);
	const config = merge(commonConfig, envConfig);
	return config;
};
