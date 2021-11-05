import { Destination } from '../models/destination.js'
import { Flight } from '../models/flight.js'

function newDestination(req, res) {
  Destination.find({}, function (err, destinations) {
    res.render('destinations/new', {
      title: 'Add Destination',
      destinations,
    })
  })
}


function create(req, res) {
  console.log(req.body)
  Destination.create(req.body, function (err, destination) {
    if (err) {
      console.log(err)
      res.redirect('/destinations/new') 
    }
    else {
      res.redirect('/destinations/new')
    }
  })
}



  
  




export {
  newDestination as new,
  create,
}