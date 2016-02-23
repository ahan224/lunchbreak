var cheerio = require('cheerio');
var request = require('request');

var scrapeController = {
	jsonYelp: '',

  getYelpData: function(req, res, next) {
  	// req.url will return the path
  	if (this.jsonYelp) {
  		res.setHeader('Content-Type', 'application/json');
    	res.send(this.jsonYelp);

  	} else {
  		var that = this;

  		request('http://www.yelp.com/search?find_desc=food&find_loc=Playa+Vista%2C+Los+Angeles%2C+CA&ns=1', function(error, response, html) {
	        var $ = cheerio.load(html);
	        // add code here
	        var arr = [];

	        for (var i = 0; i < 10; i++) {

	        	var obj = {};
	        	var currentListing = $('li[class=regular-search-result]').eq(i);
	        	obj.name = currentListing.find('.biz-name span').eq(0).text();
	        	obj.rating = currentListing.find('i').attr('title');
            obj.price = currentListing.find('.price-range').eq(0).text();
	        	obj.address = currentListing.find('address').html().trim().replace('<br>', ', ');
	        	obj.link = currentListing.find('.media-story a').eq(0).attr('href');
	        	arr.push(obj);
	      	}

					this.jsonYelp = JSON.stringify(arr);

        	// setTimeout(function() { that.jsonYelp = ''; }, 300000);

        	res.setHeader('Content-Type', 'application/json');
    			res.send(this.jsonYelp);
  			});

    }
  }


}

module.exports = scrapeController;
