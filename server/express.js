const express = require("express");
const router =require("./routes/client.route");
const productRouter = require("./routes/product.route.js");

const app = express();

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const PORT = 3000;
host = "127.0.0.1";
require("./models/main.js")

app.use(express.json());

app.get("/", (req, res) => {
  response.send("hello word");
});
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sana Api',
      description: "API endpoints for a mini blog services documented on swagger",
      contact: {
        name: "Amri Sana",
        email: "arfaoui.sana2017@hotmail.com",
        url: "https://github.com/DesmondSanctity/node-js-swagger"
      },
      version: '1.0.0',
    },
    servers: [
      {
        url: "http://localhost:3000/",
        description: "Local server"
      },
      {
        url: "<your live url here>",
        description: "Live server"
      },
    ]
  },
  // looks for configuration in specified directories
  apis: ["./routes/*.js"],
};
const specs = swaggerJsdoc(options);
app.use(
  "/api",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.use("/clients", router)
app.use("/products", productRouter)



app.listen(PORT, () => {
  console.log(`Test app listening at http://localhost:${PORT}`);
});
