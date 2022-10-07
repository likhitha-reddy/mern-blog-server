const express = require("express");
const {
  adminRegisterCtrl,
  loginAdminCtrl,
} = require("../../controllers/admin/adminCtrl");
const adminRoutes = express.Router();
adminRoutes.post("/register", adminRegisterCtrl);
adminRoutes.post("/login", loginAdminCtrl);


module.exports = adminRoutes;
