// src/components/ListaProductos.jsx
function ListaProductos() {
  const productos = [
    { id: 1, nombre: "Laptop", precio: 1200.5, disponible: true },
    { id: 2, nombre: "Mouse", precio: 25.99, disponible: true },
    { id: 3, nombre: "Teclado", precio: 45.0, disponible: false },
    { id: 4, nombre: "Monitor", precio: 320.75, disponible: true },
    { id: 5, nombre: "Auriculares", precio: 80.0, disponible: false },
  ];

  return (
    <div>
      <h3>Lista de Productos</h3>
      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>${producto.precio.toFixed(2)}</td>
              <td style={{ color: producto.disponible ? "green" : "red" }}>
                {producto.disponible ? "Disponible" : "Agotado"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProductos;