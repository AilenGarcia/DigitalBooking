# Digital Booking

## Resumen y objetivos:
Este proyecto fue creado bajo la metodología ágil SCRUM. Se realizó una página web responsive para la reserva de alojamientos.
Desde el equipo técnico de desarrollo buscamos que reservar sea más fácil. Con este objetivo creamos Digital Booking, a través de esta aplicación conectamos a las personas con los diferentes tipos de alojamientos, para que así ellos puedan reservar su estadía en el lugar y fecha que precisen. 

## Metodología de trabajo:
Para llevar a cabo este proyecto nos basamos en la metodología ágil de trabajo SCRUM: de manera continua e incremental trabajamos en 4 sprints, cada uno de 2 semanas. Durante los mismos, valoramos mucho las ceremonias diarias, sobre todo las dailys ya que nos ayudaron a mantener un orden y siempre estar al tanto de los avances. También, facilitan la comunicación entre los departamentos y fomentan el compañerismo.
Al finalizar cada sprint se hacía una entrega del producto funcional.
Se trabajó en conjunto con una Scrum Master, un Product Owner, un cliente y Tech Leaders.

 **Las diferentes ceremonias diarias que tuvimos fueron:**
   - Lecturas de Sprint: en esta ceremonia participamos los desarrolladores junto con S.M. y P.O.,  realizando la lectura de las historias de usuario correspondientes a cada sprint.
   - Validaciones de Sprint: en esta ceremonia estimamos con una planilla las historias de usuario, en nuestro caso usamos la escala de Fibonacci. Debatimos en conjunto la complejidad y los esfuerzos necesarios para realizarlas a la hora de estimar. 
   - Dailys: en esta ceremonia contamos los avances de cada rol y departamento en las correspondientes historias de usuario, para poder estar al tanto de qué está terminado, qué falta y qué problemáticas estamos enfrentando.
   - Weeklys: en esta ceremonia, al igual que en las dailys, se comenta sobre los avances del sprint. Debido a que el tiempo de duración de esta ceremonia es mayor a la daily, se da la oportunidad de una charla más fluida para fomentar el compañerismo y estar al tanto de los avances y complicaciones del proyecto que ocurrieron durante la primera parte del sprint.
   - Reviews: en esta ceremonia hacemos la entrega del proyecto al finalizar el sprint. Se expone al P.O y la S.M el producto y se obtiene un feedback.
   - Retros: esta ceremonia es muy importante para el equipo de trabajo, ya que es una pausa para poder comprobar las habilidades blandas. Aprovechamos para debatir sobre qué nos está frenando, qué nos está motivando a avanzar y qué acciones podemos tomar para mejorar.
   - Demo: esta ceremonia es la última del proyecto donde se presenta el producto terminado al cliente, también están presentes la S.M y el P.O.

## Bitácora del proyecto:
El proyecto se desarrolló en 4 sprints, cada uno de dos semanas.
 - Sprint 1:
Durante este sprint empezamos haciendo la asignación de roles y elegimos la temática del proyecto: reserva de alojamientos. Una vez concluida esta parte, elegimos la paleta de colores y tipografías generales.
También se creó la API, se modeló el diagrama relacional, se diseñó la red de infraestructura necesaria para AWS, se desarrolló el template del home, login y registro, y también, se creó la planilla de casos de prueba manuales y los scripts de Postman.
 - Sprint 2:
Durante este Sprint tuvimos complicaciones por la cantidad de historias de usuarios y su complejidad. Para poder llevar a cabo el sprint, tuvimos que cambiar la modalidad de trabajo del anterior para poder manejar mejor los tiempos dedicados a cada tarea. En este caso, pudimos destacar el compañerismo y la buena predisposición para ayudar, ya que en algunos departamentos era muy leve el trabajo y en otros había mucha sobrecarga.
Además de los casos de prueba manuales, sumamos la automatización de casos con Selenium en el departamento de Testing. Se crearon e implementaron los pipelines de Frontend y Backend. Seguimos trabajando con el desarrollo de la API, agregando nuevos métodos, funcionamientos, validaciones y templates desde Frontend. También se empezó a consumir la API.
 - Sprint 3:
Durante este sprint seguimos trabajando de la misma manera, ya que nos estaba generando un flujo de trabajo eficaz. Para mejorar la comunicación con el departamento de Testing, a partir de este sprint implementamos los viernes de CheckList, donde por departamento, vimos el avance de cada historia de usuario para poder ser más específicos en lo que estaba listo para testear.
El departamento de Backend y Frontend trabajaron en conjunto para mejorar los filtros y los calendarios, entre otras tareas.
Se subió la información a la base de datos y se completó con las nuevas características y objetos agregados .
Por último desde el departamento de Infraestructura, se subió toda la información del proyecto de la base de datos, Backend y Frontend para tener la página cargada en la nube.
 - Sprint 4:
