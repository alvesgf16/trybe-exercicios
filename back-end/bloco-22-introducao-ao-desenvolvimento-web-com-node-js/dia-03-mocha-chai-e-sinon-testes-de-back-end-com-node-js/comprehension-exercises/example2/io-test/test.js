const fs = require('fs'); // sinon
const sinon = require('sinon'); // sinon
const { expect } = require('chai'); // chai

const leArquivo = require('./leArquivo'); // chai

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD'; // chai

describe('leArquivo', () => { // mocha
  describe('Quando o arquivo existe', () => { // mocha
    before(() => { // sinon
      sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO); // sinon
    }); // sinon

    after(() => { // sinon
      fs.readFileSync.restore(); // sinon
    }); // sinon

    describe('a resposta', () => { // mocha
      it('é uma string', () => { // mocha
        const resposta = leArquivo('arquivo.txt');  // chai
        
        expect(resposta).to.be.a('string');  // chai
      }); // mocha

      it('é igual ao conteúdo do arquivo', () => { // mocha
        const resposta = leArquivo('arquivo.txt');  // chai

        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);  // chai
      }); // mocha
    }); // mocha
  }); // mocha

  describe('Quando o arquivo não existe', () => { // mocha
    before(() => { // sinon
      sinon // sinon
      .stub(fs, 'readFileSync') // sinon
      .throws(new Error('Arquivo não encontrado')); // sinon
    }); // sinon
    
    after(() => { // sinon
      fs.readFileSync.restore(); // sinon
    }); // sinon
    
    describe('a resposta', () => { // mocha
      it('é igual a "null"', () => { // mocha
        const resposta = leArquivo('arquivo_que_nao_existe.txt');  // chai

        expect(resposta).to.be.equal(null);  // chai
      }); // mocha
    }); // mocha
  }); // mocha
}); // mocha