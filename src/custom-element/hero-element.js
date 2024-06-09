class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
    <div class="hero__inner">
        <h1 class="hero__title">Balitiera Resto</h1>
        <p class="hero__tagline">“Balitiera Resto - Rasa Tropis, Kenangan Abadi</p>
    </div>
</div>`;
  }
}

customElements.define('hero-element', HeroElement);
