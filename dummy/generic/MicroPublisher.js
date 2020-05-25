/**
 * MicroPublisher
 * ----------------------------------------------------------------------
 * Exemplo de um singleton publisher/subscriber simples.
 * 
 * Example of a simple singlton publisher/subscriber.
 * 
 * @since 0.0.1
 */
export class MicroPublisher {
  /**
   * Instância de `MicroPublisher`, garante que seja um singleton.
   * 
   * Instance of `MicroPublisher`, makes sure it's a singleton.
   * 
   * @type {MicroPublisher}
   */
  static Ò_Ó;
    
  /**
   * Armazena chaves que guardam vetores com funções que observam quando dados 
   * são publicados em um tópico.
   * 
   * Stores keys which hold arrays with listener functions for data published 
   * to each topic.
   * 
   * @type {Object}
   */
  static TOPICS = {};
  
  /**
   * Construtor.
   * 
   * Muito brabo, não incomode!
   * 
   * Constructor.
   * 
   * It's very angry, do not disturb!
   */
  constructor () {
    if (this.constructor.Ò_Ó) return this.constructor.Ò_Ó;
    this.constructor.Ò_Ó = this;
  }
  
  /**
   * Publica um conjunto de dados dentro de um tópico, e os despacha para as 
   * funções observadoras.
   * 
   * @param {string} topic 
   * @param {*|Object} data 
   */
  publish (topic, data) {
    const {
      TOPICS
    } = MicroPublisher;
    const HASOWN = TOPICS.hasOwnProperty;
    
    // Se o tópico não existir, para
    // Topic does not exists, stop
    if (!HASOWN.call(TOPICS, topic)) return;
    
    TOPICS[topic].forEach((item) => {
      item(data !== undefined ? data : {});
    });
  }
  
  subscribe (topic, listener) {
    const {
      TOPICS
    } = MicroPublisher;
    const HASOWN = TOPICS.hasOwnProperty;
    
    // Cria tópico se não existe
    // Create topic if not exists
    if (!HASOWN.call(TOPICS, topic)) TOPICS[topic] = [];
    
    // Adiciona listener e pega o ID
    // Push listener and get ID
    let _idx = TOPICS[topic].push(listener) - 1;
    
    // Retorna unsubscriber
    // Returns unsubscriber
    return {
      unsubscribe: () => {
        delete TOPICS[topic][_idx];
      }
    }
  }
}
