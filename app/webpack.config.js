const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;
let webpack = require('webpack');

const APP_ID = 'sampleApp';

module.exports = (_) => {
    return {
        entry: '/src/bootstrap.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                '@mui/styled-engine': '@mui/styled-engine',
            },
        },
        devServer: {
            port: 9099,
            historyApiFallback: true,
            hot: false,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: ['ts-loader'],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                APP_ID: JSON.stringify(APP_ID),
            }),
            new ModuleFederationPlugin({
                name: APP_ID,
                filename: 'groupecrit-mfe-sample.js', // fichier exposé par le MFE, à télécharger par les apps voulant l'utiliser. Doit être similaire à mainFileName dans /cdk/crit-config.json
                exposes: {
                    './PageAccueil': './src/composants/pages/accueil/accueil', // Ne sert que d'exemple d'export de multi-compost, a supprimer ou implémenter avec d'autres composants selon vos besoins
                },
                shared: {
                    react: {
                        eager: true,
                        requiredVersion: deps['react'],
                    },
                    'react-dom': {
                        eager: true,
                        requiredVersion: deps['react-dom'],
                    },
                    'react-router-dom': {
                        eager: true,
                        requiredVersion: deps['react-router-dom'],
                    },
                    '@material-ui/core': {
                        eager: true,
                        requiredVersion: deps['@material-ui/core'],
                    },
                    '@emotion/react': {
                        eager: true,
                        requiredVersion: deps['@emotion/react'],
                    },
                    '@emotion/styled': {
                        eager: true,
                        requiredVersion: deps['@emotion/styled'],
                    },
                    '@mui/material': {
                        eager: true,
                        requiredVersion: deps['@mui/material'],
                    },
                    '@mui/icons-material': {
                        eager: true,
                        requiredVersion: deps['@mui/icons-material'],
                    },
                },
            }),
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                hash: true,
            }),
        ],
    };
};
