const createFileSync = () => {
    fs.mkdirSync('C:\Users\Fausto\Desktop\Estartando_Devs\vscode\JS') // ver respositorio 
    for (var i = 1; i < 6; i++) {
        try {
        fs.writeFileSync('C:\Users\Fausto\Desktop\Estartando_Devs\tarefaDevsWriteFile'.txt, dataASync);
        } catch (err) {
             {err} 
        }
    }
}

console.log(createFileSync);