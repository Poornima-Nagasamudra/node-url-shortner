const express = require("express");
const router = express.Router();
const urlShortnerCltr = require("../app/controller/urlShortnerController");

router.get("/api/url", urlShortnerCltr.list);
router.post("/api/url", urlShortnerCltr.create);
router.put("/api/url/:id", urlShortnerCltr.update);
router.delete("/api/url/:id", urlShortnerCltr.destroy);
router.get("/api/url/:hashedurl", urlShortnerCltr.newurl);
module.exports = router;
