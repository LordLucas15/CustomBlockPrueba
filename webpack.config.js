module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'main.js',
		path: __dirname + '/dist'
	},
		resolve: {
			alias: {
			'jquery-ui': 'jquery-ui/ui/widgets',
			'jquery-timepicker': 'jquery-timepicker',
			},
		},
	module: {
		rules: [{
			test: /\.(jpe?g|png|gif)$/i,   //to support eg. background-image property 
			loader:"file-loader",
			query:{
				name:'[name].[ext]',
				outputPath:'images/'
				//the images will be emmited to public/assets/images/ folder 
				//the images will be put in the DOM <style> tag as eg. background: url(assets/images/image.png); 
			}
		},
		{
			test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    //to support @font-face rule 
			loader: "url-loader",
			query:{
				limit:'10000',
				name:'[name].[ext]',
				outputPath:'fonts/'
				//the fonts will be emmited to public/assets/fonts/ folder 
				//the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf); }  
			}
		},	
		{
			test: /\.css$/,
			use: ["style-loader","css-loader"]
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
			  loader: 'babel-loader',
			}
		}]
	},
	externals:{
		jquery: 'jquery'
	}
};
