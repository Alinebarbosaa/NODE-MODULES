const express = require('express')
const { useSyncExternalStore } = require('react')

const app = express()
app.use(express.json())


// - Query params => meusite.com/users?nome=aline&age=39 // FILTROS 
//- Route params => /users/2    BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
// - Request Body => {"name":"Aline", "age":39 } 

// VERBOS HTTP

//-GET => Buscar informação no back-end / Listar uma informaçao
//-POST => Criar informação no back-end
//-PUT / PATCH => Alteração/Atualização informação no back-end
//-DELETE => Deletar informação no back-end

//JSON => JAVASCRIPT OBJECT NOTATION

                    
const user = [
    {
    name: 'Aline',
    age: 39
 },
]

app.get('/usuarios/', function (request, response) {
    response.json(user)
})

app.post('/usuarios/id:', function (request, response) {
    console.log(request.body)

    const newUser = request.body

    user.push(newUser)

    response.status(201).json(newUser)

})

app.delete('/usuarios/id:', function (request, response) {
    console.log(request.params.id)
    const id = request.params.id

    user.splice(id, 1)

    response.send("usuario deletado com sucesso!")

})   

app.listen(3001, () => {
    console.log('Meu servidor ta rodando UHUUUU')
})