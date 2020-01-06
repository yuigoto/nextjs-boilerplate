/**
 * Singleton
 * ----------------------------------------------------------------------
 * Declara definições básicas para classes do tipo singleton in JavaScript.
 * 
 * A propriedade `_instance` é herdada por classes-filha e é responsável por 
 * fornecer o comportamento de singleton.
 * 
 * IMPORTANTE:
 * A classe não pode ser instanciada por si só. Ao invés de usá-la diretamente, 
 * extenda da mesma.
 *
 * @since     0.0.1
 */
export class Singleton {
  // Propriedades Estáticas
  // --------------------------------------------------------------------

  /**
   * Guarda uma instância desta classe, que será retornada a cada instância 
   * criada, garantindo que será um singleton.
   * 
   * @type {this}
   * @static 
   */
  static _instance;

  // Lifecycle
  // --------------------------------------------------------------------

  /**
   * Construtor.
   * 
   * @returns {this}
   */
  constructor () {
    let constructorName = this.constructor.name;
    if (this.constructor.name === "Singleton") {
      throw new TypeError(
        `Classe ${constructorName} não pode ser instanciada por si só.`
      );
    }

    if (this.constructor._instance) return this.constructor._instance;
    this.constructor._instance = this;
  }
}
