import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

/**
 * DummyComponent
 * ----------------------------------------------------------------------
 * Exemplo de componente de classe.
 *
 * @since   0.0.1
 */
class DummyComponent extends Component {
  // PROPRIEDADES
  // --------------------------------------------------------------------

  /**
   * Status de montagem do componente.
   *
   * Podemos utilizá-lo para definir se o componente está pronto, ou não para
   * executar algo como atualizações de state.
   *
   * Seu uso, porém, é opcional.
   *
   * @type {Boolean}
   * @private
   */
  _mounted = false;

  /**
   * Objeto contendo pares chave/valor com valores para o state da aplicação.
   *
   * @type {Object}
   */
  state = {};

  // MÉTODOS ESTÁTICOS
  // --------------------------------------------------------------------

  /**
   * Executado após um componente ser instanciado ou ao receber novas props.
   *
   * Retorna um objeto para atualizar o estado derivado ou `null`, se nenhuma
   * alteração deve ser realizada ao receber novas props.
   *
   * Executado também quando um componente pai causa a re-renderização deste
   * componente.
   *
   * Chamar `this.setState` NÃO executa este método.
   *
   * IMPORTANTE:
   * - RECOMENDA-SE COMPARAR VALORES ANTERIORES E NOVOS!
   * - ESTE MÉTODO É RARAMENTE USADO, recomendável utilizar soluções simples.
   *
   * @param {*} props
   *     Props atualizadas
   * @param {*} state
   *     State atualizado
   * @returns {*}
   */
  static getDerivedStateFromProps (props, state) {
    return null;
  }

  // LIFECYCLE
  // --------------------------------------------------------------------

  /**
   * Construtor.
   *
   * @param {*} props
   *     Objeto contendo pares chave/valor com as propriedades e atributos a
   *     serem passados ao componente
   */
  constructor (props) {
    super(props);

    // Você pode fazer bootstrapping de state aqui também
    this.state = {};

    /*
      Vinculando métodos ao `this` da instância (leia mais na descrição).
     */
    this.metodoTesteA = this.metodoTesteA.bind(this);
  }

  /**
   * Executado após a montagem do componente.
   */
  componentDidMount () {
    this._mounted = true;
  }

  /**
   * Executado antes do componente ser desmontado e destruído.
   */
  componentWillUnmount () {
    this._mounted = false;
  }

  /**
   * Informa ao React se o output do componente deve ser afetado, ou não, por
   * uma eventual mudança no contexto, props ou state.
   *
   * Retornando `false` ele previne que o componente seja renderizado novamente.
   *
   * Isto, porém, bloqueia a execução dos seguintes métodos:
   * - `componentWillUpdate`
   * - `componentDidUpdate`
   *
   * Retorno padrão é `true`.
   *
   * @param {*} nextProps
   *     Novos valores passados às props
   * @param {*} nextState
   *     Estado atualizado do componente
   * @param {*} nextContext
   *     Próximo status do contexto do componente
   * @returns {Boolean}
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
   * @param {*} prevProps
   *     Props passadas anteriormente ao componente
   * @param {*} prevState
   *     Estado anterior do componente
   * @param {*} snapshot
   *     Snapshot contendo o status do DOM logo antes de ser atualizado, é o
   *     valor retornado por `getSnapshotBeforeUpdate`
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
   * - NÃO use limites de erro para controle de fluxo de aplicação;
   * - NÃO CAPTURA UM ERRO DENTRO DE SI MESMO;
   *
   * @param {*} error
   *     Erro lançado pelo React
   * @param {*} errorInfo
   *     Informações detalhadas do erro
   */
  componentDidCatch (error, errorInfo) {
  }

  /**
   * Executado antes que o output mais recente de `render()` seja comitado
   * (para a árvore do DOM, por exemplo). Isso habilita o componente à capturar
   * algumas informações do DOM antes que ele seja potencialmente alterado.
   *
   * Qualquer valor retornado por este método será passado como terceiro
   * parâmetro
   *
   * @param {*} prevProps
   *     Props passadas anteriormente ao componente
   * @param {*} prevState
   *     Estado anterior do componente
   */
  getSnapshotBeforeUpdate (prevProps, prevState) {
    return null;
  }

  // MÉTODOS
  // --------------------------------------------------------------------

  /**
   * Retorna o status de montagem do componente.
   *
   * @returns {Boolean}
   */
  componentIsMounted = () => {
    return this._mounted;
  };

  /**
   * Este método encontra-se fora do lifecycle do React, portanto ele não está
   * vinculado ao `this` da instância, pertencendo à outro escopo.
   *
   * Para evitar problemas como método não declarado ou valores não encontrados,
   * realizamos o binding do método no construtor.
   *
   * @returns {Boolean}
   */
  metodoTesteA () {
    return true;
  }

  /**
   * Este método é declarado como um class field para evitar a necessidade de
   * usar `bind(this)` e vincular o método ao escopo da instância.
   *
   * É a versão "otimizada" do método acima.
   *
   * P.s.: digo "otimizada", pois possui um memory footprint um pouco maior.
   *
   * @returns {Boolean}
   */
  metodoTesteB = () => {
    return false;
  };

  // OUTPUT
  // --------------------------------------------------------------------

  /**
   * Renderiza o componente.
   *
   * É o único método obrigatório na classe.
   *
   * @returns {*}
   */
  render () {
    return null;
  }
}

// PROP TYPES
// ----------------------------------------------------------------------

// Define os valores padrões para props que necessitarem
DummyComponent.defaultProps = {
  id: null,
  className: null
};

// Define o tipo de dados para cada prop aceita pelo componente
DummyComponent.propTypes = {
  id: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
};

// REDUX
// ----------------------------------------------------------------------

/**
 * Mapeia o `state` da store do Redux para props do componente.
 *
 * @param {*|Object} state
 *     Objeto contendo o state diretamente da Store do Redux
 * @returns {*|Object}
 */
const mapStateToProps = state => ({
});

/**
 * Mapeia o uso de `dispatch()` do Redux para props do componente.
 *
 * @param {*|Function} dispatch
 *     Callable responsável por despachar actions para a Store do Redux
 * @returns {*|Object}
 */
const mapDispatchToProps = dispatch => ({
});

DummyComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(DummyComponent);

// ----------------------------------------------------------------------

export default DummyComponent;
