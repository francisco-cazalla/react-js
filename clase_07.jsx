//                                  CONSUMIENDO API'S                    
/*
Mapas de conceptos :
-Paradigma de intercambio de informacion :
1-  Modelo cliente - servidor 
2-  Push
3-  Polling

-Request via https/s :
1-  URL y verb
2-  Query params
3-  Body 
4-  Headers 
5-  Fetch

//   Las mayorias de las aplicaciones suelen generar experiencias de usuario gracias a que se pueden conectar a un conjunto de servicio de datos



//                                 Modelo cliente-servidor

-- Independientemente de esto hay algo que no parece cambiar hasta el momento y son dos protagonistas :
1-   Cliente (consumidor)
2-  Servidor(proveedor)

--  Esto establece que los distintos consumidores se identifican entre ellos y acuerdan una manera de transferir la informacion

-- Como funciona :

-- El cliente solicita info , el servidor envia la respuesta , fin de la comunicacion.



//                                Push

--  Si invertimos la logica se le conoce como Push , como funciona :

cliente se suscribe , el servidor elige el momento de inicio de la transferrencia y le envia un servicio , el servicio se le provee al cliente

-- Push nace para poder generar engagement , y lograg que los usuarios recuerden que nuestra app existe, y y que puede probeerles con algo que les pueda interesar, en el momento que les paresca oportuno



//                           POLLING


-  De no utilizar Push ,deberiamos  configurar nuestro client para que estern constantemente preguntando
tienes algo nuevo para mi?




//                         Request via HTTP/S


--  Vienen para ayudarnos arealizar una solicitud al servidor y nos permiten establecer un potocolo de transferencia
definido por 
- Direccion url
--verbo(GET, POST,PUT,DELETE)
--paramaetros via query o url 
--Headers
--Body (contenido en un POST)



//                                    URL Y VERB

-- Nos permiten dfinir una manera de explicarle al servidor la direccion y nuestras intenciones :
GET:quiero obtener
POST:quiero crear
PUR:quiero crear o actualizar
PATCH:quireo alterar parcialmente 
DELATE:quiero eliminar



//                                     BODY
-- Se utiliza para transferir piezas de informacion entr el cliente y elservidor 



POST /creat-user HTTPS/1.1 

host:localhost:3000
connection : keep-alive 
content-type : application/json 
{"name": "jhon", "age": 35}




//                                  HEADERS 

se usan para:

-- Definr las respuestas soportadas , requeridas o preferidas 
-- Agregar informacion extra 
-- tokes o cookies
--  lenguaje preferido 
-- si acepta contenido cacheado
-- lo que quieras en forma de texto

*/
