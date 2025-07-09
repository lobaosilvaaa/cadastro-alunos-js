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

// Exibir todos os alunos e médias
function mostrarAlunos() {
    if (alunos.length === 0) {
        document.getElementById("output").innerText = "Nenhum aluno cadastrado.";
        return;
    }

    let resultado = "📋 Lista de Alunos:\n\n";

    alunos.forEach(aluno => {
        const media = calcularMedia(aluno.notas);
        resultado += `👤 ${aluno.nome} | Notas: [${aluno.notas.join(", ")}] | Média: ${media.toFixed(2)}\n`;
    });

    document.getElementById("output").innerText = resultado;
}

// Exibir apenas aprovados (média >= 7)
function mostrarAprovados() {
    const aprovados = alunos.filter(aluno => calcularMedia(aluno.notas) >= 7);

    if (aprovados.length === 0) {
        document.getElementById("output").innerText = "Nenhum aluno aprovado.";
        return;
    }

    let resultado = "✅ Alunos Aprovados:\n\n";

    aprovados.forEach(aluno => {
        const media = calcularMedia(aluno.notas);
        resultado += `🎓 ${aluno.nome} | Média: ${media.toFixed(2)}\n`;
    });

    document.getElementById("output").innerText = resultado;
}

// Limpar os dados do sistema
function limparSistema() {
    if (confirm("Deseja realmente apagar todos os dados?")) {
        alunos.length = 0;
        document.getElementById("output").innerText = "";
        alert("Sistema limpo com sucesso!");
    }
}

// Função utilitária para calcular média
function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}
