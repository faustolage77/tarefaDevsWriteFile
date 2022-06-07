var fs5 = require('fs');

fs5.writeFile('tarefaDevs.arquivo5.txt', 'Entregando uma tarefa para o Devs!', function(err){
    if(err){
        return console.log(err);
    }
    console.log('Arquivo5 criado! e upado no github');
});



