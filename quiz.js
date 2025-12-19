/* ==========================================
   QUIZ INTERATIVO - GUIA ICMBIO
   ========================================== */

// Base de dados de perguntas por tema
const quizData = {
    prescricao: [
        {
            id: 1,
            question: "Qual é o prazo prescricional geral para infrações administrativas ambientais?",
            options: [
                "3 anos da data da prática da infração",
                "5 anos da data da prática da infração",
                "5 anos da lavratura do auto de infração",
                "10 anos da data da prática da infração"
            ],
            correct: 1,
            explanation: "De acordo com a Lei nº 9.873/1999, art. 1º, o prazo prescricional é de 5 anos contados da data da prática da infração.",
            references: ["Lei 9.873/1999, art. 1º", "Decreto 6.514/2008, art. 21"]
        },
        {
            id: 2,
            question: "Quando ocorre a prescrição intercorrente?",
            options: [
                "Após 3 anos de paralisação do processo",
                "Após 5 anos da lavratura do AI",
                "Após 10 anos sem decisão",
                "Não existe prescrição intercorrente no processo administrativo"
            ],
            correct: 0,
            explanation: "A prescrição intercorrente ocorre quando o processo fica paralisado por mais de 3 anos, pendente de julgamento, por inércia da Administração (Lei 9.873/1999, art. 1º, §1º).",
            references: ["Lei 9.873/1999, art. 1º, §1º"]
        },
        {
            id: 3,
            question: "A lavratura do auto de infração interrompe a prescrição?",
            options: [
                "Não, apenas a decisão final interrompe",
                "Sim, interrompe a prescrição punitiva",
                "Somente se houver defesa do autuado",
                "Apenas em caso de reincidência"
            ],
            correct: 1,
            explanation: "A lavratura do auto de infração é causa interruptiva da prescrição punitiva, conforme art. 1º, §2º da Lei 9.873/1999.",
            references: ["Lei 9.873/1999, art. 1º, §2º"]
        },
        {
            id: 4,
            question: "Em caso de infração permanente, quando começa a contar o prazo prescricional?",
            options: [
                "Da data da primeira constatação da infração",
                "Da data da cessação da permanência",
                "Da data da lavratura do auto de infração",
                "Da data da notificação do autuado"
            ],
            correct: 1,
            explanation: "Em infrações permanentes, o prazo prescricional inicia-se da data da cessação da permanência, conforme jurisprudência consolidada.",
            references: ["Decreto 6.514/2008, art. 21"]
        },
        {
            id: 5,
            question: "A paralisação do processo por culpa do autuado gera prescrição intercorrente?",
            options: [
                "Sim, sempre que ultrapassar 3 anos",
                "Não, a prescrição intercorrente só ocorre por inércia da Administração",
                "Sim, mas apenas se ultrapassar 5 anos",
                "Depende de análise caso a caso"
            ],
            correct: 1,
            explanation: "A prescrição intercorrente NÃO ocorre quando a paralisação é causada por ação ou omissão do autuado, somente por inércia da Administração.",
            references: ["Lei 9.873/1999, art. 1º, §1º"]
        },
        {
            id: 6,
            question: "Qual é o prazo prescricional quando a infração também constitui crime?",
            options: [
                "Sempre 5 anos",
                "Segue o prazo do crime, se maior que 5 anos",
                "10 anos em todos os casos",
                "3 anos, por ser mais favorável"
            ],
            correct: 1,
            explanation: "Quando a infração também constituir crime, aplica-se o prazo prescricional previsto na lei penal, se superior a 5 anos.",
            references: ["Decreto 6.514/2008, art. 21, §1º"]
        },
        {
            id: 7,
            question: "O Relatório Circunstanciado (RC) interrompe a prescrição?",
            options: [
                "Não, apenas decisões interrompem",
                "Sim, por ser ato inequívoco de apuração",
                "Somente se for desfavorável ao autuado",
                "Apenas se elaborado dentro de 1 ano"
            ],
            correct: 1,
            explanation: "O RC é considerado ato inequívoco que importa em apuração do fato, constituindo causa interruptiva da prescrição.",
            references: ["IN ICMBio 9/2023"]
        },
        {
            id: 8,
            question: "A prescrição deve ser reconhecida de ofício?",
            options: [
                "Não, apenas se alegada pelo autuado",
                "Sim, por ser matéria de ordem pública",
                "Somente em segunda instância",
                "Apenas em casos de prescrição intercorrente"
            ],
            correct: 1,
            explanation: "A prescrição constitui matéria de ordem pública e deve ser reconhecida de ofício pela autoridade julgadora, independentemente de alegação.",
            references: ["STJ, REsp 1.112.577/SP"]
        },
        {
            id: 9,
            question: "Após quanto tempo da lavratura do AI deve-se priorizar o processo para evitar prescrição?",
            options: [
                "90 dias",
                "120 dias",
                "180 dias",
                "365 dias"
            ],
            correct: 2,
            explanation: "Processos com mais de 180 dias sem movimentação devem ser priorizados para evitar risco de prescrição intercorrente.",
            references: ["IN ICMBio 9/2023, Capítulo 4"]
        },
        {
            id: 10,
            question: "O que ocorre com a multa quando há prescrição executória?",
            options: [
                "A multa é cancelada",
                "A multa permanece exigível",
                "A multa é reduzida pela metade",
                "Não existe prescrição executória para multas ambientais"
            ],
            correct: 0,
            explanation: "A prescrição executória (5 anos do vencimento) extingue a exigibilidade do crédito, devendo a multa ser cancelada e o processo arquivado.",
            references: ["Lei 9.873/1999, art. 1º"]
        }
    ],

    conversao: [
        {
            id: 11,
            question: "Qual é o desconto máximo possível na conversão de multa em fase de defesa?",
            options: [
                "40%",
                "50%",
                "60%",
                "70%"
            ],
            correct: 2,
            explanation: "Na fase de defesa, o desconto para conversão de multa é de 60%, conforme IN ICMBio 16/2023.",
            references: ["IN ICMBio 16/2023, art. 4º"]
        },
        {
            id: 12,
            question: "Quais são as modalidades de conversão de multa previstas?",
            options: [
                "Apenas conversão direta",
                "Apenas conversão indireta",
                "Conversão direta e indireta",
                "Conversão direta, indireta e mista"
            ],
            correct: 2,
            explanation: "A IN 16/2023 prevê duas modalidades: conversão direta (execução pelo autuado) e conversão indireta (projeto executado pelo ICMBio).",
            references: ["IN ICMBio 16/2023"]
        },
        {
            id: 13,
            question: "É possível converter multa se houver reincidência específica?",
            options: [
                "Sim, sem restrições",
                "Não, é requisito não ter reincidência específica",
                "Sim, mas com desconto reduzido",
                "Apenas com autorização especial"
            ],
            correct: 1,
            explanation: "Um dos requisitos para adesão à conversão é a ausência de reincidência específica.",
            references: ["Decreto 6.514/2008, art. 96, §5º"]
        },
        {
            id: 14,
            question: "O que acontece em caso de inadimplência na conversão de multa?",
            options: [
                "Processo arquivado automaticamente",
                "Advertência, depois rescisão e cobrança",
                "Multa duplicada",
                "Apenas advertência sem consequências"
            ],
            correct: 1,
            explanation: "Em caso de inadimplência, é emitida advertência (1x). Persistindo, há rescisão do TCCM e cobrança do débito atualizado na dívida ativa.",
            references: ["IN ICMBio 16/2023"]
        },
        {
            id: 15,
            question: "Qual autoridade decide sobre pedidos de conversão de multa?",
            options: [
                "Chefe da UC",
                "Equipe de Instrução",
                "Gerente Regional (GR)",
                "DIMAN"
            ],
            correct: 2,
            explanation: "A decisão sobre pedidos de conversão de multa é de competência do Gerente Regional (GR).",
            references: ["IN ICMBio 16/2023"]
        },
        {
            id: 16,
            question: "Na conversão direta, quem executa o projeto?",
            options: [
                "O ICMBio",
                "O autuado",
                "Empresa terceirizada",
                "Voluntários"
            ],
            correct: 1,
            explanation: "Na modalidade de conversão direta, o projeto é executado pelo próprio autuado, sob fiscalização do ICMBio.",
            references: ["IN ICMBio 16/2023"]
        },
        {
            id: 17,
            question: "Qual documento formaliza a conversão de multa?",
            options: [
                "TAC - Termo de Ajustamento de Conduta",
                "TCCM - Termo de Compromisso de Conversão de Multa",
                "PRAD - Projeto de Recuperação de Área Degradada",
                "Auto de Infração complementar"
            ],
            correct: 1,
            explanation: "A conversão é formalizada através do TCCM - Termo de Compromisso de Conversão de Multa.",
            references: ["IN ICMBio 16/2023"]
        },
        {
            id: 18,
            question: "O pedido de conversão renova o prazo para apresentação de defesa?",
            options: [
                "Sim, sempre",
                "Não, são institutos independentes",
                "Apenas se indeferido",
                "Apenas em caso de reincidência"
            ],
            correct: 2,
            explanation: "Se o pedido de conversão for indeferido, o prazo para apresentação de defesa é reaberto (20 dias).",
            references: ["IN ICMBio 9/2023"]
        },
        {
            id: 19,
            question: "É possível converter parcialmente uma multa?",
            options: [
                "Sim, qualquer percentual",
                "Não, deve ser conversão total",
                "Sim, mas mínimo de 50%",
                "Apenas mediante análise técnica específica"
            ],
            correct: 1,
            explanation: "A conversão deve abranger o valor total da multa aplicada, não sendo permitida conversão parcial.",
            references: ["IN ICMBio 16/2023"]
        },
        {
            id: 20,
            question: "Qual o desconto para conversão após interposição de recurso?",
            options: [
                "60%",
                "50%",
                "40%",
                "30%"
            ],
            correct: 2,
            explanation: "Para autos de infração lavrados até 31/12/2022, o desconto em fase recursal é de 40%.",
            references: ["IN ICMBio 16/2023"]
        }
    ],

    prad: [
        {
            id: 21,
            question: "Qual é o prazo para apresentação do PRAD?",
            options: [
                "30 dias da notificação",
                "60 dias da notificação",
                "90 dias da notificação",
                "120 dias da notificação"
            ],
            correct: 1,
            explanation: "O prazo para apresentação do PRAD é de 60 dias a partir da notificação, conforme IN ICMBio 11/2014.",
            references: ["IN ICMBio 11/2014"]
        },
        {
            id: 22,
            question: "A obrigação de reparar o dano ambiental prescreve?",
            options: [
                "Sim, em 5 anos",
                "Sim, em 10 anos",
                "Não, é imprescritível",
                "Sim, em 20 anos"
            ],
            correct: 2,
            explanation: "A obrigação de reparar o dano ambiental é IMPRESCRITÍVEL, conforme entendimento consolidado do STJ.",
            references: ["STJ, REsp 1.120.117/AC", "IN ICMBio 11/2014"]
        },
        {
            id: 23,
            question: "Quem realiza a análise técnica do PRAD?",
            options: [
                "Gerente Regional",
                "Equipe de Instrução",
                "Unidade de Conservação (UC)",
                "DIMAN"
            ],
            correct: 2,
            explanation: "A análise técnica do PRAD é realizada pela Unidade de Conservação (UC) ou setor competente.",
            references: ["IN ICMBio 11/2014"]
        },
        {
            id: 24,
            question: "É possível celebrar TAC para reparação de dano ambiental?",
            options: [
                "Não, nunca",
                "Sim, em qualquer caso",
                "Sim, se PRAD simplificado e condições atendidas",
                "Apenas com autorização do MPF"
            ],
            correct: 2,
            explanation: "É possível celebrar TAC quando o PRAD é simplificado e atende aos requisitos estabelecidos na IN 11/2014.",
            references: ["IN ICMBio 11/2014"]
        },
        {
            id: 25,
            question: "O que é a IT (Informação Técnica) no contexto do PRAD?",
            options: [
                "Instrução Temporária",
                "Informação Técnica elaborada pela UC",
                "Informe de Término",
                "Instrução para Terceiros"
            ],
            correct: 1,
            explanation: "IT é a Informação Técnica elaborada pela UC para análise da viabilidade de cobrança judicial do PRAD.",
            references: ["IN ICMBio 11/2014"]
        },
        {
            id: 26,
            question: "Após aprovação do PRAD, qual documento é emitido?",
            options: [
                "Auto de Aprovação",
                "Decisão de Homologação",
                "Certidão de Aprovação",
                "Termo de Aprovação de PRAD"
            ],
            correct: 1,
            explanation: "Após análise e aprovação pela UC, o Gerente Regional emite Decisão de Homologação do PRAD.",
            references: ["IN ICMBio 11/2014"]
        },
        {
            id: 27,
            question: "O descumprimento do PRAD gera qual consequência?",
            options: [
                "Apenas multa administrativa",
                "Cobrança judicial e possível crime ambiental",
                "Advertência sem outras penalidades",
                "Cancelamento do auto de infração"
            ],
            correct: 1,
            explanation: "O descumprimento do PRAD pode gerar cobrança judicial da obrigação e, dependendo do caso, caracterizar crime ambiental.",
            references: ["Lei 9.605/1998"]
        },
        {
            id: 28,
            question: "Quem decide sobre o interesse na cobrança judicial do PRAD?",
            options: [
                "Chefe da UC",
                "Gerente Regional",
                "PFE",
                "MPF"
            ],
            correct: 1,
            explanation: "A decisão sobre o interesse na cobrança judicial do PRAD é de competência do Gerente Regional, após consulta à PFE/MPF.",
            references: ["IN ICMBio 11/2014"]
        },
        {
            id: 29,
            question: "O PRAD substitui a multa aplicada?",
            options: [
                "Sim, sempre",
                "Não, são obrigações independentes",
                "Sim, se aprovado",
                "Depende do valor da multa"
            ],
            correct: 1,
            explanation: "PRAD e multa são obrigações INDEPENDENTES. O PRAD visa reparar o dano, enquanto a multa é sanção administrativa.",
            references: ["Decreto 6.514/2008"]
        },
        {
            id: 30,
            question: "Qual norma regulamenta o PRAD no ICMBio?",
            options: [
                "IN ICMBio 9/2023",
                "IN ICMBio 11/2014",
                "IN ICMBio 16/2023",
                "Decreto 6.514/2008"
            ],
            correct: 1,
            explanation: "A IN ICMBio nº 11/2014 regulamenta os procedimentos para elaboração, análise e aprovação de PRAD.",
            references: ["IN ICMBio 11/2014"]
        }
    ],

    julgamento: [
        {
            id: 31,
            question: "Qual é a autoridade competente para julgamento em primeira instância?",
            options: [
                "Chefe da UC",
                "Equipe de Instrução",
                "EJUNI (Equipe de Julgamento) ou Gerente Regional",
                "DIMAN"
            ],
            correct: 2,
            explanation: "O julgamento em primeira instância é de competência da EJUNI (Equipe de Julgamento) ou do Gerente Regional.",
            references: ["IN ICMBio 9/2023"]
        },
        {
            id: 32,
            question: "Qual é o prazo para interposição de recurso?",
            options: [
                "10 dias",
                "15 dias",
                "20 dias",
                "30 dias"
            ],
            correct: 2,
            explanation: "O prazo para interposição de recurso é de 20 dias, conforme Lei 9.784/1999.",
            references: ["Lei 9.784/1999, art. 59"]
        },
        {
            id: 33,
            question: "O que é reformatio in pejus?",
            options: [
                "Reforma da decisão favorável ao autuado",
                "Agravamento da penalidade em sede recursal",
                "Anulação do auto de infração",
                "Redução da multa aplicada"
            ],
            correct: 1,
            explanation: "Reformatio in pejus é o agravamento da situação do recorrente em sede recursal. No processo administrativo, só é possível se o autuado for notificado previamente.",
            references: ["IN ICMBio 9/2023"]
        },
        {
            id: 34,
            question: "Quando é obrigatório o recurso de ofício?",
            options: [
                "Em toda absolvição",
                "Quando houver redução >50% da multa ou >R$500.000",
                "Apenas em caso de extinção do processo",
                "Nunca é obrigatório"
            ],
            correct: 1,
            explanation: "O recurso de ofício é obrigatório quando há redução superior a 50% do valor da multa ou superior a R$ 500.000, ou extinção do processo.",
            references: ["Decreto 6.514/2008, art. 84"]
        },
        {
            id: 35,
            question: "O que caracteriza vício insanável no auto de infração?",
            options: [
                "Erro de digitação",
                "Ausência de elementos essenciais que impossibilite defesa",
                "Falta de assinatura do fiscal",
                "Erro na data da lavratura"
            ],
            correct: 1,
            explanation: "Vício insanável é aquele que prejudica substancialmente o direito de defesa, como ausência de descrição da conduta ou identificação do local.",
            references: ["Decreto 6.514/2008, art. 100"]
        },
        {
            id: 36,
            question: "Qual instância julga os recursos?",
            options: [
                "Gerente Regional",
                "EJUNI",
                "DIMAN (Diretoria de Manejo)",
                "Presidência do ICMBio"
            ],
            correct: 2,
            explanation: "A segunda instância, competente para julgar recursos, é a DIMAN (Diretoria de Manejo Integrado Territorialmente).",
            references: ["IN ICMBio 9/2023"]
        },
        {
            id: 37,
            question: "O que é juízo de retratação?",
            options: [
                "Retificação de dados do autuado",
                "Possibilidade da autoridade de 1ª instância reconsiderar sua decisão",
                "Recurso à terceira instância",
                "Anulação automática da decisão"
            ],
            correct: 1,
            explanation: "Juízo de retratação é a possibilidade da autoridade de primeira instância reconsiderar sua decisão antes de remeter o recurso à instância superior.",
            references: ["IN ICMBio 9/2023"]
        },
        {
            id: 38,
            question: "Quando ocorre o trânsito em julgado?",
            options: [
                "Imediatamente após a decisão de 1ª instância",
                "Após 20 dias da notificação, sem recurso",
                "21 dias após notificação da última decisão, sem recurso",
                "Após confirmação pelo DIMAN"
            ],
            correct: 2,
            explanation: "O trânsito em julgado ocorre 21 dias após a notificação da última decisão, quando não há interposição de recurso ou após julgamento pela última instância.",
            references: ["IN ICMBio 9/2023"]
        },
        {
            id: 39,
            question: "O que é o julgamento simplificado?",
            options: [
                "Julgamento sem análise técnica",
                "Decisão direta em casos de extinção de punibilidade ou vícios insanáveis",
                "Julgamento por equipe reduzida",
                "Julgamento eletrônico"
            ],
            correct: 1,
            explanation: "Julgamento simplificado é a decisão direta da autoridade julgadora em casos de extinção de punibilidade, vício insanável ou autor desconhecido, sem necessidade de RC completo.",
            references: ["IN ICMBio 9/2023, Capítulo 10"]
        },
        {
            id: 40,
            question: "A decisão de primeira instância deve ser fundamentada?",
            options: [
                "Não, basta o dispositivo",
                "Sim, é requisito essencial de validade",
                "Apenas se desfavorável ao autuado",
                "Apenas em casos complexos"
            ],
            correct: 1,
            explanation: "A fundamentação é requisito ESSENCIAL de validade de qualquer decisão administrativa, conforme art. 50 da Lei 9.784/1999.",
            references: ["Lei 9.784/1999, art. 50"]
        }
    ]
};

