import express from "express";
import pratoController from "../controllers/pratoController.js";
const router = express.Router();
router.get("/", pratoController.getAll);
router.post("/", pratoController.create);
router.put("/:id", pratoController.update);
router.delete("/:id", pratoController.delete);
export default router;
