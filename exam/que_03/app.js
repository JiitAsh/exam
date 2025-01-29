const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/form", (req, res) => {
  res.send(`
        <form action="/submit" method="post">
            <label for="customerID">Customer ID:</label>
            <input type="text" id="customerID" name="customerID" required><br><br>
            <label for="customerName">Customer Name:</label>
            <input type="text" id="customerName" name="customerName" required><br><br>
            <label for="phoneNo">Phone No:</label>
            <input type="text" id="phoneNo" name="phoneNo" pattern="\\d{10}" required><br><br>
            <input type="submit" value="Submit">
        </form>
    `);
});

app.post("/submit", (req, res) => {
  const { customerID, customerName, phoneNo } = req.body;
  console.log(`Customer ID: ${customerID}`);
  console.log(`Customer Name: ${customerName}`);
  console.log(`Phone No: ${phoneNo}`);
  res.send("Form submitted successfully!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/form`);
});
