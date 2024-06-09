class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
    <p>Hak Cipta &copy; 2024 <a href=''>Balitiera Resto</a></p>
</footer>`;
  }
}

customElements.define('footer-bar', FooterBar);
