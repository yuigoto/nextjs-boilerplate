/**
 * PubSub
 * ----------------------------------------------------------------------
 * Exemplo de um PubSub simples.
 * 
 * IMPORTANTE:
 * NÃO é um singleton, o que seria ideal.
 *
 * @since     0.0.1
 */
const PubSub = () => {
  /**
   * Guarda todos os tópicos e actions em grupos de chave/valor.
   * 
   * Chaves são tópicos que armazenam arrays que guardam funções/métodos. Cada 
   * uma destas funções deve aceitar um objeto contendo toda a informação a ser 
   * publicada em um tópico.
   * 
   * IMPORTANTE:
   * Todas as funções sobre o mesmo tópico recebem o MESMO objeto, não as 
   * modificando em cadeia.
   * 
   * @type {Object}
   */
  let items = {};

  /**
   * Handle para o método `hasOwnProperty` em `items`.
   * 
   * @type {Function}
   */
  let hasOwn = items.hasOwnProperty;

  /**
   * Publica um update para um tópico em `items`.
   * 
   * O parâmetro `info` é enviado para TODOS os listeners deste tópico.
   * 
   * @param {String} topic 
   *    Nome do tópico a ser publicado
   * @param {Object} info 
   *    Informação a ser publicada para o tópico
   * @private 
   */
  const _publish = (topic, info) => {
    // Sem tópico, retorna
    if (!hasOwn.call(items, topic)) return;

    items[topic].forEach(item => {
      item(info !== undefined ? info : {});
    })
  };

  /**
   * Adiciona um listener/observador para um tópico, que verificará qualquer 
   * alteração/publicação do mesmo.
   * 
   * @param {String} topic 
   *    Nome do tópico para inscrever o observador
   * @param {Function} listener 
   *    Função para o listener, que receberá o objeto `info` quando o tópico 
   *    sofrer uma publicação
   * @returns {Object} 
   *    Objeto contendo um único método para remover a inscrição do listener
   */
  const _subscribe = (topic, listener) => {
    // Sem tópico, cria um
    if (!hasOwn.call(items, topic)) items[topic] = [];

    // Adiciona listener
    let _idx = items[topic].push(listener) - 1;

    // Retorna objeto com método para cancelar assinatura do tópico
    return {
      remove: () => {
        delete items[topic][_idx];
      }
    };
  };

  // Retorna métodos
  return {
    publish: _publish, 
    subscribe: _subscribe
  }
};

export default PubSub();
