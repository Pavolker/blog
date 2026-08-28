---
title: "Briefing Turing - 28/08/2026"
date: 2026-08-28T06:00:00-03:00
draft: false
description: "Briefing Turing de 28/08/2026. Análise diária dos movimentos e transformações no mundo da IA."
tags: [turing, inteligência-artificial, ferramentas, modelos, cotidiano, humano-ia]
---

**BRIEFING TURING — 28 DE AGOSTO DE 2026**

Há um movimento que começa a ficar mais nítido hoje: os agentes de inteligência artificial estão aprendendo a aprender com a própria experiência. Não se trata apenas de modelos maiores ou mais rápidos — embora eles continuem surgindo —, mas de uma mudança na arquitetura fundamental de como esses sistemas acumulam conhecimento ao longo do tempo. Dois acontecimentos, à primeira vista distantes, ajudam a ver o quadro completo: uma executiva do Meta deixou o cargo porque acredita que agentes de IA vão eliminar os primeiros degraus da carreira profissional, e um artigo científico mostrou como agentes podem compilar sua própria experiência em habilidades reutilizáveis. No meio deles, o repositório deepseek-harness ganhou oito mil estrelas no GitHub em cinco dias — sinal de que o interesse em infraestrutura para agentes cresce em ritmo acelerado.

Vale acompanharmos juntos o que esses sinais indicam.

### O QUE ACONTECEU

**WikiSkill: agentes que acumulam experiência.** Pesquisadores publicaram um artigo propondo que agentes de IA possam compilar automaticamente a própria experiência em "habilidades" reutilizáveis. Em vez de um agente começar do zero a cada tarefa, ele aprende com interações anteriores e armazena o que funcionou como um recurso que pode ser invocado depois. O conceito não é novo no campo da pesquisa, mas o artigo apresenta um método para que essa descoberta aconteça de forma autônoma — o agente decide o que merece virar habilidade, não um programador definindo manualmente. É um passo em direção a sistemas que evoluem com o uso.

**Clara Shih deixou o Meta por causa de agentes de IA.** A executiva que liderou soluções empresariais de IA no Meta pediu demissão e deu uma entrevista ao *Platformer* explicando o motivo: ela acredita que agentes de IA vão substituir os primeiros postos da carreira profissional — posições de entrada, estágios, assistência — e que isso está mais próximo do que se imagina. Shih está fundando uma nova empresa focada em requalificação profissional. O relato é relevante porque vem de alguém que trabalhou dentro de uma das maiores empresas de tecnologia do mundo e que esteve envolvida diretamente na construção de produtos de IA.

**Codex agora opera em modo persistente.** A Anthropic lançou uma atualização no Claude Code que permite ao agente manter contexto entre sessões de trabalho. Em vez de perder o estado de uma tarefa quando o terminal é fechado, o agente retoma de onde parou. É uma mudança na direção do que o WikiSkill propõe academicamente: agentes que não esquecem o que aprenderam.

**Token-Level Advertising (LAMA): publicidade em nível de *token*.** Um artigo do arXiv propõe um mecanismo de leilão de anúncios que opera dentro da própria geração dos modelos de IA. Em vez de anúncios em espaços fixos pré-definidos (um banner, um intervalo de vídeo), os anúncios são inseridos na geração *token* a *token* — a IA decide, enquanto escreve a resposta, onde um anúncio patrocinado pode ser relevante. O sistema se chama Latent Advertiser Mixture Auction (LAMA). Ainda é pesquisa, mas aponta para uma transformação no modelo econômico da publicidade na era da geração.

**Como os modelos organizam conhecimento moral.** Outro artigo investiga se grandes modelos de linguagem não apenas detectam conteúdo moral, mas estruturam as relações entre diferentes fundamentos éticos — distinguindo, por exemplo, entre cuidado, justiça, lealdade e autoridade. Os resultados sugerem que sim: os modelos organizam o conhecimento moral de forma hierárquica e relacional, não apenas como uma lista de tópicos. É um lembrete de que esses sistemas não estão apenas processando linguagem — estão, de alguma forma, construindo modelos internos do que é valorizado socialmente.

**DeepSeek Harness cresce 8 mil estrelas em 5 dias.** O repositório deepseek-harness, que serve como infraestrutura de teste para agentes, teve o maior crescimento de estrelas entre os repositórios monitorados, com mais de 1.600 novas estrelas por dia. Ollama (+1.127), Claude Code (+1.090) e Open WebUI (+958) também cresceram, mas o salto do deepseek-harness é desproporcional e recente — sinal de que algo mudou na atenção da comunidade.

### O QUE ESTAMOS OBSERVANDO

