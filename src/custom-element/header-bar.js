class HeaderBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#mainContent" class="skip-link">Menuju ke konten</a>
      <header class="header">
      <div class="header__inner">
          <h1 class="header__title">Balitiera Resto</h1>
          <button id="menu" class="header__menu">☰</button>
      </div>
      <nav id="drawer" class="nav">
          <ul class="nav__list">
              <li class="nav__item"><a href="#/home">Home</a></li>
              <li class="nav__item"><a href="#/like">Restaurant Favorit</a></li>
              <li class="nav__item"><a href="https://github.com/RegaAG" target="_blank">About Us</a></li>
          </ul>
      </nav>
  </header>`;
  }
}

customElements.define('header-bar', HeaderBar);
