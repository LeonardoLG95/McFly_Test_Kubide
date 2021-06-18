import { Injectable } from '@nestjs/common';

const mysql = require('mysql2/promise');
const connection = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "notes"
}

@Injectable()
export class AppService {
    async insertNote(note: string) {
        const con = await mysql.createConnection(connection);
        await con.execute("INSERT INTO notes (note) VALUES (?)", [note]);
        con.end();
    }

    async fetchAllNotes() {
        const con = await mysql.createConnection(connection);
        const [rows, fields] = await con.execute("SELECT * FROM notes");
        con.end();
        return rows;
    }

    async fetchFavourites() {
        const con = await mysql.createConnection(connection);
        const [rows, fields] = await con.execute("SELECT * FROM notes WHERE isFavourite=(?)", [true]);
        con.end();
        return rows;
    }

    async fetchSingleNote(id: number) {
        const con = await mysql.createConnection(connection);
        const [row, fields] = await con.execute("SELECT * FROM notes WHERE id=(?)", [id]);
        con.end();
        return row;
    }

    async markFavourite(id: number) {
        let favourite = true;
        const con = await mysql.createConnection(connection);
        const [row, fields] = await con.execute("SELECT * FROM notes WHERE id=(?)", [id]);
        if (row.isFavourite) favourite = false;
        await con.execute("UPDATE notes set isFavourite=(?) WHERE id=(?)", [favourite, id]);
        con.end();
    }
}
