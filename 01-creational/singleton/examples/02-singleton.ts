/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 */

import { COLORS } from '../../../helpers/colors.ts';

class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connected: boolean = false;

  // Constructor privado para evitar instancias directas
  private constructor() {}

  // Método estático para obtener la instancia única
  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
      console.log("%cLa base de datos fue creada", COLORS.yellow);
    } 
    return DatabaseConnection.instance;
  }

  // Método para conectar a la base de datos
  public connect(): void {
    // Completar: si no está conectado, mostrar mensaje de conexión
    if (DatabaseConnection.instance.connected) {
      console.log("%cLa base de datos ya está conectada", COLORS.green);
      return;
    }
    console.log("%cConectando a la Base de Datos", COLORS.yellow);
    DatabaseConnection.instance.connected = true;
    console.log("%cLa base de datos fue conectada", COLORS.green);
  }

  // Método para desconectar de la base de datos
  public disconnect(): void {
    if (DatabaseConnection.instance.connected) {
      console.log("%cDesconectando de la base de datos", COLORS.blue);
      DatabaseConnection.instance.connected = false;
      console.log("Base de datos desconectada");
      return;
    }

    console.log("%cLa base de datos ya estaba desconectada", COLORS.blue);
  }
}

// Pruebas
function main() {
  const db1 = DatabaseConnection.getInstance();
  db1.connect(); // Debería conectar a la base de datos

  const db2 = DatabaseConnection.getInstance();
  db2.connect(); // Debería mostrar que ya existe una conexión activa

  console.log('Son iguales:', db1 === db2); // Debería mostrar true

  db1.disconnect(); // Debería cerrar la conexión

  db2.connect(); // Ahora debería conectar de nuevo, ya que se cerró la anterior
}

main();