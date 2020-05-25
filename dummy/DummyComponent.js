import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";

/**
 * DummyComponent
 * ----------------------------------------------------------------------
 * Exemplo de componente.
 * Component example.
 * 
 * @since 0.0.1
 */
class DummyComponent extends Component {
  // PROPRIEDADES
  // PROPERTIES
  // --------------------------------------------------------------------
  
  /**
   * Status de montagem do componente, é opcional.
   * 
   * Component mounting status, using it is optional.
   * 
   * @type {boolean}
   * @private
   */
  _mounted = false;
  
  /**
   * Estado do componente.
   * 
   * Component state.
   * 
   * @type {Object}
   */
  state = {};
  
  // MÉTODOS ESTÁTICOS
  // STATIC METHODS
  // --------------------------------------------------------------------
  
  /**
   * Chamado quando um componente é instanciado ou recebe novas props.
   * 
   * Retorna um objeto para atualizar o state derivado ou `null`, se nenhuma 
   * alteração deve ser realizada ao receber novas props.
   * 
   * Também é executado quando um componente pai causa a re-renderização.
   * 
   * Chamar `this.setState` não executa este método.
   * 
   * IMPORTANTE:
   * - COMPARE VALORES ANTES DE REALIZAR QUALQUER UPDATE
   * - ESTE MÉTODO É RARAMENTE USADO, RECOMENDA-SE SOLUÇÕES MAIS SIMPLES
   * 
   * Called when a component is instantiated or receives new props.
   * 
   * Returns an object to update the derived state or `null`, if no update 
   * should happen when receiving new props.
   * 
   * Also executed when a parent component causes re-rendering.
   * 
   * Calling `this.setState` won't execute this method.
   * 
   * IMPORTANT:
   * - DO COMPARE VALUES BEFORE MAKING ANY UPDATE
   * - THIS METHOD IS RARELY USED, TRY TO USE SIMPLER SOLUTIONS
   * 
   * @param {*} props 
   *     Props atualizadas
   *     Updated props 
   * @param {*} state 
   *     State atualizado 
   *     Updated state 
   * @returns {*}
   */
  static getDerivedStateFromProps (props, state) {
    return null;
  }
  
  // LIFECYCLE
  // --------------------------------------------------------------------
  
  /**
   * Construtor.
   * Constructor.
   * 
   * @param {*} props 
   *     Objeto com pares chave/valor, contendo props e atributos
   *     Object with key/value pairs, containing props and attributes 
   */
  constructor (props) {
    super(props);
    
    // Pré-inicialize o state aqui
    // Bootstrap your state here
    this.state = {};
    
    // Vinculando métodos
    // Binding methods
    this.componentIsMounted = this.componentIsMounted.bind(this);
    this.metodoTesteA = this.metodoTesteA.bind(this);
  }
  
  /**
   * Executado após a montagem do componente.
   * 
   * Executed after the component is mounted.
   */
  componentDidMount () {
    this._mounted = true;
  }
  
  /**
   * Executado antes do componente ser desmontado e destruído.
   * 
   * Executed before the component is unmounted and destroyed.
   */
  componentWillUnmount () {
    this._mounted = false;
  }
  
  /**
   * Informa ao React se o output do componente deve ser afetado, ou não, por
   * uma eventual mudança no contexto, props ou state.
   *
   * Retornando `false` ele previne que o componente seja renderizado novamente, 
   * bloqueando a execução de `componentWillUpdate` e `componentDidUpdate`.
   *
   * Retorno padrão é `true`.
   * 
   * Tell React if the output of the component should be affected, or not, by 
   * an eventual change in the context, props or state.
   * 
   * By returning `false` it prevents the component from re-rendering, though 
   * it blocks execution of `componentWillUpdate` and `componentDidUpdate`.
   * 
   * Default return is `true`.
   * 
   * @param {*} nextProps 
   *     Novos valores passados às props 
   *     New and updated prop values 
   * @param {*} nextState 
   *     Estado atualizado do componente 
   *     Updated component state 
   * @param {*} nextContext 
   *     Próximo status do contexto do componente 
   *     Next component context status
   * @returns {boolean}
   */
  shouldComponentUpdate (nextProps, nextState, nextContext) {
    return true;
  }

  /**
   * Executado logo após um update ocorrer nas props ou state, útil para operar
   * no DOM e gerenciar requests de rede, por exemplo.
   *
   * Não é executado caso `shouldComponentUpdate` retornar `false`.
   * 
   * Invoked after the update occurs, useful to operate on the DOM and manage
   * network requests.
   *
   * Doesn't trigger if `shouldComponentUpdate` returns `false`.
   *
   * @param {*} prevProps
   *     Props passadas anteriormente ao componente
   *     Previously used props
   * @param {*} prevState
   *     Estado anterior do componente
   *     Previous component state
   * @param {*} snapshot
   *     Snapshot contendo o status do DOM logo antes de ser atualizado, é o
   *     valor retornado por `getSnapshotBeforeUpdate`
   *     Snapshot containing the DOM's status before updating, it's the value 
   *     returned by `getSnapshotBeforeUpdate`
   */
  componentDidUpdate (prevProps, prevState, snapshot) {
  }

