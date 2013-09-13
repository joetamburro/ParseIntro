/*global describe, it */
'use strict';
(function () {
  describe('The Task Form', function(){
    this.timeout(15000);
 
    it('should save a new task and that task should be returned from Parse', function(done){
      var result;
 
      // fill out the form
      var form = $('.form')
      // make a random title with which we can query
      var randomTitle = 'A Test Task #'+ Math.floor(Math.random()*10000000)
      form.find('.task-title').val(randomTitle)
      form.find('.task-content').val('This is a really great task! I loved writing it!')
 
      // submit it
      $('.save').click()
 
      setTimeout((function(){
 
        var query = new Parse.Query(TaskClass);
        query.equalTo("title", randomTitle);
        query.find({
          success: function(results) {
            result = results[0]
            console.log(results)
            expect(result.get('title')).to.equal(randomTitle)
            done()
          },
          error: function(error) {
            done(error.description)
          }
        });
 
      }), 2000)
    }); // end it()

    it('should save a new task  ', function(){








    })






    it('should populate the sidebar with new task upon save', function(done){

 // fill out the form
      var form = $('.form')
      // make a random title with which we can query
      var randomTitle = 'A Great Post #'+ Math.floor(Math.random()*10000000)
      form.find('#title').val(randomTitle)
      form.find('#content').val('This is a really bad post! I loved writing it!')
 
      // submit it
      $('.save').click()

      setTimeout(function(){
        var lastSidebarItem = $('.sidebar .notes li').last().text()
        expect( lastSidebarItem ).to.equal(randomTitle)
        done()
      }, 3000)

    })



    
    })


  })
})();