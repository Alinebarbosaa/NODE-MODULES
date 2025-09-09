const express = require("express")

const app = express()

app.get('/usuarios', function (request, response) {

    response.send(Aline);
    

})

app.listen(3000, () => {
    console.log("Meu servidor ta rodando UHUUUU")
})