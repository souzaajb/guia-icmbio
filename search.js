/* ==========================================
   BUSCA AVANÇADA - GUIA ICMBIO
   ========================================== */

// Base de dados de conteúdo para busca
const searchDatabase = {
    chapters: [
        {
            id: 'cap-3',
            title: 'Introdução ao Processo de Auto de Infração',
            keywords: ['auto de infração', 'processo administrativo', 'infração ambiental', 'procedimento', 'lavratura'],
            content: `O Processo de apuração de infrações administrativas ambientais no ICMBio é instaurado a partir da lavratura 
            do auto de infração. Constitui ato administrativo vinculado, formal e autoexecutório. Base legal: Lei 9.605/1998, 
            Decreto 6.514/2008, Instrução Normativa ICMBio nº 9/2023.`
        },
        {
            id: 'cap-4',
            title: 'Ordem de Instrução e Julgamento dos Processos',
            keywords: ['ordem', 'instrução', 'julgamento', 'prioridade', 'tramitação'],
            content: `Estabelece a ordem prioritária para instrução e julgamento. Processos com réu preso ou com prescrição 
            iminente têm prioridade. Prazos: defesa 20 dias, recurso 20 dias, instrução 30 dias.`
        },
        {
            id: 'cap-5',
            title: 'Competências',
            keywords: ['competência', 'atribuição', 'autoridade', 'julgador', 'gerente regional', 'diman'],
            content: `Define competências: Gerente Regional julga em 1ª instância, DIMAN em 2ª instância. 
            Equipe de Instrução analisa processos. Chefe de UC fiscaliza execução de PRAD.`
        },
        {
            id: 'cap-20',
            title: 'Análise de Prescrição',
            keywords: ['prescrição', 'prazo prescricional', 'prescrição intercorrente', '5 anos', 'interrupção', 'suspensão'],
            content: `Prescrição punitiva: 5 anos da data da infração (Lei 9.873/1999). Prescrição intercorrente: 3 anos 
            de paralisação por inércia da Administração. Causas interruptivas: lavratura do AI, decisão condenatória. 
            A prescrição é imprescritível para reparação de dano ambiental.`
        },
        {
            id: 'cap-24',
            title: 'Conversão da Multa Ambiental',
            keywords: ['conversão', 'multa', 'serviços ambientais', 'tccm', 'desconto', 'projeto ambiental'],
            content: `Conversão de multa em serviços ambientais. Desconto de 60% na fase de defesa, 40% na fase recursal. 
            Modalidades: conversão direta (execução pelo autuado) e indireta (ICMBio executa). Formalização via TCCM. 
            Requisitos: decisão definitiva, ausência de reincidência específica. IN ICMBio 16/2023.`
        },
        {
            id: 'cap-25',
            title: 'Reparação do Dano Ambiental – PRAD',
            keywords: ['prad', 'recuperação', 'dano ambiental', 'reparação', 'tac', 'imprescritível'],
            content: `PRAD: Projeto de Recuperação de Área Degradada. Prazo de apresentação: 60 dias. Obrigação imprescritível. 
            Análise técnica pela UC. Homologação pelo Gerente Regional. Descumprimento gera cobrança judicial. 
            IN ICMBio 11/2014. PRAD é independente da multa.`
        },
        {
            id: 'cap-10',
            title: 'Julgamento',
            keywords: ['julgamento', 'decisão', 'ejuni', 'primeira instância', 'fundamentação', 'sentença'],
            content: `Julgamento em primeira instância pela EJUNI ou Gerente Regional. Decisão deve ser fundamentada. 
            Prazo para recurso: 20 dias. Recurso de ofício obrigatório em casos de redução >50% ou >R$500.000, 
            ou extinção do processo. Reformatio in pejus permitida com notificação prévia.`
        },
        {
            id: 'cap-11',
            title: 'Recurso',
            keywords: ['recurso', 'segunda instância', 'diman', 'juízo de retratação', 'efeito suspensivo'],
            content: `Recurso à segunda instância (DIMAN). Prazo: 20 dias. Juízo de retratação pela 1ª instância. 
            Efeito devolutivo. Não há efeito suspensivo automático. Recurso de ofício em casos específicos.`
        },
        {
            id: 'cap-12',
            title: 'Constituição Definitiva de Multa Ambiental',
            keywords: ['constituição definitiva', 'trânsito em julgado', 'dívida ativa', 'cobrança', 'inscrição'],
            content: `Trânsito em julgado após 21 dias da notificação sem recurso. Multa é inscrita em dívida ativa. 
            Envio para cobrança judicial. Certidão de dívida ativa tem força de título executivo extrajudicial.`
        },
        {
            id: 'cap-13',
            title: 'Adesão às Soluções Legais',
            keywords: ['adesão', 'parcelamento', 'desconto', 'pagamento', 'quitação'],
            content: `Possibilidade de adesão a parcelamento ou pagamento com desconto. Descontos progressivos conforme 
            fase processual: até 60% na defesa, 40% no recurso. Conversão de multa em serviços ambientais.`
        },
        {
            id: 'cap-14',
            title: 'Causas Extintivas da Punibilidade',
            keywords: ['extinção', 'punibilidade', 'prescrição', 'morte', 'pagamento', 'anistia'],
            content: `Causas de extinção: prescrição, morte do infrator (pessoa física), pagamento integral, 
            conversão cumprida, anistia. Extinção da punibilidade não extingue obrigação de reparar dano.`
        },
        {
            id: 'cap-15',
            title: 'Nulidades do Procedimento de Apuração de AI',
            keywords: ['nulidade', 'vício', 'insanável', 'anulação', 'defeito', 'erro formal'],
            content: `Vícios sanáveis: podem ser corrigidos sem prejuízo (erro material, assinatura). 
            Vícios insanáveis: impossibilitam defesa (ausência de descrição da conduta, identificação do local). 
            Nulidade deve ser alegada na primeira oportunidade. Princípio da instrumentalidade das formas.`
        },
        {
            id: 'cap-16',
            title: 'Autotutela Administrativa',
            keywords: ['autotutela', 'revisão', 'anulação', 'revogação', 'súmula 473'],
            content: `Administração pode rever seus atos de ofício. Anulação de atos ilegais. Revogação por motivo 
            de conveniência. Súmula 473 STF. Respeito ao contraditório e ampla defesa. Prazo decadencial de 5 anos.`
        },
        {
            id: 'cap-17',
            title: 'Autor Desconhecido',
            keywords: ['autor desconhecido', 'identificação', 'responsabilidade', 'apuração'],
            content: `Procedimentos quando não é possível identificar o infrator. Tentativas de identificação. 
            Responsabilidade solidária. Arquivamento se impossível identificar após diligências.`
        },
        {
            id: 'cap-18',
            title: 'Advertência',
            keywords: ['advertência', 'pena', 'sanção', 'primeira infração', 'menor potencial'],
            content: `Advertência aplicável em primeira infração de menor potencial ofensivo. 
            Não cabe em infrações graves ou com dano significativo. Critérios de aplicação.`
        },
        {
            id: 'cap-19',
            title: 'Indicação da Multa Aberta (Dosimetria)',
            keywords: ['dosimetria', 'multa aberta', 'cálculo', 'gravidade', 'agravantes', 'atenuantes'],
            content: `Critérios para dosimetria da multa: gravidade do fato, antecedentes, situação econômica. 
            Agravantes: reincidência, dano irreversível, UC. Atenuantes: baixo grau de instrução, 
            arrependimento eficaz, colaboração. Fórmula: Valor Base × Fator Gravidade × Fator Econômico.`
        },
        {
            id: 'cap-21',
            title: 'Medidas Administrativas Cautelares',
            keywords: ['medida cautelar', 'apreensão', 'embargo', 'suspensão', 'destruição'],
            content: `Medidas cautelares: apreensão de produtos/instrumentos, embargo de obra/atividade, 
            suspensão de venda/fabricação, destruição de produtos. Aplicação imediata. 
            Independem de processo administrativo. Decreto 6.514/2008, arts. 100-108.`
        },
        {
            id: 'cap-22',
            title: 'Consulta à PFE',
            keywords: ['pfe', 'procuradoria', 'consulta jurídica', 'parecer', 'manifestação'],
            content: `Casos que exigem consulta à PFE: questões jurídicas complexas, prescrição duvidosa, 
            nulidades, cobrança judicial de PRAD. Prazo: 30 dias para manifestação. Parecer vinculante.`
        },
        {
            id: 'cap-23',
            title: 'Parcelamento do Débito',
            keywords: ['parcelamento', 'pagamento', 'prestações', 'desconto', 'quitação'],
            content: `Possibilidade de parcelar multa em até 60 vezes. Entrada mínima. Juros de mora. 
            Impossibilidade de parcelar se já houver parcelamento anterior não quitado. 
            Desconto para pagamento à vista ou antecipação.`
        },
        {
            id: 'cap-26',
            title: 'Revisão',
            keywords: ['revisão', 'recurso extraordinário', 'fato novo', 'erro judiciário', 'reexame'],
            content: `Revisão de decisão transitada em julgado. Cabível se: fato novo, erro de fato, 
            decisão contrária a prova dos autos. Prazo: 5 anos. Competência: mesma autoridade que proferiu 
            a decisão recorrida. Não admite reforma para pior.`
        },
        {
            id: 'cap-27',
            title: 'Bibliografia',
            keywords: ['referências', 'bibliografia', 'legislação', 'doutrina', 'jurisprudência'],
            content: `Referências legislativas: Constituição Federal, Lei 9.605/1998, Decreto 6.514/2008, 
            Lei 9.784/1999, Lei 9.873/1999. Instruções Normativas ICMBio. Doutrina e jurisprudência aplicáveis.`
        },
        {
            id: 'cap-28',
            title: 'Anexos',
            keywords: ['anexos', 'modelos', 'formulários', 'fluxogramas', 'templates'],
            content: `Anexos: modelos de despachos, pareceres, decisões, notificações. Fluxogramas de processos. 
            Formulários padronizados. Templates editáveis. Checklist de análise processual.`
        }
    ],

    definitions: [
        { term: 'Auto de Infração', definition: 'Documento que registra formalmente a infração administrativa ambiental' },
        { term: 'PRAD', definition: 'Projeto de Recuperação de Área Degradada' },
        { term: 'TCCM', definition: 'Termo de Compromisso de Conversão de Multa' },
        { term: 'EJUNI', definition: 'Equipe de Julgamento de Autos de Infração' },
        { term: 'DIMAN', definition: 'Diretoria de Manejo Integrado Territorialmente' },
        { term: 'PFE', definition: 'Procuradoria Federal Especializada' },
        { term: 'UC', definition: 'Unidade de Conservação' },
        { term: 'TAC', definition: 'Termo de Ajustamento de Conduta' },
        { term: 'RC', definition: 'Relatório Circunstanciado' },
        { term: 'AI', definition: 'Auto de Infração' },
        { term: 'Prescrição Intercorrente', definition: 'Prescrição que ocorre durante o processo por inércia da Administração' },
        { term: 'Reformatio in Pejus', definition: 'Agravamento da situação do recorrente em sede recursal' },
        { term: 'Contraditório', definition: 'Princípio que garante conhecimento e contestação dos atos processuais' },
        { term: 'Ampla Defesa', definition: 'Direito de defender-se por todos os meios legais' },
        { term: 'Autotutela', definition: 'Poder da Administração de rever seus próprios atos' }
    ]
};

