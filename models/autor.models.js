const obtenerAutores = () => {
  return db.query("SELECT * FROM autores");
};

const postAutor = (id) => {
  return db.query("SELECT * FROM posts WHERE id_autor = ?", [id]);
};

const crearAutor = ({ nombre, correo, imagen }) => {
  return db.query(
    "INSERT INTO autores (nombre, correo, imagen) VALUES (?,?,?)",
    [nombre, correo, imagen]
  );
};

module.exports = {
  obtenerAutores,
  postAutor,
  crearAutor,
};
