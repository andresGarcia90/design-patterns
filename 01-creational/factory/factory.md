# Factory Method
También llamado: Método fábrica, Constructor Virtual.

## Propósito
Factory Method es un patrón de diseño creacional que proporciona una interfaz para crear objetos en una superclase, mientras que permite a la subclases alterar el tipo de objetos que se crearán. Es distinto a otros patrones de diseño porque no requiere explícitamente un constructor, sino que provee un interfaz genérica para crear objetos donde podemos especificar el tipo de Factory object que queremos crear.

## Problema

Imaginamos una situación donde estamos creando una aplicación de gestión logística. La primera version de tu aplicación solo se encuentra en manejar camiones. Pero después de un tiempo queremos incursionar en el transporte marítimo. En este momento, toda la logística esta en la clase Camión. Para añadir Barcos a la aplicación habría que hacer cambios dentro de la base del código.

## Solución

El patrón Factory sugiere que en lugar de llamar al operador new para construir objetos directamente, se invoque a un método fabrica especial. Los objetos se siguen creando a través del operador new, pero se invocan desde el método fábrica. Los objetos devueltos por el método fábrica a menudo se denominan productos

![alt text](image.png)

## Cuando usar el patrón 
- Cuando la configuración del objeto o componente involucra un nivel alto de complejidad.
- Cuando necesitamos una manera conveniente de agregar diferentes instancias de un objeto dependiendo de su entorno.
- Cuando estamos trabajando con muchos objetos pequeños que comparten las mismas propiedades.

## Cuando No usarlo
Aplicarlo mal puede traer una innecesaria complejidad en la aplicación.