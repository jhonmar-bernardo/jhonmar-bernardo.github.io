const stack = [
  'React',
  'TypeScript',
  'Vite',
  'CSS Layout Systems',
  'Accessibility',
  'Responsive UI',
]

function Stack() {
  return (
    <section className="page">
      <p className="eyebrow">Stack</p>
      <h2>Tools and patterns I like to keep close.</h2>
      <p className="page-copy">This page can grow into a fuller tech stack or workflow section.</p>

      <div className="chip-row" aria-label="Stack items">
        {stack.map((item) => (
          <span className="chip" key={item}>
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Stack
