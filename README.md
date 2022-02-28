# Como ejecuto el programa
- clonas el proyecto,
- Abres una terminal y escribes npm run start

##  El ejercicio número 1 se le pide:
Realice una aplicación básica en React que cumpla con el siguiente proceso básico de
facturación:
1. Solicite un nombre de usuario
2. Se pueda agregar unos productos (simular consumo de api)
3. Se pueda guardar (simular consumo de api y guardar en archivo plano)
4. Adicional no excluyente: Realizar las pruebas funcionales y e2e de la aplicación

## Funcionamiento:
index.js:
Creo un type llamado user que pide :**usernamme: string, nombreproducto: string, precio: string**

Luego declaró un useState de tipo **User Array**

Llamo a la libreria formik si se lo paso al** useState**

Se lo paso al componente table que recibe el argumento de tipo User Array y lo itera para mostrarlo
