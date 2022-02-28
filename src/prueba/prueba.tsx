import React from 'react';

const prueba = () => {
    return (
        <>
        <div style={{width:"90%", margin:"0 auto", marginTop:"20px"}}>
          <form >
            <div className="mb-3">
              <label className="form-label">Nombre de usuario</label>
              <input type="text" 
              className="form-control" 
              name="usernamme"
            //   onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label  className="form-label">Nombre del producto</label>
              <input type="text" className="form-control" 
              name="nombreproducto"
            //   onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label  className="form-label">Precio</label>
              <input type="text" 
              className="form-control" 
              name="precio"
            //   onChange={handleChange}
              />
            </div>
          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
        {/* <TableProducts produtcs={productos}/> */}
        </div>
        </>
    );
};

export default prueba;