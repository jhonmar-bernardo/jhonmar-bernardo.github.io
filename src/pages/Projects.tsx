const projects = [
  {
    title: 'Portfolio refresh',
    description: 'A cleaner single-page experience with a dedicated sidebar layout.',
  },
  {
    title: 'Client dashboard',
    description: 'An internal tool concept with clear navigation and focused content areas.',
  },
  {
    title: 'Landing page system',
    description: 'Reusable content sections built to adapt across different campaigns.',
  },
]

function Projects() {
  return (
    <section className="page">
      <p className="eyebrow">Projects</p>
      <h2>Selected work and experiments.</h2>
      <p className="page-copy">A simple showcase area for the projects you want to feature.</p>

      <div className="stack-list">
        {projects.map((project) => (
          <article className="stack-item" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
