import { Router } from "express";

const router = Router();

router.use("/api/variable", require("./variable"));

module.exports = router;