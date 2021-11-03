import { Flight } from "../models/flight.js"



function newFlight (req, res) {
  res.render("flights/new", {title: "New Flights"})

}


function create (req, res){
  const flight = new Flight(req.body)
  flight.save(function(err) {
		if (err) {
      return res.redirect('/flights/new')
    }
    res.redirect(`/flights/${flight._id}`)
    console.log(req.body)
  })
}


function index (req, res) {
  Flight.find({}, function(error, flights) {
    res.render("flights/index", {
      flights, 
      title: "All Flights"
    }) 
  })
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('flights/show', { 
      title: 'Flight Detail', 
      flight,
    })
  })
}


// function show(req, res) {
//   Flight.findById(req.params.id)
//   .populate('destinations')
//   .exec(function(err, flight) {
//     Destination.find({_id: {$nin: flight.destinations}}, function(err, destinations) {
//       console.log(flight)
//       res.render('flights/show', {
//         flight,
//         title: 'Flight Details',
//         destinations
//       })
//     })
//   })
// }



// function show(req, res) {
//   Flight.findById(req.params.id, 
//     .populate('destination').exec(function (err, flight) {
//     Destination.find({_id: {$nin: flight.destination}}, function(error, destinations) {  
//     res.render('flights/show', { 
//       title: 'Flight Details', 
//       flight,
//     })
//   })
// }


function createTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) 
    {
      res.redirect(`/flights/${flight._id}`)
    })
    console.log(err)
  })
}

export {
  newFlight as new,
  create,
  index,
  show,
  createTicket,
}