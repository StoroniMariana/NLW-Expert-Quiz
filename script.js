const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um banco de dados",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação de valores e tipos",
        "Atribuição de valor",
        "Operador lógico AND",
      ],
      correta: 0
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Documento Oficial do JavaScript",
        "Modelo de Objeto Distribuído",
        "Modelo de Objeto do Documento",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "console.log()",
        "print()",
        "output()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um callback em JavaScript?",
      respostas: [
        "Um tipo de erro",
        "Uma função passada como argumento para outra função",
        "Um método de loop",
      ],
      correta: 1
    },
    {
      pergunta: "O que é JSON em JavaScript?",
      respostas: [
        "Java Standard Object Notation",
        "JavaScript Object Notation",
        "JavaScript and Object Networking",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'forEach' em arrays em JavaScript?",
      respostas: [
        "Filtrar elementos do array",
        "Iterar sobre elementos do array",
        "Ordenar elementos do array",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Elevação de temperatura em ambientes web",
        "Elevação de escopo de variáveis",
        "Elevação de prioridade de execução",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis em JavaScript?",
      respostas: [
        "Não há diferença",
        "let é utilizado para variáveis mutáveis, const para variáveis imutáveis",
        "const é utilizado para variáveis mutáveis, let para variáveis imutáveis",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item)) 
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
  }