const express = require('express')

const app = express()

// - Query params => meusite.com/users?nome=aline&age=39 // FILTROS 
//- Route params => /users/2    BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
// - Request Body => {"name":"Aline", "age":39 } 

// VERBOS HTTP

//-GET => Buscar informação no back-end
//-POST => Criar informação no back-end
//-PUT / PATCH => Alteração/Atualização informação no back-end
//-DELETE => Deletar informação no back-end

app.get('/usuarios/:id', function (request, response) {
    console.log(request)


    response.send('Batata com Abacate')

})

app.listen(3001, () => {
    console.log('Meu servidor ta rodando UHUUUU')
})