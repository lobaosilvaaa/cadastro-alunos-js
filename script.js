const alunos = [];

// Função para adicionar aluno
function adicionarAluno() {
    const nome = document.getElementById("nome").value.trim();
    const nota = parseFloat(document.getElementById("nota").value);

    if (!nome || isNaN(nota)) {
        alert("Preencha corretamente o nome e a nota.");
        return;
    }

    // Verifica se aluno já existe
    const alunoExistente = alunos.find(aluno => aluno.nome.toLowerCase() === nome.toLowerCase());

    if (alunoExistente) {
        alunoExistente.notas.push(nota);
    } else {
        alunos.push({ nome, notas: [nota] });
    }

    document.getElementById("nome").value = "";
    document.getElementById("nota").value = "";
    alert("Aluno cadastrado com sucesso!");
}