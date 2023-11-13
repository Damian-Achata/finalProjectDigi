# finalProjectDigi
Proyecto final para la cursada de Digitalers Telecom en Node.js

El Login esta testeado, conexion correcta a la base de datos encriptando password y verificando usuario al realizar login + desencriptado de password.
Luego reenvia a index saludando al usuario o reenvia a 404 explicando el error ocurrido.

Sumado a esto se utilizo jwt(jsonwebtoken) para generar un token de seguridad y su vez verificar roles de administrador y usuario.

Funciones CRUD creadas para productos con su respectivo modelo y rutas. Pero por algun motivo no me reconoce los modulos exportados. Pude solucionar el que no me los tomara, pero no funcionan los controladores en las rutas.
