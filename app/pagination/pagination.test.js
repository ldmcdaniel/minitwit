var path = require('path');
var should = require('chai').should();
var Pagination = require(path.join(process.cwd(), './app/pagination/Pagination'));


describe('Pagination', function (){
	var testArray = [{order:2, date: new Date('August 20 2015')},{order: 1, date: new Date()}];
	describe('.sort()', function (){
		it('should sort an array by descending date', fuction(){
			postSorter(testArray).forEach(function(post, i, arr){
				if(i === arr.length - 1){continue;}
				expect(post.date).to.be.above(arr[i + 1].date);
			});
		});
	}); 
	describe('Number of post per page', function (){
		it('should create pages of posts in increments of 10', function(){
			tenAtATime.forEach(function(i){
				if(i === 10 || i < 10) {
					
				} else {

				}
			})
		})
	})
	describe('archived posts' function (){
		it('should provide a full archive link which retrieves all posts as a json object' function (){

		})
		it('should render the json object to a readable format on the webpage', function (){

		})
	})
});




