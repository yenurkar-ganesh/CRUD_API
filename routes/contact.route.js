const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getSpecificContact,
  updateContact,
  deleteContact,
} = require("../controllers/contact.controller.js");

// GET
router.route("/").get(getContacts);

// POST || CREATE
router.route("/").post(createContact);

// GET INDIVIDUAL CONTACT
router.route("/:id").get(getSpecificContact);

// PUT || UPDATE INDIVIDUAL CONTACT
router.route("/:id").put(updateContact);

// delete INDIVIDUAL CONTACT
router.route("/:id").delete(deleteContact);

module.exports = router;
