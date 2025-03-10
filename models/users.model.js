const db = require('../util/database');
module.exports = class Usuario {
    constructor(mi_username, mi_password) {
        this.username = mi_username;
        this.password = mi_password;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO usuarios(username, password) VALUES (?, ?)', 
            [this.username, this.password]
            );
    }
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM usuarios');
    }
    static fetchOne(id) {
        return db.execute('SELECT * FROM usuarios WHERE username = ?', [username]);
    }
    static fetch(username) {
        if (username) {
            return this.fetchOne(username);
        } else {
            return this.fetchAll();
        }
    }
}