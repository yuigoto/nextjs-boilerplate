/**
 * Singleton
 * ----------------------------------------------------------------------
 * Declares basic definitions for a singleton-type class in JavaScript, just 
 * inherit from this class and you'll have singleton objects.
 * 
 * IMPORTANT:
 * The class has a lock that throws an error whenever you instantiate it on 
 * its own, without extending it.
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
   * Constructor.
   * 
   * @returns {this}
   */
  constructor () {
    let constructorName = this.constructor.name;
    if (this.constructor.name === "Singleton") {
      throw new TypeError(
        `Class '${constructorName}' cannot be instantiated on its own.`
      );
    }

    if (this.constructor._instance) return this.constructor._instance;
    this.constructor._instance = this;
  }
}
