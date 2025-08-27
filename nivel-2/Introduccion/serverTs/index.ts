import * as net from 'net';

function main() {
        const server = net.createServer((c) => {
            // conection listener
            console.log('Client connected');
            c.on('end',() =>{
                console.log(['Client disconnected']);
            });
            c.write('hola desde el servidor');
          });

        server.on('error',(err) => {
        console.log('error: ',err.message);
        });

        server.listen(3000,() => {
            console.log('Server listening on port 3000');
        });

    };

    main();