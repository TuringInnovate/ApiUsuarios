const UsuarioService = require('../services/UsuarioService')

module.exports = {
    buscarTodos: async (req, res) =>{
        let json = {error: '', result:[]}

        let usuarios = await UsuarioService.buscarTodos()

        for( let i in usuarios){
            json.result.push({
                id_usu: usuarios[i].id_usu,
                nome: usuarios[i].nome,
                email: usuarios[i].email,
                senha: usuarios[i].senha
            })
        }

        res.json(json)
    },

    buscarUm: async (req, res) =>{
        let json = {error: '', result:{}}

        let id_usu = req.params.id_usu

        let usuario = await UsuarioService.buscarUm(id_usu)

        if(usuario){
            json.result = usuario
        }

        res.json(json)
    },

    inserir: async (req, res) =>{
        let json = {error: '', result:{}}

        let nome = req.body.nome
        let email = req.body.email
        let senha = req.body.senha

        if(nome && email && senha){
            let UsuarioCodigo = await UsuarioService.inserir(nome, email, senha)
            json.result = {
                id_usu: UsuarioCodigo,
                nome,
                email,
                senha
            }
        }else{
            json.error = "Campos não enviados"
        }

        res.json(json)
    },

    alterar: async (req, res) =>{
        let json = {error: '', result:{}}

        let id_usu = req.params.id_usu
        let nome = req.body.nome
        let email = req.body.email
        let senha = req.body.senha

        if(id_usu && nome && email && senha){
            await UsuarioService.alterar(id_usu, nome, email, senha)
            json.result = {
                id_usu,
                nome,
                email,
                senha
            }
        }else{
            json.error = "Campos não enviados"
        }

        res.json(json)
    },

    excluir: async (req, res) =>{
        let json = {error: '', result:{}}

        await UsuarioService.excluir(req.params.id_usu)

        res.json(json)
    }
    
}