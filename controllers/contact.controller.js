// IMPORT
const asyncHandler = require("express-async-handler");
const contactModel = require("../models/contact.model.js");

// GET ALL CONTACTS
// ROUTE GET api/contacts
const getContacts = asyncHandler(async (req, res) => {
  const findContact = await contactModel.find();
  res.status(200).json(findContact);
});

// POST ||CREATE NEW CONTACT
// ROUTE GET api/contacts
const createContact = asyncHandler(async (req, res) => {
  // console.log(`Request body :: ${req.body}`);

  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    throw new Error("All Fields are mandatory");
    res.status(400);
  }
  const createContact = await contactModel.create({
    name,
    email,
    phone,
  });
  res.status(201).json(createContact);
});

// GET Specific CONTACTS
// ROUTE GET api/contacts:id
const getSpecificContact = asyncHandler(async (req, res) => {
  const findContact = await contactModel.findById(req.params.id);

  if (!findContact) {
    throw new Error("😵‍💫Contact Not Found!!");
  }
  res.status(200).json(findContact);
});

// PUT || UPDATE INDIVIDUAL CONTACT
// ROUTE GET api/contacts:id
const updateContact = asyncHandler(async (req, res) => {
  const findContact = await contactModel.findById(req.params.id);

  if (!findContact) {
    throw new Error("😵‍💫 Contact Not Found!!");
  }

  const updateContact = await contactModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updateContact);
});

// Delete INDIVIDUAL CONTACT
// ROUTE GET api/contacts:id
const deleteContact = asyncHandler(async (req, res) => {
  const findContact = await contactModel.findById(req.params.id);

  if (!findContact) {
    throw new Error("😵‍💫 Contact Not Found!!");
  }
  await contactModel.findOneAndDelete({ _id: req.params.id });
  res.status(200).json(findContact);
});

module.exports = {
  getContacts,
  createContact,
  getSpecificContact,
  updateContact,
  deleteContact,
};
