export class DomListener {
  constructor($root, listeners = []) {
    // if (!$root) {
    //   throw new Error(`No $root was provided`);
    // }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    console.log(this.listeners);
  }

  removeDOMListeners() {}
}
