import ServicosDePagamentoEConsulta from "../src/servicosDePagamentoEConsulta.js"
import assert from "node:assert";

describe('Serviços de Pagamento e Consulta', function(){
    it('Validar se o pagamento for maior que R$ 100.00 reais a categoria será Cara', function(){
        const servicosDePagamentoEConsulta = new ServicosDePagamentoEConsulta();
        servicosDePagamentoEConsulta.servico("0987-7656-3475", "Solares", 150.87, "Cara");
        const retorno = servicosDePagamentoEConsulta.consultarUltimoPagamento();
        assert.equal(retorno.categoria, "Cara");
    })
    it("Validar se o pagamento for menor que R$ 100.00 reais a categoria será Padrão", function () {
        const servicosDePagamentoEConsulta = new ServicosDePagamentoEConsulta();
        servicosDePagamentoEConsulta.servico('1234-5678-9101','Lunar', 89.09, "Padrão");
    });
    it("Validar o método de consulta, trará apenas o último pagamento ", function () {
      const servicosDePagamentoEConsulta = new ServicosDePagamentoEConsulta();
      servicosDePagamentoEConsulta.servico(
        "0987-7656-3475",
        "Solares",
        150.87,
        "Cara",
      );
      servicosDePagamentoEConsulta.servico(
        "1234-5678-9101",
        "Lunar",
        89.09,
        "Padrão",
      );
      const retorno = servicosDePagamentoEConsulta.consultarUltimoPagamento();
      assert.equal(retorno.codigoBarras, "1234-5678-9101");
      assert.equal(retorno.empresa, "Lunar");
      assert.equal(retorno.valor, 89.09);
      assert.equal(retorno.categoria, "Padrão");
    });
})