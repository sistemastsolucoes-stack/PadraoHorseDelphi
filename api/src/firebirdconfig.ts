import Firebird from 'node-firebird';

export const dbOptions = {
    host: '127.0.0.1',
    port: 3050,
    database: 'C:/TS/fb/TSFB.FDB',
    user: 'SYSDBA',
    password: 'masterkey',
    lowercase_keys: false, // Define se os nomes das colunas virão em minúsculo
    role: null,            
    pageSize: 4096,
    //library: 'C:/TS/WEB/ConexaoFirebird/api/fbclient.dll' // Caminho completo para a DLL 4.0        
};

// Função auxiliar para executar queries
export const query = (sql: string, params: any[] = []): Promise<any> => {
    return new Promise((resolve, reject) => {
        Firebird.attach(dbOptions, (err, db) => {
            if (err) return reject(err);

            db.query(sql, params, (err, result) => {
                db.detach(); // Importante: sempre liberar a conexão
                if (err) return reject(err);
                resolve(result);
            });
        });
    });
};