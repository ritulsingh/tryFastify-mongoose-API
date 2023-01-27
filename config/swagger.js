const swaggerConfig = () => {
    const swagger = {
        exposeRoute: true,
        swagger: {
            info: {
                title: "Fastify-Mongoose-Api Documentation",
                description: "Implementing the concept of fastify-mongoose-api plugin",
                version: "2.1.0"
            },
            tags: [
                {
                    name: 'items',
                    description: 'Operations related to items'
                }
            ],
            externalDocs: {
                url: 'https://swagger.io',
                description: 'Find more info here'
            },
            schemes: ["http", "https"],
            consumes: ["application/json"],
            produces: ["application/json"]
        }
    }
    return swagger
}

module.exports = swaggerConfig