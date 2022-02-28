import { useFormik } from "formik";
import { useState } from "react";
import TableProducts from './components/TableProducts'
type User ={
  usernamme: string,
  nombreproducto: string,
  precio:string,
}
function App() {
  const [arrayProducts,setArrayProducts] =useState<User[]>([]);
  const formik = useFormik<User>({
    initialValues: {
      usernamme: "",
      nombreproducto:"",
      precio:"",
    },
    onSubmit: (data) => {
       let usernamme = String(data.usernamme)
       let nombreproducto = String(data.nombreproducto)
       let precio = String(data.precio)
       let newProduct: User[]= [...arrayProducts, {usernamme, nombreproducto, precio}]
        setArrayProducts(newProduct)
    },
  });
  

  return (
    <>
    <div style={{width:"90%", margin:"0 auto", marginTop:"20px"}}>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre de usuario</label>
          <input type="text" 
          className="form-control" 
          name="usernamme"
          onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3">
          <label  className="form-label">Nombre del producto</label>
          <input type="text" className="form-control" 
          name="nombreproducto"
          onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3">
          <label  className="form-label">Precio</label>
          <input type="number" 
          className="form-control" 
          name="precio"
          onChange={formik.handleChange}
          />
        </div>
      <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
     <TableProducts arrayProducts={arrayProducts}/> 
    </div>
    </>
  );
}

export default App;