// Estado do Quiz
let currentQuiz = {
    topic: 'prescricao',
    currentQuestion: 0,
    score: 0,
    answers: [],
    startTime: null,
    endTime: null
};

// Elementos DOM
const quizElements = {
    topicBtns: document.querySelectorAll('.topic-btn'),
    quizContent: document.getElementById('quiz-content'),
    quizProgress: document.getElementById('quiz-progress-bar'),
    quizCounter: document.getElementById('quiz-question-counter'),
    quizScore: document.getElementById('quiz-score'),
    prevBtn: document.getElementById('quiz-prev'),
    nextBtn: document.getElementById('quiz-next'),
    results: document.getElementById('quiz-results')
};

// ==========================================
// INICIALIZAÇÃO DO QUIZ
// ==========================================
function initQuiz() {
    // Event listeners para seleção de tópico
    quizElements.topicBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const topic = btn.getAttribute('data-topic');
            selectTopic(topic);
        });
    });

    // Event listeners para navegação
    quizElements.prevBtn?.addEventListener('click', previousQuestion);
    quizElements.nextBtn?.addEventListener('click', nextQuestion);

    // Iniciar com primeiro tópico
    loadQuestion();
}

// ==========================================
// SELEÇÃO DE TÓPICO
// ==========================================
function selectTopic(topic) {
    // Atualizar botões
    quizElements.topicBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-topic') === topic) {
            btn.classList.add('active');
        }
    });

    // Resetar quiz
    currentQuiz = {
        topic: topic,
        currentQuestion: 0,
        score: 0,
        answers: [],
        startTime: new Date(),
        endTime: null
    };

    // Esconder resultados
    quizElements.results.style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';

    // Carregar primeira questão
    loadQuestion();
}

