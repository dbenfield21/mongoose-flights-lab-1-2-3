import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"
const router = Router()

//localhost:3000/flights for all of the following routes

router.get("/", flightsCtrl.index)

router.get("/new", flightsCtrl.new)

router.get("/:id", flightsCtrl.show)

router.post("/", flightsCtrl.create)

router.post("/:id/tickets", flightsCtrl.createTicket)

router.post("/:id/destinations", flightsCtrl.addDestination)

export {
  router
}
