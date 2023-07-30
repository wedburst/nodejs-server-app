const http = require('http');

http.createServer( ( req, res ) => {
    res.writeHead(200, { 'Content-Type': 'text/plain'})
    // res.writeHead('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' });
    // aplication/json
    const persona = {
        id: 1,
        nombre: 'Fernando'
    }

    res.write( JSON.stringify( persona ) );
    res.end();
} )
.listen( 8080 );

console.log('Escuchando el puesto', 8080);