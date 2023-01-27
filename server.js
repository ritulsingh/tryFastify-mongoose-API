require("dotenv").config();
const fastify = require("fastify")({ logger: true });
const swagger = require("./config/swagger");
// const mongooseAPI = require("./config/mongoose-api");
const fastifyMongooseAPI = require("fastify-mongoose-api")
const fastifyFormbody = require("@fastify/formbody");
const { fastifyMongoConfig } = require("./controllers/items")

const PORT = process.env.PORT || 5000;

// Swagger configuration
fastify.register(require('@fastify/swagger'), swagger);
fastify.register(require('@fastify/swagger-ui'));
fastify.register(require("./routes/items"));

// Fastify Mongoose configuration

console.log("...........Line 17 Server.js.............", fastifyMongoConfig);

fastify.register(fastifyFormbody);
fastify.register(fastifyMongooseAPI, fastifyMongoConfig);

fastify.listen(PORT, (err) => {
    if (err) {
        console.log("We Got an error in listening " + err);
        process.exit(1);
    }
});
