import pg from 'pg'
const { Client } = pg

console.log("Hello world!")
const client = new Client({
    user: "myuser",
    password: "mypassword",
    host: "192.168.0.105",
    database: "mydb",
})
await client.connect()

const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end()