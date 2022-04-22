const express = require("express")

const app = express()

app.get("/", (request, response) => {
    response.json({
            FirstName: "John",
            LastName: "Doe",
            Image: "https:post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
    })
})
app.listen(5000, () => console.log("Server running"))