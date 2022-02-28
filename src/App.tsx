import { useEffect, useState } from "react";
import { useFormik } from "formik";
import './styles/modal.css'
function App() {
  const generateId = () => Math.random().toString(36)
  const [products, setProducts]=useState<any[]>([]);
  const deleteProduct =(id:string)=>{
    const newProducts = products.filter(p=> p._id.$oid !==id)
    setProducts(newProducts)
  }
  const formik = useFormik({
    initialValues: {
      firstName:"",
      description:"",
      lastName:"",
      price:"",
    },
    onSubmit: (data) => {
      const newObjeto ={
        _id:{
          $oid:String(generateId())
        },
        customer:{
          firstName:data.firstName,
          lastName:data.lastName
        },
        products:[
          {description:data.description, price:data.price}
        ]


      }
      setProducts([...products, {...newObjeto}])
    },
  });
  useEffect(()=>{
    fetch("http://localhost:3004/results")
      .then(resp => resp.json())
      .then(data => setProducts(data))
  },[])
  return (
   <div style={{width:"90%", margin:"0 auto", marginTop:"20px"}}>
     {/* -------FOMRULARIO----- */}
     <h1>Añade tus productos</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" 
          className="form-control" 
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3">
          <label  className="form-label">Apellido</label>
          <input type="text" className="form-control" 
          name="lastName"
          value={formik.initialValues.lastName}
          onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3">
          <label  className="form-label">Nombre del producto</label>
          <input type="text" 
          className="form-control" 
          name="description"
          value={formik.initialValues.description}
          onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3">
          <label  className="form-label">Precio</label>
          <input type="number" 
          className="form-control" 
          name="price"
          value={formik.initialValues.price}
          onChange={formik.handleChange}
          />
        </div>
      <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
    {/* -------TABLA----- */}
    <table className="table" >
            <thead>
                <tr>
                <th scope="col">Cliente</th>
                <th scope="col">Nombre de producto</th>
                <th scope="col">Precio</th>
                <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody>
                {products !== undefined &&
                products.map(p => (
                <tr key={p._id.$oid}>  
                    <td>{p.customer.firstName} {p.customer.lastName}</td>
                    <td>{p.products[0].description}</td>
                    <td>{p.products[0].price}</td> 
                    <td style={{display:"flex", flexDirection:"column"}}>
                        <button className="btn btn-danger" onClick={()=>deleteProduct(p._id.$oid)}>Eliminar</button>
                        <button className="btn btn-warning" style={{marginTop:"10px"}}>Editar</button>
                    </td>
                </tr>
                ))}
            </tbody>
    </table> 
    </div>
  );
}

export default App;