  /**
   * Transforma o componente em um "React error boundary": um componente que
   * captura erros em qualquer filho na árvore.
   *
   * Use para log de erros e exibição de um eventual fallback caso algo aconteça.
   *
   * IMPORTANTE:
   * - NÃO use limites de erro para controle de fluxo de aplicação
   * - NÃO CAPTURA UM ERRO DENTRO DE SI MESMO
   * 
   * Transforms the component into a React error boundary: a component that
   * catches errors anywhere in their child component tree.
   *
   * Use it to log errors and display a fallback component tree.
   *
   * IMPORTANT:
   * - DO NOT use error boundaries to control application flow
   * - DOES NOT catch an error within itself
   *
   * @param {*} error
   *     Erro lançado pelo React
   *     Error thrown by React
   * @param {*} errorInfo
   *     Informações detalhadas do erro
   *     Detailed error information 
   */
  componentDidCatch (error, errorInfo) {
  }

  /**
   * Executado antes que o output mais recente de `render()` seja comitado
   * (para a árvore do DOM, por exemplo). Isso habilita o componente à capturar
   * algumas informações do DOM antes que ele seja potencialmente alterado.
   *
   * Qualquer valor retornado por este método será passado como terceiro
   * parâmetro em `componentDidUpdate`.
   * 
   * Retorna o snapshot ou `null`.
   * 
   * Invoked before the most recently rendered output is commited (to the DOM,
   * for example). It enables the component to catch some info from the DOM
   * before it is potentially changed.
   *
   * Any value returned by this method will be passed as a parameter to
   * `componentDidUpdate`.
   *
   * Returns a snapshot value or `null`.
   *
   * @param {*} prevProps
   *     Props passadas anteriormente ao componente
   *     Previously used props
   * @param {*} prevState
   *     Estado anterior do componente
   *     Previous component state
   */
  getSnapshotBeforeUpdate (prevProps, prevState) {
    return null;
  }
  
  // MÉTODOS
  // METHODS
  // --------------------------------------------------------------------
  
  /**
   * Retorna o status de montagem do componente.
   * 
   * Returns the component's mounting status.
   * 
   * @returns {boolean}
   */
  componentIsMounted () {
    return this._mounted;
  }
  
  /**
   * Método da classe.
   * 
   * Por culpa do JavaScript, é necessário utilizar `bind()` para vinculá-lo 
   * ao escopo do `this` da classe. Caso contrário o `this` disponível neste 
   * método será o global.
   * 
   * Class method.
   * 
   * Because how JavaScript handles `this`, it's necessary to use `bind()` 
   * to bind it to the `this` in the class' scope. If not done, the `this` 
   * available inside the method will be the global one.
   * 
   * @returns {boolean}
   */
  metodoTesteA () {
    return true;
  }
  
  /**
   * Método declarado como uma propriedade, para evitar a necessidade de 
   * utilizar `bind()` para vincular o escopo.
   * 
   * Existe um downside de usar isso, que é um _memory footprint_  maior.
   * 
   * Method declared as a property, to aviod using `bind()` to bind it to 
   * the class' scope.
   * 
   * The downside of it is that it leaves a larger _memory footprint_.
   * 
   * @returns {boolean}
   */
  metodoTesteB = () => {
    return false;
  };
  
  // --------------------------------------------------------------------
  
  /**
   * Renderiza o componente, sendo o único método realmente obrigatório.
   * 
   * Renders the component, it's the only required method for a component.
   * 
   * @returns {*}
   */
  render () {
    const { props } = this;
    
    let _attr = {
      className: classnames(props.className)
    };
    if (props.id) _attr.id = props.id;
    
    return (
      <>
        <div {..._attr}>
          {props.children}
        </div>
      </>
    );
  }
}

// PROP TYPES
// ----------------------------------------------------------------------

// Define o valor padrão para props que necessitem
// Defines default values for props that require
DummyComponent.defaultProps = {
  id: null,
  className: null
};


// Define o tipo de dados para cada prop aceita
// Defines the data type for each accepted prop
DummyComponent.propTypes = {
  id: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  children: PropTypes.node
};

// REDUX
// ----------------------------------------------------------------------

/**
 * Mapeia o `state` do Redux para props do componente.
 *
 * Maps Redux's `state` to component props.
 *
 * @param {*|Object} state
 *     Objeto contendo o state da aplicação
 *     Object containing the application state
 * @returns {*|Object}
 */
const mapStateToProps = (state) => ({
});

/**
 * Mapeia a função `dispatch()`, do Redux, para props do componente.
 *
 * Map's the `dispatch()` function, from Redux, to component props.
 *
 * @param {*|Function} dispatch
 *     Callable que despacha actions para a store do Redux
 *     Callable that dispatches actions for Redux's store
 * @returns {*|Object}
 */
const mapDispatchToProps = (dispatch) => ({
});

DummyComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(DummyComponent);

// ----------------------------------------------------------------------

export { DummyComponent };
