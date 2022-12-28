const { getAllAvailableGolfCourse, getOneGolfCourse } = require("../controllers/guest.controller");

const guestRouter = require("express").Router();

guestRouter.get("/getAllAvailableGolfCourse", getAllAvailableGolfCourse)
guestRouter.get("/getOneGolfCourse", getOneGolfCourse)

module.exports = guestRouter