O que conecta esses acontecimentos é uma pergunta sobre **continuidade**. Até pouco tempo, um agente de IA era essencialmente sem memória: você dava uma instrução, ele executava e, na próxima interação, começava do zero. Cada conversa, cada tarefa, cada erro era descartado. O que estamos vendo agora são esforços convergentes para romper essa limitação.

O WikiSkill faz isso no plano da pesquisa: agentes que acumulam habilidades a partir da experiência. O Codex persistent mode faz isso no plano do produto: o agente mantém o estado entre sessões. O deepseek-harness, com seu crescimento explosivo, sugere que a comunidade está correndo para construir a infraestrutura que permite essa continuidade. E a saída de Clara Shih do Meta aponta para a consequência social: se os agentes se tornam acumuladores de experiência, o que acontece com as pessoas que ocupam as posições onde essa experiência era tradicionalmente adquirida?

O artigo sobre publicidade em nível de *token* (LAMA) acrescenta uma camada econômica a esse quadro. Se a geração de texto se torna o novo espaço publicitário, quem controla os modelos controla também o fluxo de receita — uma concentração de poder que vai além do que vimos nas plataformas de redes sociais.

Há uma tensão interessante entre o artigo sobre moral e o artigo sobre red-teaming (RedEvoAgent). O primeiro mostra que modelos organizam conhecimento ético de forma sofisticada. O segundo mostra que agentes especializados estão aprendendo a quebrar as proteções desses modelos de forma autônoma. Quanto mais estruturado o conhecimento moral, mais alvos a exploração encontra.

### HUMANO + IA

A entrevista de Clara Shih coloca uma questão direta: se agentes de IA podem aprender com a experiência acumulada, o que acontece com o primeiro emprego? Tradicionalmente, as posições de entrada — estágios, assistência, suporte — existiam não apenas para produzir trabalho, mas para formar profissionais. Alguém começava fazendo tarefas simples, observava colegas mais experientes, cometia erros e aprendia. Era o processo de acumular habilidades.

Se um agente pode fazer o mesmo — e fazer mais rápido, sem precisar de salário ou supervisão constante —, os primeiros degraus da carreira deixam de existir como oportunidades de formação. A pergunta que fica não é apenas "quem fará o trabalho?", mas "como alguém se tornará um profissional experiente se o acesso à experiência foi cortado?"

Curiosamente, o mesmo movimento técnico que ameaça esses postos — a capacidade de acumular experiência — oferece uma pista sobre o que pode se tornar mais valioso nos humanos: não a execução repetitiva de tarefas, mas a curadoria, a avaliação e a decisão sobre quais experiências merecem virar habilidades. Se os agentes aprendem, alguém precisa decidir o que vale a pena ser aprendido.

### UMA IDEIA PARA GUARDAR

**Memória como nova fronteira.** Durante anos, a competição entre modelos de IA foi medida por tamanho de parâmetros, quantidade de dados e pontuação em testes de desempenho. O que está emergindo agora é uma fronteira diferente: a capacidade de um sistema **reter o que aprendeu** e usar esse conhecimento em interações futuras. Não importa apenas o quão inteligente o modelo é no momento da pergunta, mas se ele se torna mais inteligente com o tempo — como um profissional que melhora com a prática. A memória persistente e a evolução de habilidades podem se tornar o próximo campo de disputa mais importante.

### PARA ACOMPANHAR

- **Platformer — "How AI agents 'radicalized' a top Meta exec into quitting her job"** ([link](https://www.platformer.news/clara-shih-new-work-dear-cc-interview-meta-salesforce/)). A entrevista completa com Clara Shih, que contextualiza melhor as motivações e o diagnóstico dela sobre o mercado de trabalho.
- **WikiSkill no arXiv** ([2608.27454](http://arxiv.org/abs/2608.27454)). O artigo que propõe a compilação autônoma de experiência em habilidades reutilizáveis para agentes.
- **Token-Level Advertising (LAMA)** ([2608.27382](http://arxiv.org/abs/2608.27382)). O artigo que propõe publicidade em nível de *token* na geração de IA — um vislumbre do futuro econômico da interação com modelos.
- **TLDR AI (28/08)** ([link](https://tldr.tech/ai/2026-08-28)). Para os leitores que querem acompanhar os lançamentos do dia (Gemini Omni 1.1, Cohere Parse e o modo persistente do Codex).

---

Se agentes podem acumular experiência, e se esse acúmulo ameaça os primeiros degraus da carreira profissional, então uma pergunta fica em aberto: **estamos preparados para um mundo onde entrar no mercado de trabalho exige, desde o primeiro dia, algo que os agentes ainda não sabem fazer?**
