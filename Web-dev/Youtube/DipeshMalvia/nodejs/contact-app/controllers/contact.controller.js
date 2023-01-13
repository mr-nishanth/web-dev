/**
 * @description Get all contact
 * @route GET /api/contacts
 * @access public
 */
exports.getAllContact = (req, res) => {
  res.json({ message: "Get All Contact" });
};

/**
 * @description Get single contact
 * @route GET /api/contacts/:id
 * @access public
 */
exports.getSingleContact = (req, res) => {};

/**
 * @description Create a contact
 * @route POST /api/contacts
 * @access public
 */
exports.createContact = (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }
  console.log({ name, email, phone });
};

/**
 * @description Update a contact
 * @route PUT /api/contacts:id
 * @access public
 */
exports.updateContact = (req, res) => {};

/**
 * @description Delete a contact
 * @route DELETE /api/contacts:id
 * @access public
 */
exports.deleteContact = (req, res) => {};
