


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
});