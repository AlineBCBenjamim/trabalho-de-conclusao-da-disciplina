/*
Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o último pagamento.
Pagamentos serão armazenados como objetos Javascript dentro de uma lista de pagamentos. Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor. Quando um pagamento for realizado e o valor for maior que 100.00, o pagamento também terá a propriedade categoria como 'cara', caso contrário, a propriedade categoria ficará como 'padrão'. O método de consultar trará apenas o último pagamento.
  
  ex. 
  const servicoDePagamento = new ServicoDePagamento();
  servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
  console.log(servicoDePagamento.consultarUltimoPagamento());
  {
     codigoBarras: '0987-7656-3475',
     empresa: 'Samar',
     valor: 56.87,
     categoria: 'cara'
  }

*/
export default class ServicosDePagamentoEConsulta {
  #servicos;

  constructor() {
    this.#servicos = [];
  }
  servico(codigoBarras, empresa, valor, categoria) {
    if (valor > 100.0) {
      categoria = "Cara";
    } else {
      let categoria = "Padrão";
    }

    this.#servicos.push({
      codigoBarras: codigoBarras,
      empresa: empresa,
      valor: valor,
      categoria: categoria,
    });
  }
  consultarUltimoPagamento() {
    return this.#servicos.at(-1);
  }
}

/*const servicosDePagamentoEConsulta = new ServicosDePagamentoEConsulta();

servicosDePagamentoEConsulta.servico("0987-7656-3475","Samar", 156.87,"Conta");
servicosDePagamentoEConsulta.servico("2937-7823-3512","Solar", 80.56, "Padrão");

console.log(servicosDePagamentoEConsulta.consultarUltimoPagamento());/*