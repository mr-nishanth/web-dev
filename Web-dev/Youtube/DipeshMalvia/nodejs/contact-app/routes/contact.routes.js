// https://expressjs.com/en/guide/routing.html
// https://expressjs.com/en/5x/api.html
const {
  getAllContact,
  createContact,
  getSingleContact,
  updateContact,
  deleteContact,
} = require("../controllers/contact.controller");
const validateToken = require("../middlewares/verifyToken");

const router = require("express").Router();

// Lets make all the routes as private
router.use(validateToken);
router.route("/contacts").get(getAllContact).post(createContact);
router
  .route("/contacts/:id")
  .get(getSingleContact)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