// Elementos DOM
const searchElements = {
    searchInput: document.getElementById('search-input'),
    searchBtn: document.getElementById('search-btn'),
    searchResults: document.getElementById('search-results'),
    filterTitles: document.getElementById('filter-titles'),
    filterContent: document.getElementById('filter-content'),
    filterAnnexes: document.getElementById('filter-annexes')
};

// Estado da busca
let searchHistory = [];

// ==========================================
// INICIALIZAÇÃO DA BUSCA
// ==========================================
function initSearch() {
    // Event listener para botão de busca
    searchElements.searchBtn?.addEventListener('click', performSearch);

    // Event listener para Enter no campo de busca
    searchElements.searchInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Event listener para busca em tempo real (debounced)
    let searchTimeout;
    searchElements.searchInput?.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        if (e.target.value.length >= 3) {
            searchTimeout = setTimeout(() => {
                performSearch(false);
            }, 500);
        } else if (e.target.value.length === 0) {
            clearSearchResults();
        }
    });

    // Carregar histórico do localStorage
    loadSearchHistory();
}

// ==========================================
// EXECUTAR BUSCA
// ==========================================
function performSearch(saveHistory = true) {
    const query = searchElements.searchInput?.value.trim().toLowerCase();

    if (!query || query.length < 2) {
        showSearchError('Digite ao menos 2 caracteres para buscar');
        return;
    }

    // Salvar no histórico
    if (saveHistory) {
        addToSearchHistory(query);
    }

    // Obter filtros ativos
    const filters = {
        titles: searchElements.filterTitles?.checked ?? true,
        content: searchElements.filterContent?.checked ?? true,
        annexes: searchElements.filterAnnexes?.checked ?? false
    };

    // Executar busca
    const results = search(query, filters);

    // Exibir resultados
    displaySearchResults(results, query);

    // Analytics
    trackEvent('Search', 'Performed', query);
}

