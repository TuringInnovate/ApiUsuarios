const db = require('../db')

module.exports = {
    buscarTodos:() =>{
        return new Promise((aceito, rejeitado) =>{

            db.query('SELECT * FROM usuarios', (error, results) =>{

                if(error) {rejeitado(error); return;}
                aceito(results)
            })
        }
        )
    },

    buscarUm:(id_usu) =>{
        return new Promise((aceito, rejeitado) =>{

            db.query('SELECT * FROM usuarios WHERE id_usu = ?', [id_usu], (error, results) =>{

                if(error) {rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0])
                }else{
                    aceito(false)
                }
                
            })
        })
    },

    inserir:(nome, email, senha) =>{
        return new Promise((aceito, rejeitado) =>{

            db.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], (error, results) =>{

                if(error) {rejeitado(error); return;}
                aceito(results.insertCodigo)
                
            })
        })
    },

    alterar:(id_usu, nome, email, senha) =>{
        return new Promise((aceito, rejeitado) =>{

            db.query('UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id_usu = ?', [nome, email, senha, id_usu], (error, results) =>{

                if(error) {rejeitado(error); return;}
                aceito(results)
                
            })
        })
    },

    excluir:(id_usu) =>{
        return new Promise((aceito, rejeitado) =>{

            db.query('DELETE FROM usuarios WHERE id_usu = ?', [id_usu], (error, results) =>{

                if(error) {rejeitado(error); return;}
                aceito(results)
            })
        }
        )
    }
}