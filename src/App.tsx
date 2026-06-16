import './App.css'

function App() {
  return (
    <>
      <header className="navbar">
        <span className="logo">perfectPS</span>
        <nav>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="https://github.com/perfectPS" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </header>

      <main>
        <section id="hero">
          <h1>Secure. Fast. Private.</h1>
          <p className="tagline">
            Internet tools built for everyone — starting with PS Secure VPN.
          </p>
          <a className="cta" href="#products">Explore our products</a>
        </section>

        <section id="products">
          <h2>Our Products</h2>
          <div className="cards">
            <div className="card">
              <h3>PS Secure VPN</h3>
              <p>A fast, private VPN with WireGuard — available on iOS, Android, and the web.</p>
              <span className="badge">Coming soon</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} perfectPS. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
