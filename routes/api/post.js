const { obtenerAll, crearPost } = require("../../models/post.models");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const [result] = await obtenerAll();
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const [result] = await crearPost(req.body);
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = router;
