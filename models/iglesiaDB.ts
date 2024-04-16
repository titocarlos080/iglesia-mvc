import mysql, { Connection } from 'mysql2';

class ConectorDB {
    private static cn: Connection;
    private static host: string = 'localhost';
    private static port: number = 3306;
    private static user: string = 'root';
    private static password: string = '';
    private static database: string = 'iglesia';

    // Conexión se establece automáticamente cuando se importa el módulo
    static {
        this.cn = mysql.createConnection({
            host: this.host,
            port: this.port,
            user: this.user,
            password: this.password,
            database: this.database
        });

        this.cn.connect((err) => {
            if (err) {
                console.error('Error al conectar a la base de datos:', err);
                return;
            }
            console.log('Conexión a la base de datos MySQL establecida');
        });
    }

    public static getConexion(): Connection {
        if (!this.cn) {
            console.error('No hay conexión establecida.');
        
        }

        return this.cn;
    }
}

export default ConectorDB; 
