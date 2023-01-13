const asyncHandler = require("express-async-handler");

/**
 * @description Get all contact
 * @route GET /api/contacts
 * @access public
 */
exports.getAllContact = asyncHandler(async (req, res) => {
  res.json({ message: "Get All Contact" });
});

/**
 * @description Get single contact
 * @route GET /api/contacts/:id
 * @access public
 */
exports.getSingleContact = asyncHandler(async (req, res) => {});

/**
 * @description Create a contact
 * @route POST /api/contacts
 * @access public
 */
exports.createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }
  console.log({ name, email, phone });
});

/**
 * @description Update a contact
 * @route PUT /api/contacts:id
 * @access public
 */
exports.updateContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
});

/**
 * @description Delete a contact
 * @route DELETE /api/contacts:id
 * @access public
 */
exports.deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
});
