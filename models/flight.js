import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const Schema = mongoose.Schema
	
const flightSchema = new Schema({
  airline: {type: String, enum: ["American", "Southwest", "United"]},
  airport: {type: String, default: "DEN", enum: ["AUS", "DFW", "DEN", "LAX", "SAN"]},
  flightNo: {type: Number, required: true, min: 10, max: 9999}, 
  departs: {type: Date, default: function() {
    return new Date().setFullYear(new Date().getFullYear() + 1)
  }, } 
  
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight,
}