// ==========================================
// ALGORITMO DE BUSCA
// ==========================================
function search(query, filters) {
    const results = [];
    const queryTerms = query.split(' ').filter(term => term.length > 2);

    // Buscar em capítulos
    searchDatabase.chapters.forEach(chapter => {
        let score = 0;
        let matches = [];

        // Buscar no título
        if (filters.titles) {
            const titleMatch = calculateRelevance(chapter.title.toLowerCase(), queryTerms);
            if (titleMatch > 0) {
                score += titleMatch * 3; // Peso maior para título
                matches.push({ type: 'title', text: chapter.title });
            }
        }

        // Buscar em keywords
        chapter.keywords.forEach(keyword => {
            const keywordMatch = calculateRelevance(keyword, queryTerms);
            if (keywordMatch > 0) {
                score += keywordMatch * 2; // Peso médio para keywords
            }
        });

        // Buscar no conteúdo
        if (filters.content) {
            const contentMatch = calculateRelevance(chapter.content.toLowerCase(), queryTerms);
            if (contentMatch > 0) {
                score += contentMatch; // Peso normal para conteúdo
                const excerpt = extractExcerpt(chapter.content, queryTerms);
                matches.push({ type: 'content', text: excerpt });
            }
        }

        if (score > 0) {
            results.push({
                id: chapter.id,
                title: chapter.title,
                score: score,
                matches: matches,
                type: 'chapter'
            });
        }
    });

    // Buscar em definições
    searchDatabase.definitions.forEach(def => {
        let score = 0;
        let matches = [];

        const termMatch = calculateRelevance(def.term.toLowerCase(), queryTerms);
        const defMatch = calculateRelevance(def.definition.toLowerCase(), queryTerms);

        if (termMatch > 0) {
            score += termMatch * 4; // Peso alto para termo
            matches.push({ type: 'term', text: def.term });
        }

        if (defMatch > 0) {
            score += defMatch * 2;
            matches.push({ type: 'definition', text: def.definition });
        }

        if (score > 0) {
            results.push({
                id: `def-${def.term.replace(/\s/g, '-')}`,
                title: def.term,
                definition: def.definition,
                score: score,
                matches: matches,
                type: 'definition'
            });
        }
    });

    // Ordenar por relevância
    results.sort((a, b) => b.score - a.score);

    return results;
}

