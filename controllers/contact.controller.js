const asyncHandler = require("express-async-handler");

// GET ALL CONTACTS
// ROUTE GET api/contacts
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

// POST ||CREATE NEW CONTACT
// ROUTE GET api/contacts
const createContact = asyncHandler(async (req, res) => {
  console.log(`Request body :: ${req.body}`);

  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    throw new Error("All Fields are mandatory");
    res.status(400);
  }
  res.status(201).json({ message: "Contact Created" });
});

// GET Specific CONTACTS
// ROUTE GET api/contacts:id
const getSpecificContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get Contact for , ${req.params.id}` });
});

// PUT || UPDATE INDIVIDUAL CONTACT
// ROUTE GET api/contacts:id
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Contact for , ${req.params.id}` });
});

// Delete INDIVIDUAL CONTACT
// ROUTE GET api/contacts:id
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Contact for , ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getSpecificContact,
  updateContact,
  deleteContact,
};
