// Testando a rota POST /employees
const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

// - Acessarei meu `rest-client` favorito (PostMan, Insomnia, HTTPie, etc...)
chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../index');

// omitir os `console.log`s dos testes gerando um `stub` pra função
const consoleLogStub = stub(console, 'log');
before(() => consoleLogStub.returns(true));
after(() => consoleLogStub.restore());

describe('Rota POST /employees', () => {
//   - Para um caso de sucesso:
  describe('quando os dados do `body` são válidos', () => {
    let postEmployee;
    let getEmployee;

    before(async () => {
      try {
//     - Farei uma requisição `POST` com os dados corretos para meu
//       end-point `/employee`;
        postEmployee = await chai.request(app)
          .post('/employees')
          .send({
            firstName: "Rodrigo",
            lastName: "Oliveira",
            age: 30,
            city: "TrybeCity",
            street: "Rua Teste",
            number: 42
          });

        const { body : { id } } = postEmployee;

        getEmployee = await chai.request(app)
          .get(`/employees/${id}`);
      } catch (error) {
        console.error(error.message);
      }
    });

//     - Aguardo uma resposta com status `201 - Created`;
    it('retorna 201 - Created', async () => {
      const { status } = postEmployee;

      expect(status).to.be.equals(201);
    });

//     - Essa resposta deve conter também um atributo `id`, no corpo;
    it('retorna um atributo `id`, que é um número', async () => {
      const { body: { id } } = postEmployee;

      expect(typeof id).to.be.equals("number");
    });

//     - Essa resposta deve conter também um atributo `message`,
//       no corpo, com a mensagem `Cadastrado com sucesso`;
    it('retorna uma mensagem `Cadastrado com sucesso`', async () => {
      const { body: { message } } = postEmployee;

      expect(message).to.be.equals('Cadastrado com sucesso');
    });

//     - Farei uma requisição `GET` utilizando esse `id` para meu
//       end-point `/employee/:id`;
//     - Aguardo uma resposta com status `200 - OK`;
    it('é possível consultar a pessoa criada através do `id` retornado', async () => {
      const { body: { id: postId } } = postEmployee;
      const { body: { id: getId } } = getEmployee;

      expect(postId).to.be.equals(getId);
    });

//     - Essa resposta deve conter também um atributo `addresses`,
//       no corpo, com pelo menos um item.
    it('essa consulta também retornou um atributo `addresses`, com pelo menos um item', async () => {
      const { body: { addresses } } = getEmployee;

      expect(addresses.length).to.be.greaterThanOrEqual(1);
    });
  });

//   - Para um caso de falha:
  describe('quando os dados do `body` não são válidos', () => {
    let postEmployee;

    before(async () => {
      try {
//     - Farei uma requisição `POST` com os dados incorretos para meu
//       end-point `/employee`;
        // removendo city
        postEmployee = await chai.request(app)
          .post('/employees')
          .send({
            firstName: "Rodrigo",
            lastName: "Oliveira",
            age: 30,
            street: "Rua Teste",
            number: 42
          });
      } catch (error) {
        console.error(error.message);
      }
    });

//     - Aguardo uma resposta com status `500 - Internal Server Error`;
    it('retorna 500 - Internal Server Error', async () => {
      const { status } = postEmployee;

      expect(status).to.be.equals(500);
    });

//     - Essa resposta deve conter também um atributo `message`,
//       no corpo, com a mensagem `Algo deu errado`;    
    it('retorna uma mensagem `Algo deu errado`', async () => {
      const { body: { message } } = postEmployee;

      expect(message).to.be.equals('Algo deu errado');
    });
  });
});