// ==========================================
// CALCULAR RELEVÂNCIA
// ==========================================
function calculateRelevance(text, queryTerms) {
    let score = 0;

    queryTerms.forEach(term => {
        // Correspondência exata da frase completa
        if (text.includes(queryTerms.join(' '))) {
            score += 10;
        }

        // Correspondência exata do termo
        const regex = new RegExp(`\\b${term}\\b`, 'gi');
        const matches = text.match(regex);
        if (matches) {
            score += matches.length * 2;
        }

        // Correspondência parcial
        if (text.includes(term)) {
            score += 1;
        }
    });

    return score;
}

// ==========================================
// EXTRAIR EXCERTO
// ==========================================
function extractExcerpt(content, queryTerms) {
    const maxLength = 200;

    // Encontrar primeira ocorrência de qualquer termo
    let firstIndex = content.length;
    queryTerms.forEach(term => {
        const index = content.toLowerCase().indexOf(term);
        if (index !== -1 && index < firstIndex) {
            firstIndex = index;
        }
    });

    // Extrair texto ao redor
    const start = Math.max(0, firstIndex - 50);
    const end = Math.min(content.length, firstIndex + maxLength);
    let excerpt = content.substring(start, end);

    // Adicionar reticências
    if (start > 0) excerpt = '...' + excerpt;
    if (end < content.length) excerpt = excerpt + '...';

    // Destacar termos
    queryTerms.forEach(term => {
        const regex = new RegExp(`(${term})`, 'gi');
        excerpt = excerpt.replace(regex, '<mark>$1</mark>');
    });

    return excerpt;
}