// ==========================================
// CARREGAR QUESTÃO
// ==========================================
function loadQuestion() {
    const questions = quizData[currentQuiz.topic];
    const question = questions[currentQuiz.currentQuestion];

    // Atualizar progresso
    const progress = ((currentQuiz.currentQuestion + 1) / questions.length) * 100;
    quizElements.quizProgress.style.width = progress + '%';
    quizElements.quizCounter.textContent = `Pergunta ${currentQuiz.currentQuestion + 1} de ${questions.length}`;

    // Montar HTML da questão
    const html = `
        <div class="quiz-question">
            <h3>Questão ${currentQuiz.currentQuestion + 1}</h3>
            <p class="question-text">${question.question}</p>
            <div class="quiz-options" role="radiogroup" aria-label="Opções de resposta">
                ${question.options.map((option, index) => `
                    <div class="quiz-option" 
                         role="radio" 
                         aria-checked="false"
                         tabindex="0"
                         data-index="${index}">
                        <span class="option-letter">${String.fromCharCode(65 + index)})</span>
                        <span class="option-text">${option}</span>
                    </div>
                `).join('')}
            </div>
            ${currentQuiz.answers[currentQuiz.currentQuestion] !== undefined ? renderExplanation(question) : ''}
        </div>
    `;

    quizElements.quizContent.innerHTML = html;

    // Marcar resposta já selecionada
    if (currentQuiz.answers[currentQuiz.currentQuestion] !== undefined) {
        const selectedIndex = currentQuiz.answers[currentQuiz.currentQuestion];
        const options = quizElements.quizContent.querySelectorAll('.quiz-option');
        options[selectedIndex].classList.add('selected');
        showCorrectAnswer(question, options);
    }

    // Event listeners para opções
    const options = quizElements.quizContent.querySelectorAll('.quiz-option');
    options.forEach((option, index) => {
        option.addEventListener('click', () => selectOption(index, question));
        option.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectOption(index, question);
            }
        });
    });

    // Atualizar botões de navegação
    updateNavigationButtons();
}

