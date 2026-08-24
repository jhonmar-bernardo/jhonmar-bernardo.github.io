function Home() {
  return (
    <section className="page">
      <p className="eyebrow">Home</p>
      <h2>Designing calm, useful interfaces for the web.</h2>
      <p className="page-copy">
        This layout now uses a persistent sidebar, with `/` serving the Home page and
        separate pages for Projects and Stack.
      </p>

      <div className="panel-grid">
        <article className="panel">
          <h3>What I build</h3>
          <p>Portfolio pages, product interfaces, and content-first layouts.</p>
        </article>
        <article className="panel">
          <h3>How I work</h3>
          <p>Simple structure, deliberate spacing, and strong visual hierarchy.</p>
        </article>
      </div>
    </section>
  )
}

export default Home
