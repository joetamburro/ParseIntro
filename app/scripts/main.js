Parse.initialize("2d2HFcgSbV0ofwbDQlEFmuwV5zhW3rDy19vBIz6J", "uxlqLGhxwBkpRoOYTxmz5EAwxAjD47VDHyqRltE3");

$(document).ready(function(){
  $('.task-title').hide()
  $('.task-content').hide()
})

$(document).ready(function(){
  $('.new').click(function(){
  $('.task-title').show()
  $('.task-content').show()
  })
})

  var TaskClass = Parse.object.extend("Task");

  var TaskCollectionClass = Parse.Collection.extend({
    model: TaskClass
  });

  var tasks = new TaskCollectionClass()

  tasks.fetch({
    success: function(collection) {
      collection.each(function(note){
        addToSideBar(note)
      })
    }
  })

$('.new').click(function(){
  var task = new TaskClass();
  task.set()

})


// masons code from class

// var NoteClass = Parse.Object.extend("Note");
 
// var NoteCollectionClass = Parse.Collection.extend({
//   model: NoteClass
// });
 
// // create an instance of the collection
// var notes = new NoteCollectionClass()
 
// notes.fetch({
//   success: function(collection) {
//     collection.each(function(note){
//       addToSideBar(note)
//     })
//   }
// })
 
// $('.save').click(function(){
//   var note = new NoteClass();
//   note.set('title', $('#title').val());
//   note.set('content', $('#content').val());
 
//   note.save(null, {
//     success: function(result){
//       addToSideBar(result)
//     },
//     error: function(result, error){
//       alert("DAMMIT, "+ error.description)
//     }
//   })
// })
 
// // functions 
 
// function addToSideBar(note) {
//   var li = $('<li>'+note.get('title')+'</li>')
//   $('.notes').append(li)
//   li.click(function(){
//     renderNote(note)
//   })
// }
 
// function renderNote(note) {
//   $('#title').val( note.get('title') )
//   $('#content').val( note.get('content') )
// }
// end of masons code from class










// // // A complex subclass of Parse.Object
// // var Monster = Parse.Object.extend("Monster", {
// //   // Instance methods
// //   hasSuperHumanStrength: function() {
// //     return this.get("strength") > 18;
// //   }
// // }, {
// //   // Class methods
// //   spawn: function(strength) {
// //     var monster = new Monster();
// //     monster.set("strength", strength);
// //     return monster;
// //   }
// // });
 
// // var monster = Monster.spawn(200);
// // alert(monster.get('strength'));  // Displays 200.


// // var Route = Parse.object.extend('Route', {
// //     // instance method
// //     calculateDifficulty: function() {
// //       return this.get('distance') + this.get('height')
// //     }
// //   },

// //   {
// //     // class method
// //     creatFromForm: function(){
// //       var distanceVal = $('input.distance').val()

// //       route = new Route
// //       route.set('distance', distanceVal)

// //       return route  
// //     }
// //   }
// // })


// // // TestObject is a constructor
// // var TestObject = Parse.Object.extend("GarbageTruck");
// // var testObject = new TestObject();

// // var coolObject = {
// //   foo: "Hey Mason you rule!",
// //   hungry: true,
// //   beer: "pleasure"
// // }

// // testObject.save(coolObject, {
// //   success: function(object) {
// //     alert("yay! it worked");
// //   }
// // });

// // var GameScore = Parse.Object.extend("GameScore");
// // var score = new GameScore();
 
// // score.save({
// //   score: 1337,
// //   playerName: "Sean Plott",
// //   cheatMode: false
// // }, {
// //   success: function(score) {
// //     // The object was saved successfully.
// //   },
// //   error: function(score, error) {
// //     // The save failed.
// //     // error is a Parse.Error with an error code and description.
// //   }
// // });

// // var GameScore = Parse.Object.extend("GameScore");
// // var score = new GameScore();
 
// // score.set("score", 1337);
// // score.set("playerName", "Sean Plott");
// // score.set("cheatMode", false);
 
// // score.save(null, {
// //   success: function(score) {
// //     // Execute any logic that should take place after the object is saved.
// //     alert('New object created with objectId: ' + score.id);
// //   },
// //   error: function(score, error) {
// //     // Execute any logic that should take place if the save fails.
// //     // error is a Parse.Error with an error code and description.
// //     alert('Failed to create new object, with error code: ' + error.description);
// //   }
// // });

// var TestObjectClass = Parse.Object.extend("TestObject");

// // A Collection containing all instances of TestObject.
// var TestCollectionClass = Parse.Collection.extend({
//   model: TestObjectClass
// });

// var collection = new TestCollectionClass();

// collection.fetch({
//   success: function(collection) {
//     collection.each(function(object) {
      
//       var thing = $('<div>'+object.get('foo')+', status: '+ object.get('done')+ '</div>')
      
//       thing.click(function(){
//         object.set('done', true)
//         object.save()
//       })

//       $('.jumbotron').append(thing)  

//     });
//   },
//   error: function(collection, error) {
//     // The collection could not be retrieved.
//   }
// });

// // hw: to-do app 
// // have some sort of to do object and collection of to do objects. be able to fill in the name of the to do and hit add and it be saved 
// // to server. edit button, mark as done or unmark as done, and delete it.
// // create a new yeoman project. use bootstrap. write tests for this. cover anything you think you can test. 