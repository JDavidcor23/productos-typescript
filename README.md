
# Como ejecuto el programa
- necesitas json server(global) para poder consumir la endpoint
- el documento data.json necesitas ponerle un nombre al json
[![json](https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646031863/dsehwsvqcd0qf0b1vpjy.png "json")](https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646031863/dsehwsvqcd0qf0b1vpjy.png "json")
- luego abre una línea de comandos en donde esta la data
- escribe **json-server --watch data.json --port 3004** ,luego enter
- clonas el proyecto,
- Abres una terminal y escribes npm run start

##  El ejercicio número 3 se le pide:
Con base al archivo “data.json” proporcionado que hace referencia a una base de datos de
facturas realizar interface donde se puedan realizar los siguientes procesos CRUD:
1. Mostrar en una tabla los datos
2. Filtrar los datos
3. Organizar los datos de la tabla
4. Crear un nuevo registro
5. Editar registro existente
## Funcionamiento:
Se lo paso al componente table que recibe el argumento de tipo User Array y lo itera para mostrarlo
Creo un formulario con ayuda de formik para agregar los productos
## index.js:
Llamo a la endpoint con el useEffect y se lo agrego a un **products=useState** de tipo any
funciones:
generateId: este lo que hace es generarme un id unico para poder agregar un nuevo objeto con un respectivo id
deleteProduct: me filtra todos los objetos que no sean tengan el mismo id que se le paso por parametro y se lo agrega al **products**

