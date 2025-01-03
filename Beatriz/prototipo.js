const quizQuestions = [
    {
        question: "Qual foi o primeiro filme da Disney a ser completamente produzido com animação digital?",
        options: ["O Rei Leão", "Toy Story", "O Galinho Chicken Little", "A Fera e o Rei"],
        correctAnswer: 2
    },
    {
        question: "Qual é o nome do personagem que se transforma em um cavalo com asas no filme 'Hércules'?",
        options: ["Falkor", "Pegasus", "Zeus", "Hades"],
        correctAnswer: 1
    },
    {
        question: "Quem foi o primeiro personagem de animação da Disney a receber uma estrela na Calçada da Fama?",
        options: ["Mickey Mouse", "Pato Donald", "Pateta", "Bambi"],
        correctAnswer: 0
    },
    {
        question: "Em 'Branca de Neve e os Sete Anões', qual é o nome do anão que usa óculos?",
        options: ["Dunga", "Zé", "Mestre", "Soneca"],
        correctAnswer: 2
    },
    {
        question: "Nos filmes de Lilo e Stitch, qual é o número da experiência genética que representa o próprio Stitch?",
        options: ["522", "625", "624", "626"],
        correctAnswer: 3
    },
    {
        question: "Em 'Pinóquio', qual é o nome do homem que cria o boneco Pinóquio?",
        options: ["Giuseppe", "Geppetto", "Giovanni", "Giacomo"],
        correctAnswer: 1
    },
    {
        question: "Qual é o vilão que é um triângulo amarelo com um olho único, geralmente com um chapéu de cartola e um sorriso malicioso?",
        options: ["Bill Cipher", "Comandante Lyle Tiberius Rourke", "Scar", "John Silver"],
        correctAnswer: 0
    },
    {
        question: "Em 'O Rei Leão', qual é o nome do lugar onde Simba vive após fugir do reino?",
        options: ["Vale da Eternidade", "Caverna da Savana", "Vale dos Elefantes", "Hakuna Matata"],
        correctAnswer: 3
    },
    {
        question: "Qual foi o primeiro filme de animação a ser indicado ao Oscar de Melhor Filme?",
        options: ["Toy Story", "O Rei Leão", "A Bela e a Fera", "Up – Altas Aventuras"],
        correctAnswer: 2
    },
    {
        question: "Em 'Peter Pan', qual é o nome do capitão dos piratas?",
        options: ["Barbossa", "Capitão Gancho", "Barba Negra", "John Silver"],
        correctAnswer: 1
    },
    {
        question: "Qual foi o primeiro filme de animação da Disney a usar a técnica de multiplano?",
        options: ["Branca de Neve e os Sete Anões", "Pinóquio", "Fantasia", "O Rei Leão"],
        correctAnswer: 0
    },
    {
        question: "Em 'Atlantis - O Reino Perdido', qual é o nome da língua antiga falada pelos atlantes?",
        options: ["Atlanteano", "Kolosiano", "Zintal", "Linguagem de Gaya"],
        correctAnswer: 0
    },
    {
        question: "Em 'A Bela e a Fera', quem é o criador da rosa encantada?",
        options: ["A Feiticeira", "O Príncipe", "Maurice", "Gastón"],
        correctAnswer: 2
    },
    {
        question: "Na série animada de 'Gravity Falls', quem escreveu os diários perdidos?",
        options: ["Stanford Pines", "Soos Ramirez", "Dipper Pines", "Stanley Pines"],
        correctAnswer: 0
    },
    {
        question: "Qual é o nome do pintor que criou os cenários para o filme 'Fantasia' (1940)?",
        options: ["Salvador Dalí", "Thomas Kinkade", "Henri Matisse", "Walt Disney e sua equipe"],
        correctAnswer: 3
    },
    {
        question: "Em 'O Corcunda de Notre-Dame', quem é o responsável por adotar Quasímodo?",
        options: ["Claude Frollo", "Phoebus", "Esmeralda", "Gargoyle"],
        correctAnswer: 0
    },
    {
        question: "Em 'Planeta do Tesouro', qual é o nome da nave que Jim Hawkins usa para viajar até o planeta do Tesouro?",
        options: ["RLS Legacy", "Star Voyager", "The Triton", "Galactic Express"],
        correctAnswer: 0
    },
    {
        question: "Em 'Cinderela', o que Cinderela perde durante a corrida para voltar ao castelo?",
        options: ["Uma luva", "Um sapato", "Uma tiara", "Um vestido"],
        correctAnswer: 1
    },
    {
        question: "Em 'Peter Pan', qual é o nome da ilha onde Peter e os Meninos Perdidos vivem?",
        options: ["Terra do Nunca", "Terra dos Sonhos", "Ilha do Tesouro", "País das Maravilhas"],
        correctAnswer: 0
    },
    {
        question: "No filme 'Pocahontas', qual é o nome do espírito que guia Pocahontas?",
        options: ["Vovó Willow", "Espírito da Floresta", "Grande Águia", "Mãe Natureza"],
        correctAnswer: 0
    },
    {
        question: "Qual é a raça de cachorro da Dama em 'Dama e o Vagabundo'?",
        options: ["Lulu-da-pomerânia", "Cocker Spaniel", "Beagle", "Pastor Alemão"],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 300;
let timerInterval;

// Função para embaralhar as perguntas
function shuffleQuestions() {
    for (let i = quizQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizQuestions[i], quizQuestions[j]] = [quizQuestions[j], quizQuestions[i]]; 
    }
}

// Função para embaralhar respostas.
function shuffleAnswers() {
    quizQuestions.forEach(question => {
        const correctAnswer = question.correctAnswer; 
        for (let i = question.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [question.options[i], question.options[j]] = [question.options[j], question.options[i]];

            // Se a resposta correta estava na posição trocada, ajusta o índice
            
            if (question.correctAnswer === i) {
                question.correctAnswer = j;
            } else if (question.correctAnswer === j) {
                question.correctAnswer = i;
            }
        }
    });
}

// Função para iniciar o quiz

function IniciarQuiz() {
    
    // Embaralha as perguntas e as respostas
    
    shuffleQuestions();
    shuffleAnswers();

    // Esconde o botão de iniciar e o contador
    
    document.getElementById('botao').style.display = 'none';
    document.getElementById('contador').style.display = 'block';
    document.getElementById('question-container').classList.remove('hidden');
    loadQuestion();

    // Inicia o contador
    
    startTimer();
}

function loadQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;

    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = ''; 

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        answersContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const correctIndex = quizQuestions[currentQuestionIndex].correctAnswer;

    if (selectedIndex === correctIndex) {
        score++;
    }

    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        document.getElementById('timer').textContent = `${timeLeft}s`; 
        if (timeLeft <= 0) {
            clearInterval(timerInterval); 
            showResults();  
        } else {
            timeLeft--;  
        }
    }, 1000);  
}

function showResults() {
    document.getElementById('contador').style.display = 'none';
    document.getElementById('question-container').classList.add('hidden');
    const resultContainer = document.getElementById('result');
    resultContainer.classList.remove('hidden');
    document.getElementById('score').textContent = `Você acertou ${score} de ${quizQuestions.length} perguntas.`;
    document.getElementById('reiniciar').style.display = 'inline-block';
}

function reiniciarQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 300;

    document.getElementById('reiniciar').style.display = 'none';
    document.getElementById('result').classList.add('hidden');
    document.getElementById('contador').style.display = 'block'; 
    document.getElementById('botao').style.display = 'inline-block'; 

    clearInterval(timerInterval);
    document.getElementById('timer').textContent = `${timeLeft}s`;  
}
