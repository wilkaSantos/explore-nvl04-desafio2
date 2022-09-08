let option;
let listStudents = [];

function registration(name, firstNote, secondNote){

    let student = {
        name: name,
        noteOne: firstNote,
        noteTwo: secondNote
    };

    listStudents.push(student);
}

function calculation(firstValue, secondValue){
    return (firstValue + secondValue) / 2;
}


while (option != 3) {

    option = Number(prompt(`Bem Vindo ao Concurso+!
    O que você gostaria de fazer:
    1 - Fazer seu cadastro;
    2 - Verificar o resultado do concurso;
    3 - Sair do sistema;    
    `));

    switch (option) {
        case 1:
            const nameStudent = prompt(`Digite seu nome?`);
            const firstNote = Number(prompt(`Digite sua primeira nota?`));
            const secondNote = Number(prompt(`Digite sua segunda nota?`));
            registration(nameStudent, firstNote, secondNote);
            break;
        case 2:

            if (listStudents == "") {
                alert(`O resultado ainda não foi liberado. Favor, voltar mais tarde!`);
            } else {

                for (let cont = 0; cont <= listStudents.length; cont++) {
                    let media = calculation(listStudents[cont].noteOne, listStudents[cont].noteTwo);

                    if(media >= 7){
                        alert(`A média do(a) Aluno(a) ${listStudents[cont].name} foi: ${media}. Parabéns, ${listStudents[cont].name}! Você foi aprovado(a) no concurso!`);
                    }else{
                        alert(`A média do(a) Aluno(a) ${listStudents[cont].name} foi: ${media}. Não foi dessa vez, ${listStudents[cont].name}! Tente novamente!`);
                    }
                }
            }
            break;
        case 3:
            alert(`Saindo do sistema.`);
            break;    
        default:
            alert(`Opção inválida! Tente novamente.`);
            break;
    }
}

