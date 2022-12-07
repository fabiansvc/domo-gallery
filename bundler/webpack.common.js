const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output:
    {
        hashFunction: 'xxhash64',
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[contenthash].js',
        publicPath: ""
    },
    devtool: 'source-map',
    plugins:
        [
            new CopyWebpackPlugin({
                patterns: [
                    { from: path.resolve(__dirname, '../static') }
                ]
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../public/index.html'),
                minify: true
            }),
            new MiniCSSExtractPlugin()
        ],
    module:
    {
        rules:
            [
                {
                    test: /\.(scss)$/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: () => [
                                        require('autoprefixer')
                                    ]
                                }
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                },
                // HTML
                {
                    test: /\.(html)$/,
                    use:
                        [
                            'html-loader'
                        ]
                },

                // JS
                {
                    use: "babel-loader",
                    test: /.(js|jsx)$/,
                    exclude: /node_modules/
                },

                // CSS
                {
                    test: /\.css$/,
                    use:
                        [
                            MiniCSSExtractPlugin.loader,
                            'css-loader'
                        ]
                },

                // Images
                {
                    test: /\.(jpg|png|gif|svg)$/,
                    type: 'asset/resource',
                    generator:
                    {
                        filename: 'assets/images/[hash][ext]'
                    }
                },

                // Fonts
                {
                    test: /\.(ttf|eot|woff|woff2)$/,
                    type: 'asset/resource',
                    generator:
                    {
                        filename: 'assets/fonts/[hash][ext]'
                    }
                },

                // Shaders
                {
                    test: /\.(glsl|vs|fs|vert|frag)$/,
                    type: 'asset/source',
                    generator:
                    {
                        filename: 'assets/images/[hash][ext]'
                    }
                },
                {
                    test: /\.(mp4|ogg)$/, 
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                outputPath: "video"
                            }
                        }
                    ]
                }               
            ]
    },
    // PATH RESOLVE
    resolve: {
        extensions: ['.js', '.json', '.jsx'],

        modules: [
        path.resolve(__dirname, 'src'),
            'node_modules'
        ]
    },
}
