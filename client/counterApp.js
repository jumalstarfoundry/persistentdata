
//Session.setDefault("numberOfClicks_sv",0);
CounterValues.insert({jumal:12, jason: 47});

Template.counterSentence.helpers({
  numberOfClicks: function() {

    //return Session.get("numberOfClicks_sv");
    return CounterValues.findOne({_id:"RqbywKsPuGqSMYbJR"}).jumal;

    }
  });

Template.counterSentence.events({
 'click button':function(){

 //  var currentNumClicks = Session.get("numberOfClicks_sv");

//   CounterValues.findOne().jumal = CounterValues.findOne().jumal + 1;

    CounterValues.update({_id:"RqbywKsPuGqSMYbJR"}, {$inc: {jumal: 2}});

   }
  }
);









