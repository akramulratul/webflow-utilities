// const express = require("express");
// const cors = require("cors");
// const axios = require("axios");
// const bodyParser = require("body-parser");

// const app = express();
// const port = 3000;

// // Middleware to parse JSON body
// app.use(bodyParser.json());

// // Enable CORS for your front-end domain
// app.use(
//   cors({
//     origin: "https://tgb-home.webflow.io", // Your front-end domain
//     methods: "POST",
//     credentials: true,
//   })
// );

// // Proxy endpoint
// app.post("/submit-form", async (req, res) => {
//   try {
//     const response = await axios.post("/contact_us", req.body, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     res.send(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error forwarding the request");
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
// Middleware to parse JSON body
app.use(bodyParser.json());
// Enable CORS for your front-end domain
app.use(
  cors({
    origin: "https://tgb-home.webflow.io", // Your front-end domain
    methods: "POST",
    credentials: true,
  })
);
// Proxy endpoint
app.post("/submit-form", async (req, res) => {
  try {
    const response = await axios.post(
      "https://theguestbook.com/contact_us",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.error("Error response data:", error.response?.data);
    res.status(500).send("Error forwarding the request");
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
