const asyncHandler = require("express-async-handler");
const Contact = require("../models/contact.model");
/**
 * @description Get all contact
 * @route GET /api/contacts
 * @access private
 */
exports.getAllContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id }).lean();
  return res.status(200).json({ contacts });
});

/**
 * @description Get single contact
 * @route GET /api/contacts/:id
 * @access private
 */
exports.getSingleContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id).lean();
  if (!contact) {
    res.status(404);
    throw new Error(`No contact found`);
  }
  return res.status(200).json({ contact });
});

/**
 * @description Create a contact
 * @route POST /api/contacts
 * @access private
 */
exports.createContact = asyncHandler(async (req, res) => {
  const { name, email, mobile } = req.body;
  if (!name || !email || !mobile) {
    res.status(400);
    throw new Error("All fields are required");
  }
  console.log({ name, email, mobile });

  const newContact = await Contact.create({
    name,
    email,
    mobile,
    user_id: req.user.id,
  });
  console.log(newContact);
  res.status(201).json({ newContact });
});

/**
 * @description Update a contact
 * @route PUT /api/contacts:id
 * @access private
 */
exports.updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id).lean();
  if (!contact) {
    res.status(404);
    throw new Error(`No contact found`);
  }

  // Check if the contact is belonging to the current user
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(`Forbidden`);
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json({ updatedContact });
});

/**
 * @description Delete a contact
 * @route DELETE /api/contacts:id
 * @access private
 */
exports.deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id).lean();
  if (!contact) {
    res.status(404);
    throw new Error(`No contact found`);
  }
  // Check if the contact is belonging to the current user
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(`Forbidden`);
  }
  await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json({ contact });
});
