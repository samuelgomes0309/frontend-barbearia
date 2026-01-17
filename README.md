O frontend-barbearia é a interface web do sistema de agendamentos e gestão de serviços de uma barbearia. Desenvolvido com Next.js e TypeScript, ele oferece uma experiência de usuário moderna e responsiva. O projeto utiliza o Chakra UI e Tailwind CSS para estilização e é o ponto de contato do usuário com o backend-barbearia, gerenciando a autenticação, agendamentos e a integração com o Stripe para assinaturas.

✨ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

Categoria
Tecnologia
Descrição
Framework
Next.js
Framework React para produção, com renderização do lado do servidor (SSR).
Linguagem
TypeScript
Superset do JavaScript que adiciona tipagem estática.
Estilização
Chakra UI & Tailwind CSS
Bibliotecas para construção de componentes de UI e utilitários de CSS.
Gerenciamento de Estado
React Context
API nativa do React para gerenciamento de estado global.
Requisições HTTP
Axios
Cliente HTTP baseado em Promises para fazer requisições à API.
Autenticação
JWT & Nookies
JSON Web Tokens para autenticação e nookies para manipulação de cookies.




⚙️ Funcionalidades Principais

O sistema oferece as seguintes funcionalidades através de sua interface:

•
Autenticação de Usuário: Login e registro de clientes.

•
Gestão de Assinaturas: Interface para o usuário gerenciar sua assinatura via Stripe.

•
Gestão de Serviços/Cortes: Visualização e agendamento de serviços disponíveis.

•
Painel do Usuário: Área logada para visualização de perfil e agendamentos.

🛠️ Instalação e Configuração

Para rodar o projeto localmente, siga os passos abaixo:

Pré-requisitos

Certifique-se de ter o Node.js (versão 18+) e o yarn (ou npm/pnpm) instalados em sua máquina.

1. Clonar o Repositório

Bash


git clone https://github.com/samuelgomes0309/frontend-barbearia.git
cd frontend-barbearia


2. Instalar Dependências

Utilize o gerenciador de pacotes de sua preferência:

Bash


# Usando yarn (recomendado pelo lock file )
yarn install

# Ou usando npm
npm install


3. Configuração de Variáveis de Ambiente

O projeto utiliza variáveis de ambiente para configurar a URL da API.

Crie um arquivo .env.local na raiz do projeto e adicione a seguinte variável:

Plain Text


# URL da API do Backend (ex: http://localhost:3333 )
NEXT_PUBLIC_API_URL="http://localhost:3333"


Observação: O valor padrão http://localhost:3333 deve ser ajustado para o endereço onde o seu backend-barbearia está rodando.

4. Rodar a Aplicação

Inicie o servidor de desenvolvimento:

Bash


yarn dev

# ou npm run dev


O frontend estará acessível em http://localhost:3000.