// ==========================================
// SELECIONAR OPÇÃO
// ==========================================
function selectOption(index, question) {
    // Se já respondeu, não permitir mudança
    if (currentQuiz.answers[currentQuiz.currentQuestion] !== undefined) {
        return;
    }

    // Salvar resposta
    currentQuiz.answers[currentQuiz.currentQuestion] = index;

    // Marcar opção selecionada
    const options = quizElements.quizContent.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.classList.remove('selected'));
    options[index].classList.add('selected');
    options[index].setAttribute('aria-checked', 'true');

    // Mostrar resposta correta
    showCorrectAnswer(question, options);

    // Calcular pontuação
    if (index === question.correct) {
        currentQuiz.score += 10;
        updateScore();
    }

    // Mostrar explicação
    const explanation = renderExplanation(question);
    const questionDiv = quizElements.quizContent.querySelector('.quiz-question');

    // Remover explicação anterior se existir
    const existingExplanation = questionDiv.querySelector('.question-explanation');
    if (existingExplanation) {
        existingExplanation.remove();
    }

    questionDiv.insertAdjacentHTML('beforeend', explanation);

    // Scroll para explicação
    setTimeout(() => {
        questionDiv.querySelector('.question-explanation')?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' 
        });
    }, 100);
}

// ==========================================
// MOSTRAR RESPOSTA CORRETA
// ==========================================
function showCorrectAnswer(question, options) {
    const selectedIndex = currentQuiz.answers[currentQuiz.currentQuestion];

    options.forEach((opt, idx) => {
        if (idx === question.correct) {
            opt.classList.add('correct');
        } else if (idx === selectedIndex && selectedIndex !== question.correct) {
            opt.classList.add('incorrect');
        }
    });
}

