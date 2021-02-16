class HeaderPart extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
      <div class="header">
        <h1>the bucket.</h1>
      </div>

    </header>
    <nav id="navbar">

      <div class="highlight" id="highlight">
      </div>

      <ul id="test">
        <li>
          <div class="navli" id="index-nav">

          <a href="index.html">home</a>

          </div>
        </li>
        <li>
          <div class="navli" id="ramblings-nav">

          <a href="ramblings.html">ramblings</a>

          </div>
        </li>
        <li>
          <div class="navli" id="tokipona-nav">

          <a href="tokipona.html">toki pona</a>

          </div>
        </li>
        <li>
          <div class="navli" id="misc-nav">

          <a href="misc.html">misc</a>

          </div>
        </li>
        <li>
          <div class="navli" id="people-nav">

          <a href="people.html">people</a>

          </div>
        </li>
        <li>
          <div class="navli" id="about-nav">

          <a href="about.html">about</a>

          </div>
        </li>
      </ul>

    </nav>
    `
  }
}

customElements.define('header-part', HeaderPart);
