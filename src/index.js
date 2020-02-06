const { server, options } = require('./prisma')

server.start(options, ({ port }) => console.log(`Server is running on http://localhost:${port}`))