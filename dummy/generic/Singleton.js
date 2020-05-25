/**
 * Singleton
 * ----------------------------------------------------------------------
 * Exemplo de uma classe singleton.
 * 
 * Example of a singleton class.
 * 
 * @since 0.0.1
 */
export class Singleton {
  // PROPRIEDADES ESTÁTICAS
  // STATIC PROPERTIES
  // --------------------------------------------------------------------
  
  /**
   * Guarda uma instância desta classe, garantindo que será um singleton.
   * 
   * Stores an instance of this class, makes sure it's a singleton.
   * 
   * @type {this}
   * @static
   */
  static INSTANCE;
  
  // LIFECYCLE
  // --------------------------------------------------------------------
  
  /**
   * Construtor.
   * Constructor.
   * 
   * @returns {this}
   */
  constructor () {
    let _name = this.constructor.name;
    if (_name === "Singleton") {
      throw new TypeError(
        `Class '${_name}' cannot be instantiated on its own.`
      );
    }
    
    if (this.constructor.INSTANCE) return this.constructor.INSTANCE;
    this.constructor.INSTANCE = this;
  }
}
