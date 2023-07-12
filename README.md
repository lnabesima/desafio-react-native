# Desafio React Native

Este é um projeto para demonstração de conhecimento e habilidade na
tecnologia **React Native**.
Neste projeto, ao realizar login o usuário é direcionado à uma tela que
lista todos os usuários cadastrados na plataforma.
Os dados de login e dos usuários ficam armazenados na memória interna do
dispositivo, de modo que não será necessário fazer uma nova requisição para
a API para _logar_ na aplicação ou exibir os usuários.

## Como executar a aplicação localmente:

1. Clone o repositório para sua máquina;
2. Instale as dependências com o comando `npm install`;
3. Execute a aplicação com o comando `npm start` ou `npx expo start --clear`;
4. Nesse momento você pode executar a aplicação no seu emulador de
   preferência (**Android** ou **iOS**) ou escanear o QR Code gerado no
   terminado no
   seu dispositivo físico, usando o
   aplicativo [Expo Go](https://expo.dev/client).

## Tecnologias Utilizadas:

- Expo;
- React Native;
- Styled Components;
- TypeScript;
- Axios;
- Async Storage.

### Pontos a melhorar/refatorar:

- Criar um método para cadastro do usuário;
- Criar um método para paginação da lista de usuários cadastrados;
- Criar um modal que exiba os detalhes do cadastro do usuário.