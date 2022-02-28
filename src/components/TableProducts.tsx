
type User ={
    usernamme: string,
    nombreproducto: string,
    precio:string,
  
  }
type ArryProducts={
    arrayProducts:User[];
}
const TableProducts = (arg:ArryProducts) => {
    return (
        <div>

            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Nombre de usuario</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {arg.arrayProducts.map(p => (
                    <tr key={p.nombreproducto}>  
                        <td>{p.usernamme}</td>
                        <td>{p.nombreproducto}</td>
                        <td>{p.precio}</td>
                        <td>
                            <button className="btn btn-warning">Descargar</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    );
};

export default TableProducts;
