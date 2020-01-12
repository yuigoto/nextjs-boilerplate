/**
 * PubSub
 * ----------------------------------------------------------------------
 * Simple pub/sub example.
 *
 * @since     0.0.1
 */
const PubSub = () => {
  /**
   * Stores topics and actions in key/value pairs.
   * 
   * Keys are topics that store arrays containing actions. Each of these should 
   * accept a value containing the information to be published under a topic.
   * 
   * IMPORTANT:
   * All functions under the same topic receive the SAME object, not modifying 
   * them in any way.
   * 
   * @type {Object}
   */
  let items = {};

  /**
   * Handle for the `hasOwnProperty` method in `items`.
   * 
   * @type {Function}
   */
  let hasOwn = items.hasOwnProperty;

  /**
   * Publishes an update for a topic under `items`.
   * 
   * The `payload` parameter is sent to ALL listeners under this topic.
   * 
   * @param {String} topic 
   *    Topic name
   * @param {Object} payload 
   *    Information to be published
   * @private 
   */
  const _publish = (topic, payload) => {
    if (!hasOwn.call(items, topic)) return;
    items[topic].forEach(item => {
      item(payload !== undefined ? payload : {});
    })
  };

  /**
   * Adds a listener/observer for a topic.
   * 
   * @param {String} topic 
   *    Topic name
   * @param {Function} listener 
   *    Listener function, accepts the `payload` object each time a topic is 
   *    updated/published
   * @returns {Object} 
   *    An object containing a single method used to unsubscribe the listener
   */
  const _subscribe = (topic, listener) => {
    // Create topic if non exists
    if (!hasOwn.call(items, topic)) items[topic] = [];

    // Add listener
    let _idx = items[topic].push(listener) - 1;
    
    return {
      remove: () => {
        delete items[topic][_idx];
      }
    };
  };
  
  return {
    publish: _publish, 
    subscribe: _subscribe
  }
};

export default PubSub();