Durante este Sprint nos enfrentamos con varias problemáticas: algunas implementaciones quedaron obsoletas, por ejemplo, tener las políticas en una tabla aparte. Al ser menor la carga de trabajo, pudimos mejorar detalles del proyecto y realizar tests regresivos para poder asegurar que todo estuviera funcionando correctamente.

## Tecnologías utilizadas:
Los servicios y herramientas que hemos empleado para realizar este proyecto son:
 - Gestión del proyecto: GitLab, Discord, Whatsapp, Google Drive
 - Desarrollo del proyecto:
 - IDEs: Visual Studio Code, Intellij IDEA
 - Sistema de control de versiones: Git / GitLab
 - Simulación / Virtualización: AWS , Docker
 
**Tecnologías por departamento:**
 - Frontend: React, axios, React date-picker, react-spinners, fontawesome, moment, React responsive carousel, React leaflet.
 - Backend: Spring Boot, Spring Data Jpa, Spring Boot Security, SpringDoc OpenAPI, JJWt, AWS SKD, Lombok, conector MySQL
 - Base de datos: MySQL Workbench
 - Infraestructura: AWS CLI, Apache2, Java, Docker
 - Testing: Excel, Postman y Selenium

**Documentación técnica del proyecto:**
- Ambiente de desarrollo:
*“¡Bienvenido al equipo de Digital Booking!
Algunas recomendaciones para empezar a trabajar con nosotros:
Principalmente el buen ambiente de trabajo y la comunicación son primordiales para nuestro equipo. Cualquier inconveniente o consulta, no dude en contactarnos.
Contamos con una rama creada por departamento de trabajo, recuerde trabajar siempre en esa rama y no sobre main. 
Respecto a los commit, siempre al pushear sea descriptivo con lo que sube.
Prepare el ambiente de trabajo:
FrontEnd: Al clonar el proyecto lea atentamente el archivo ¨Readme¨, donde encontrará las indicaciones y dependencias a utilizar.
BackEnd: Al clonar el proyecto, utilice su IDE de preferencia. Recuerde tener funcionando MySQL Workbench. Modifique el application.properties para enlazarlo con una base de datos de pruebas.
Y con esto ya está preparado para empezar, así que…
 ¡Manos al código!”*

## Breve descripcion
La aplicación está compuesta por un template general formado por el header, el body y el footer. Cuando se entra por primera vez se visualiza el home en el body, con un bloque de búsqueda por ciudad y/o fecha, un bloque de búsqueda por categorías y otro de recomendaciones donde se renderizan las cards de los distintos tipos de alojamientos.
En el header podemos encontrar 2 botones: uno para crear una cuenta y otro para iniciar sesión. Si se crea una nueva cuenta o se inicia sesión, automáticamente la página volverá al template general con el home, pero esta vez en el header veremos nuestro usuario, una imagen de perfil, un botón de cerrar sesión y, si somos clientes, un botón llamado “Mis reservas”. En caso de que seamos administradores veremos un botón llamado “Administrador”.
Si nos logueamos con un nuevo usuario cliente, al hacer click en “Mis reservas” veremos que nos aparece un mensaje diciendo que aún no realizamos ninguna reserva, también visualizamos un botón para volver al home. Si volvemos y elegimos un hotel de las cards, podremos clickear el botón “ver detalle” que nos redirigirá el detalle del producto donde veremos toda la información del mismo: nombre, ciudad, imágenes, atributos, locación y políticas del alojamiento, haciendo scroll sobre esa ruta veremos un calendario para seleccionar fechas y un botón de “Iniciar reserva”, que al darle click, nos redirigirá a un formulario de reserva donde veremos nuestros datos personales, algunos datos del alojamiento, las fechas seleccionadas, deberemos seleccionar un horario de check in y podremos hacer click al botón “Confirmar reserva” que nos llevará a un mensaje de reserva exitosa, el cual tendrá un botón para ir al home. Una vez allí si clickeamos “Mis reservas” en el header, podremos ver la reserva que acabamos de realizar.
Si nos logueamos con un usuario administrador, la diferencia que tendremos es que en vez del botón “Mis reservas” vamos a ver el botón “Administración”, si le damos click nos va a redirigir a un formulario para la creación de alojamientos. Donde deberemos llenar los diferentes campos: nombre, categoría, ciudad, dirección, descripción de la dirección, atributos, descripción del alojamiento, normas, salud y política de cancelación, y por último veremos unos campos para colocar links de las imágenes que queremos subir, para subir una imagenes una vez que coloquemos el link tenemos que clickear el botón de agregar que se encuentra al lado del campo. Cuando terminamos de rellenar todos los campos, clickearemos el botón de agregar producto y nos redirigirá a un mensaje de creación de producto exitosa, el cual también tendrá un botón para volver al home. Podremos cerrar sesión de la misma manera que como usuario cliente.

## Demostración

Aquí tienes un enlace al video demostrativo de cómo funciona la página: https://drive.google.com/file/d/13xsg877OmyyDhfrACTM0RL83n70W2qq7/view?usp=sharing
