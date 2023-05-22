const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const [result] = await obtenerAutores();
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.get("/:idAuthor", async (req, res) => {
  try {
    const [result] = await postAutor(req.params.idAuthor);
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const [result] = await crearAutor(req.body);
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = router;