// ==========================================
// RENDERIZAR EXPLICAÇÃO
// ==========================================
function renderExplanation(question) {
    const selectedIndex = currentQuiz.answers[currentQuiz.currentQuestion];
    const isCorrect = selectedIndex === question.correct;

    return `
        <div class="question-explanation ${isCorrect ? 'correct-answer' : 'incorrect-answer'}">
            <div class="explanation-header">
                <i class="fas fa-${isCorrect ? 'check-circle' : 'times-circle'}"></i>
                <strong>${isCorrect ? 'Correto!' : 'Incorreto!'}</strong>
            </div>
            <p class="explanation-text">${question.explanation}</p>
            <div class="explanation-references">
                <strong><i class="fas fa-book"></i> Referências:</strong>
                <ul>
                    ${question.references.map(ref => `<li>${ref}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

// ==========================================
// NAVEGAÇÃO
// ==========================================
function previousQuestion() {
    if (currentQuiz.currentQuestion > 0) {
        currentQuiz.currentQuestion--;
        loadQuestion();
    }
}

function nextQuestion() {
    const questions = quizData[currentQuiz.topic];

    if (currentQuiz.currentQuestion < questions.length - 1) {
        currentQuiz.currentQuestion++;
        loadQuestion();
    } else {
        // Finalizar quiz
        finishQuiz();
    }
}

function updateNavigationButtons() {
    const questions = quizData[currentQuiz.topic];

    // Botão Anterior
    quizElements.prevBtn.disabled = currentQuiz.currentQuestion === 0;

    // Botão Próxima
    const isLastQuestion = currentQuiz.currentQuestion === questions.length - 1;
    const hasAnswered = currentQuiz.answers[currentQuiz.currentQuestion] !== undefined;

    if (isLastQuestion && hasAnswered) {
        quizElements.nextBtn.innerHTML = '<i class="fas fa-flag-checkered"></i> Finalizar';
    } else {
        quizElements.nextBtn.innerHTML = 'Próxima <i class="fas fa-arrow-right"></i>';
    }

    quizElements.nextBtn.disabled = !hasAnswered;
}

// ==========================================
// ATUALIZAR PONTUAÇÃO
// ==========================================
function updateScore() {
    quizElements.quizScore.textContent = `${currentQuiz.score} pontos`;
}

// ==========================================
// FINALIZAR QUIZ
// ==========================================
function finishQuiz() {
    currentQuiz.endTime = new Date();
    const duration = Math.round((currentQuiz.endTime - currentQuiz.startTime) / 1000);
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;

    const questions = quizData[currentQuiz.topic];
    const totalQuestions = questions.length;
    const correctAnswers = currentQuiz.answers.filter((ans, idx) => ans === questions[idx].correct).length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    // Determinar mensagem e medalha
    let message, medal, medalColor;
    if (percentage >= 90) {
        message = "Excelente! Você domina o conteúdo!";
        medal = "fa-trophy";
        medalColor = "#FFD700";
    } else if (percentage >= 70) {
        message = "Muito bom! Continue estudando!";
        medal = "fa-medal";
        medalColor = "#C0C0C0";
    } else if (percentage >= 50) {
        message = "Bom trabalho! Revise alguns pontos.";
        medal = "fa-star";
        medalColor = "#CD7F32";
    } else {
        message = "Continue estudando! Você vai melhorar!";
        medal = "fa-bookmark";
        medalColor = "#999";
    }

    // Salvar resultado
    saveQuizResult(currentQuiz.topic, percentage, correctAnswers, totalQuestions);

    // Verificar conquistas
    checkAchievements(percentage);

    // Mostrar resultados
    const resultsHTML = `
        <div class="results-container">
            <div class="results-header">
                <i class="fas ${medal}" style="color: ${medalColor}; font-size: 4rem;"></i>
                <h3>${message}</h3>
            </div>

            <div class="results-stats">
                <div class="result-stat">
                    <div class="stat-value">${percentage}%</div>
                    <div class="stat-label">Aproveitamento</div>
                </div>
                <div class="result-stat">
                    <div class="stat-value">${correctAnswers}/${totalQuestions}</div>
                    <div class="stat-label">Acertos</div>
                </div>
                <div class="result-stat">
                    <div class="stat-value">${minutes}:${seconds.toString().padStart(2, '0')}</div>
                    <div class="stat-label">Tempo</div>
                </div>
                <div class="result-stat">
                    <div class="stat-value">${currentQuiz.score}</div>
                    <div class="stat-label">Pontos</div>
                </div>
            </div>

            <div class="results-review">
                <h4>Revisão das Questões</h4>
                ${questions.map((q, idx) => {
                    const userAnswer = currentQuiz.answers[idx];
                    const isCorrect = userAnswer === q.correct;
                    return `
                        <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                            <div class="review-header">
                                <span class="review-number">Questão ${idx + 1}</span>
                                <i class="fas fa-${isCorrect ? 'check-circle' : 'times-circle'}"></i>
                            </div>
                            <p class="review-question">${q.question}</p>
                            <p class="review-answer">
                                <strong>Sua resposta:</strong> ${q.options[userAnswer]}<br>
                                ${!isCorrect ? `<strong>Resposta correta:</strong> ${q.options[q.correct]}` : ''}
                            </p>
                        </div>
                    `;
                }).join('')}
            </div>

            <div class="results-actions">
                <button class="btn-secondary" onclick="window.location.reload()">
                    <i class="fas fa-redo"></i> Fazer Outro Quiz
                </button>
                <button class="btn-primary" onclick="shareResults(${percentage})">
                    <i class="fas fa-share-alt"></i> Compartilhar Resultado
                </button>
            </div>
        </div>
    `;

    document.getElementById('quiz-container').style.display = 'none';
    quizElements.results.innerHTML = resultsHTML;
    quizElements.results.style.display = 'block';
    quizElements.results.scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// SALVAR RESULTADO
// ==========================================
function saveQuizResult(topic, percentage, correct, total) {
    const results = JSON.parse(localStorage.getItem('quizResults') || '[]');
    results.push({
        topic,
        percentage,
        correct,
        total,
        date: new Date().toISOString(),
        score: currentQuiz.score
    });
    localStorage.setItem('quizResults', JSON.stringify(results));
}

// ==========================================
// VERIFICAR CONQUISTAS
// ==========================================
function checkAchievements(percentage) {
    const achievements = JSON.parse(localStorage.getItem('achievements') || '{}');

    if (!achievements.iniciante) {
        achievements.iniciante = true;
        unlockAchievement('Iniciante', 'Complete seu primeiro quiz');
    }

    if (percentage >= 80 && !achievements.conhecedor) {
        achievements.conhecedor = true;
        unlockAchievement('Conhecedor', 'Acerte 80% em um quiz');
    }

    if (percentage === 100 && !achievements.expert) {
        const allPerfect = checkAllQuizzesComplete();
        if (allPerfect) {
            achievements.expert = true;
            unlockAchievement('Expert', 'Complete todos os quizzes com 100%');
        }
    }

    localStorage.setItem('achievements', JSON.stringify(achievements));
    updateAchievementDisplay();
}

function unlockAchievement(name, description) {
    // Mostrar notificação de conquista
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <i class="fas fa-trophy"></i>
        <div>
            <strong>Conquista Desbloqueada!</strong>
            <p>${name}: ${description}</p>
        </div>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

function updateAchievementDisplay() {
    const achievements = JSON.parse(localStorage.getItem('achievements') || '{}');
    const achievementElements = document.querySelectorAll('.achievement');

    achievementElements.forEach(elem => {
        const achievementName = elem.querySelector('span').textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if (achievements[achievementName]) {
            elem.classList.remove('locked');
        }
    });
}

function checkAllQuizzesComplete() {
    const results = JSON.parse(localStorage.getItem('quizResults') || '[]');
    const topics = ['prescricao', 'conversao', 'prad', 'julgamento'];

    return topics.every(topic => {
        const topicResults = results.filter(r => r.topic === topic);
        return topicResults.some(r => r.percentage === 100);
    });
}

// ==========================================
// COMPARTILHAR RESULTADOS
// ==========================================
function shareResults(percentage) {
    const text = `Acabei de completar o Quiz do Guia Prático ICMBio com ${percentage}% de aproveitamento!`;

    if (navigator.share) {
        navigator.share({
            title: 'Resultado do Quiz ICMBio',
            text: text,
            url: window.location.href
        }).catch(err => console.log('Erro ao compartilhar:', err));
    } else {
        // Fallback: copiar para clipboard
        navigator.clipboard.writeText(text + ' ' + window.location.href)
            .then(() => alert('Link copiado para a área de transferência!'))
            .catch(err => console.log('Erro ao copiar:', err));
    }
}

// Inicializar quando DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
    updateAchievementDisplay();
});
