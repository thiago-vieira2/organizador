const os = require('os')
const fs = require("fs");
const path = require('path');

const pastaMain = path.join(os.homedir(), "Downloads")
const regra = require("./config.json")


fs.readdir(pastaMain, (err, arquivos) => { // readdir para ler o sistema 
    if (err) {
        console.log("Erro" + err);
        return;
    }

    console.log("Arquivos da pasta downloads");
    arquivos.forEach(arquivos => {
        let ext = path.extname(arquivos).toLowerCase();



        if (regra[ext] ){
            const pastaDestino = path.join(pastaMain, regra[ext])
            if (!fs.existsSync(pastaDestino)) {
                fs.mkdirSync(pastaDestino)
            }

            const origem = path.join(pastaMain, arquivos)
            const destino = path.join (pastaDestino, arquivos)

            fs.rename (origem, destino, (err) => {
                if (err) {
                    console.log(err);
                    
                    return; 
                }

                else {
                    console.log(`Arquivo movido ${arquivos} movido para ${regra[ext]}`);

                    
                }
            })
        }
        else {
            console.log("nao funfou");
            
        }
         
    })
    
})
