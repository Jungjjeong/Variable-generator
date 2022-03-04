import { Router } from "express";
import VariableController from "../Variables/controller";

const router = Router();

router.post("/", VariableController.getVariableName);

module.exports = router;