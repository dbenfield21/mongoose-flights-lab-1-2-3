import mongoose from 'mongoose'


const Schema = mongoose.Schema
	
const ticketSchema = new Schema({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: {type: Number, min: 0,}
}, {
  timestamps: true
})



const flightSchema = new Schema({
  destinations: [{type: Schema.Types.ObjectId, ref: "Destination"}],
  airline: {type: String, enum: ["American", "Southwest", "United"]},
  airport: {type: String, default: "DEN", enum: ["AUS", "DFW", "DEN", "LAX", "SAN"]},
  flightNo: {type: Number, required: true, min: 10, max: 9999}, 
  departs: {type: Date, default: function() {
    return new Date().setFullYear(new Date().getFullYear() + 1)
  }, },
  tickets: [ticketSchema],
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight,
}