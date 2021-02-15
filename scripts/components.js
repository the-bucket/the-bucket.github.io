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

          <a href="https://the-bucket.github.io">home</a>

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
          <div class="navli" id="other-nav">

          <a href="other.html">other</a>

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
