const obtenerAll = () => {
  return db.query(
    "SELECT p.id_post, p.titulo, p.descripcion, p.fecha_creacion, p.categoria , a.nombre as autor, a.correo, a.imagen FROM posts as p JOIN autores as a ON p.id_autor = a.id_autor"
  );
};

const crearPost = ({ titulo, descripcion, categoria, autor }) => {
  return db.query(
    "INSERT INTO posts (titulo, descripcion, categoria, id_autor) VALUES (?,?,?,?)",
    [titulo, descripcion, categoria, autor]
  );
};

module.exports = {
  obtenerAll,
  crearPost,
};
