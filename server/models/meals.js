var mongoose = require('mongoose');

var MealsSchema = new mongoose.Schema({
  breakfast: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  breakfastDate: {
    type: String,
    unique: true,
    required: true,
    trim: true
	},
	launch: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
	launchDate: {
    type: String,
    unique: true,
    required: true,
    trim: true
	}, 
	 dinner: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  dinnerDate: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
 personsNumber:{
	 type:Number,
	 required:true,
	 trim:true
 }


  
},{ "strict": false });





var Meals = mongoose.model('Meals', MealsSchema);
module.exports = Meals;