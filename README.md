# Prueba de backend

La prueba consiste en arreglar el proyecto, tomando decisiones de instalar paquetes, refactorizar código, reestructurar el proyecto, etc.

Ten en cuenta que esta aplicación puede crecer, debe tener una manera organizada y clara de poder agregar más endpoints y poder separar responsabilidades.

El puerto donde corre la aplicación puede cambiar dependiendo el ambiente. Pero no podemos estar cambiando el código fuente por cada despliegue o servidor.

Puede que el puerto de la aplicación sea información sensible, así como lo sería el password para cifrar un JWT, un secret ID o secret Key de la infraestructura de AWS, etc. ¿Cúal es la mejor manera de manejar esta información y poder cambiarla sin tocar el código fuente?
