// https://expressjs.com/en/guide/routing.html
// https://expressjs.com/en/5x/api.html
const {
  getAllContact,
  createContact,
  getSingleContact,
  updateContact,
  deleteContact,
} = require("../controllers/contact.controller");

const router = require("express").Router();

router.route("/contacts").get(getAllContact).post(createContact);
router
  .route("/contacts/:id")
  .get(getSingleContact)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