// ==========================================
// EXIBIR RESULTADOS
// ==========================================
function displaySearchResults(results, query) {
    if (results.length === 0) {
        searchElements.searchResults.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>Nenhum resultado encontrado</h3>
                <p>Tente usar outros termos de busca ou verifique a ortografia.</p>
                ${getSearchSuggestions(query)}
            </div>
        `;
        return;
    }

    const html = `
        <div class="search-results-header">
            <h3>Resultados da Busca</h3>
            <p>${results.length} resultado${results.length > 1 ? 's' : ''} encontrado${results.length > 1 ? 's' : ''} para "<strong>${query}</strong>"</p>
        </div>
        <div class="results-list">
            ${results.map(result => renderSearchResult(result, query)).join('')}
        </div>
    `;

    searchElements.searchResults.innerHTML = html;

    // Scroll suave para resultados
    searchElements.searchResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ==========================================
// RENDERIZAR RESULTADO
// ==========================================
function renderSearchResult(result, query) {
    if (result.type === 'chapter') {
        return `
            <div class="search-result" data-score="${result.score}">
                <div class="result-header">
                    <h4><a href="#${result.id}">${highlightMatch(result.title, query)}</a></h4>
                    <span class="result-type"><i class="fas fa-book"></i> Capítulo</span>
                </div>
                ${result.matches.map(match => `
                    <p class="result-excerpt">${match.text}</p>
                `).join('')}
                <div class="result-footer">
                    <a href="#${result.id}" class="result-link">
                        <i class="fas fa-arrow-right"></i> Ir para o capítulo
                    </a>
                    <span class="result-score">Relevância: ${Math.round(result.score)}</span>
                </div>
            </div>
        `;
    } else if (result.type === 'definition') {
        return `
            <div class="search-result definition-result" data-score="${result.score}">
                <div class="result-header">
                    <h4>${highlightMatch(result.title, query)}</h4>
                    <span class="result-type"><i class="fas fa-book-open"></i> Definição</span>
                </div>
                <p class="result-definition">${highlightMatch(result.definition, query)}</p>
            </div>
        `;
    }
}

// ==========================================
// DESTACAR MATCH
// ==========================================
function highlightMatch(text, query) {
    const terms = query.split(' ').filter(term => term.length > 2);
    let highlighted = text;

    terms.forEach(term => {
        const regex = new RegExp(`(${term})`, 'gi');
        highlighted = highlighted.replace(regex, '<mark>$1</mark>');
    });

    return highlighted;
}

// ==========================================
// SUGESTÕES DE BUSCA
// ==========================================
function getSearchSuggestions(query) {
    const suggestions = [];

    // Sugestões baseadas em termos comuns
    const commonTerms = ['prescrição', 'prad', 'conversão', 'multa', 'julgamento', 'recurso'];

    commonTerms.forEach(term => {
        if (term.includes(query.toLowerCase()) || query.toLowerCase().includes(term)) {
            suggestions.push(term);
        }
    });

    if (suggestions.length > 0) {
        return `
            <div class="search-suggestions">
                <p><strong>Sugestões:</strong></p>
                ${suggestions.map(s => `
                    <button class="suggestion-btn" onclick="searchElements.searchInput.value='${s}'; performSearch();">
                        ${s}
                    </button>
                `).join('')}
            </div>
        `;
    }

    return '';
}

// ==========================================
// HISTÓRICO DE BUSCA
// ==========================================
function addToSearchHistory(query) {
    searchHistory.unshift({
        query: query,
        timestamp: new Date().toISOString()
    });

    // Manter apenas últimas 10 buscas
    searchHistory = searchHistory.slice(0, 10);

    // Salvar no localStorage
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}

function loadSearchHistory() {
    const saved = localStorage.getItem('searchHistory');
    if (saved) {
        searchHistory = JSON.parse(saved);
    }
}

function showSearchHistory() {
    if (searchHistory.length === 0) return '';

    return `
        <div class="search-history">
            <h4>Buscas Recentes</h4>
            <ul>
                ${searchHistory.map(item => `
                    <li>
                        <button onclick="searchElements.searchInput.value='${item.query}'; performSearch();">
                            <i class="fas fa-history"></i> ${item.query}
                        </button>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

// ==========================================
// LIMPAR RESULTADOS
// ==========================================
function clearSearchResults() {
    searchElements.searchResults.innerHTML = showSearchHistory();
}

function showSearchError(message) {
    searchElements.searchResults.innerHTML = `
        <div class="search-error">
            <i class="fas fa-exclamation-circle"></i>
            <p>${message}</p>
        </div>
    `;
}

// ==========================================
// BUSCA AVANÇADA (OPERADORES)
// ==========================================
function parseAdvancedQuery(query) {
    // Suporte para operadores: "frase exata", -excluir, +obrigatório
    const parsed = {
        exact: [],
        include: [],
        exclude: [],
        optional: []
    };

    // Extrair frases exatas
    const exactMatches = query.match(/"([^"]+)"/g);
    if (exactMatches) {
        parsed.exact = exactMatches.map(m => m.replace(/"/g, ''));
        query = query.replace(/"[^"]+"/g, '');
    }

    // Processar termos restantes
    const terms = query.split(' ').filter(t => t.length > 0);
    terms.forEach(term => {
        if (term.startsWith('-')) {
            parsed.exclude.push(term.substring(1));
        } else if (term.startsWith('+')) {
            parsed.include.push(term.substring(1));
        } else {
            parsed.optional.push(term);
        }
    });

    return parsed;
}

// ==========================================
// EXPORTAR RESULTADOS
// ==========================================
function exportSearchResults(results, query) {
    const data = {
        query: query,
        timestamp: new Date().toISOString(),
        total: results.length,
        results: results
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `busca-${query.replace(/\s/g, '-')}-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// Inicializar quando DOM carregar
document.addEventListener('DOMContentLoaded', initSearch);

// Expor funções globalmente para uso inline
window.performSearch = performSearch;
window.searchElements = searchElements;
