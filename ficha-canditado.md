Seção 1: Instruções para rodar

● Quais variáveis de ambiente são necessárias?
R: Não é necessária nenhuma variável de ambiente para rodar o projeto. A api utilizada é pública, não há integração com banco de dados, não existem dados sensíveis e também não há autenticação. Por esse motivo, não foi necessário configurar variáveis externas.

● Como instalar dependências? 
R: Após clonar o repositório, é necessário executar o comando npm install para instalar todas as dependências listadas no package.json.

● Como rodar o projeto?
R: Após clonar o repositório e instalar as dependências com npm install, executar npm run dev para iniciar o servidor de desenvolvimento.

Seção 2: Decisões de design

● Por que você escolheu essa estrutura de pastas?
R: Escolhi essa estrutura pra priorizar a separação de responsabilidades. A camada da api foi isolada da ui, os tipos foram centralizados em um diretório próprio e o componente foi organizado de forma reutilizável. Essa divisão facilita manutenção futura, melhora a legibilidade do projeto e reduz acoplamento desnecessário entre as partes da aplicação.

● Qual foi a maior dificuldade que você encontrou e como superou?
R: A maior dificuldade foi pensar em uma estratégia para exibir a imagem dos pokemons na listagem inicial, já que o endpoint /pokemon?limit=151 não retorna diretamente a imagem, apenas o nome e a url de detalhes.
Eu analisei a resposta da api, percebi que a url de detalhes continha o id do pokemon. A partir disso, extraí o id realizando o parsing da string e utilizei a url pública das sprites para montar dinamicamente o caminho da imagem.
Essa abordagem evitou a necessidade de realizar uma segunda requisição para cada item da lista.

● O que você não teve tempo de fazer (dentro do timebox) e como você faria se tivesse mais tempo?
R: Dentro do tempo disponível, eu priorizei a implementação dos requisitos essenciais e a organização do código. Não consegui terminar as três últimas funcionalidades do bônus. Caso tivesse mais tempo, implementaria um sistema de cache simples para evitar requisições repetidas ao navegar entre páginas, um botão de “voltar” na tela de detalhes para melhorar a experiência do usuário, o sistema de favoritos utilizando context api e melhorias visuais como skeleton loading em vez de texto simples de carregamento.

Seção 3: Link para Deploy (Bônus)
R: https://desafio-tecnico-pokedex.vercel.app/

Seção final: Recomendações
● Escreva aqui dicas, melhorias e recomendações sobre este desafio.
R: Algumas melhorias que anotei, que poderia enriquecer ainda mais a experiência, seria padronizar melhor os estados de erro com mensagens mais específicas, implementar persistência dos favoritos no localStorage, adicionar feedback visual mais elaborado para estados de loading, o botão para voltar para homePage e melhorar acessibilidade com uso de atributos ARIA.