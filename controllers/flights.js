import { Flight } from "../models/flight.js"



function newFlight (req, res) {
  res.render("flights/new", {title: "New Flights"})

}


function create (req, res){
  const flight = new Flight(req.body)
  flight.save(function(err) {
		if (err) {
              console.log(err, '<<-- This is your error')
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