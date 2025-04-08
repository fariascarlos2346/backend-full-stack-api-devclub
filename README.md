<h1>PROJETO BACK END AMBURGUERIA NO DEVCLUB FULL STACK</h1>
<p>Iniciei o Projeto estalando Yarn, Instalando Nodemon e Sucrase. 
<br>
  Para rodar nossa aplicação usamos o comando 'yarn dev'.
</p>
<p>
  MVC 
  <br>
  Model => É responsável pela leitura e escrita dos Dados.
  <br>
  VIEW => É camada de interação com o usuário também fazendo a exibição dos dados.
  <br>
  CONTROLLER => O responsável por receber todas as requisições do usuários, controlando qual MODEL usar e qual VIEW será mostrada ao usuário.
</p>
<p>
  Conceitos sobre DOCKER e Criando o Primeiro container Docker.
</p>
<br>
<p>
  Estalando o SEQUELIZE, yarn add sequelize pg pg-store, e yarn add -D sequelize-cli que e a interface de linha de comando.
</p>
<p>
  Criando a primeira migration, que são arquivos onde colocamos as instruções
  para o banco de Dados, lida pelo sequelize, arquivos por arquivos, ler os campos um a um, faz alterações, tira e coloca campos no banco de dados.
  Magration criado com id unico. com dois medodos, up de criar e o down para deletar.
  <br>
  Primeira campo criado de ID unico, campo de nome e email sendo o email unique 'unico'. Campo admin Boolean, verdadeiro ou falso, alem dos Campos para auditorias, created_at e o updated_at.
</p>
<p>
  Criando Model do Usuário, e a Interface que se comunica com o Banco de Dados, com seus Campos e Metodos existentes na tabela. Arquivo 'user' criado para criar um Class.
  <br>
  Model de User criado que Mapeia o que temos no Banco de Dados. Estalando mais um  pacote 'UUID'.
  <br>
  Já estamos conseguindo Persistir os dados no Banco Beekeeper.
  <br>
  Criado Controller de Usuário, validando informações e só deixar informações que não são importantes. Validando dados com YUP, 

</p>
