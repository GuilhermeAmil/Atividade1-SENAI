const readline = require('readline');

const rl1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl1.question('Informe o nome da peça:', (nome) => {
    
        //Verificar se o nome da peça possui 3 caracteres

        if (nome.length >= 3) {
            console.log('Permitir Cadastro');
        } else {
            console.log('Negar cadastro, A peça deve conter no mínimo 3 caracteres');
        }

        //Verificar se a peça tem mais de 100g 

     rl1.question('Informe o peso da peça:',(peso) => {
            const peso = "";
            
            function restringirA3Caracteres(str) {
                return str.slice (0, 3);
            }
            

            if (peso>100) {
                console.log('Armazenar peça');
            } else {
                console.log('Não foi possível armazenar a peça pois a peça deve ter pelo menos 100g');
            }

        //Verificar se tem mais de 10 peças armazenadas

    
    rl1.question('Quantas peças deseja armazenar:', (armazenamento) => {
            const armazenamento = "";

            function restingirA10Peças(str) {
                return str.slice(0,10);
            }


            if (armazenamento<=10) {
                console.log('peça armazenada');
            } else {
                console.log('Capacidade de armazenamento excedida')
            }

        });
     });
});
          
        

     