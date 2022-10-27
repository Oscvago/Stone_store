import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Heello? Im auth empoint o algo asi :v")
} )

export default router