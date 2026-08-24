import { useEffect, useMemo, useState } from 'react'
import './App.css'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Stack from './pages/Stack'

type Route = '/' | '/projects' | '/stack'

const routes: Record<Route, { label: string; description: string }> = {
  '/': { label: 'Home', description: 'Intro and overview' },
  '/projects': { label: 'Projects', description: 'Selected work' },
  '/stack': { label: 'Stack', description: 'Tools and technologies' },
}

function getRoute(pathname: string): Route {
  if (pathname === '/projects') return '/projects'
  if (pathname === '/stack') return '/stack'
  return '/'
}

function App() {
  const [path, setPath] = useState<Route>(() => getRoute(window.location.pathname))

  useEffect(() => {
    const onPopState = () => setPath(getRoute(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const activePage = useMemo(() => {
    switch (path) {
      case '/projects':
        return <Projects />
      case '/stack':
        return <Stack />
      case '/':
      default:
        return <Home />
    }
  }, [path])

  const navigate = (nextPath: Route) => {
    if (nextPath === path) return
    window.history.pushState({}, '', nextPath)
    setPath(nextPath)
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">JM</span>
          <div>
            <p className="eyebrow">Portfolio</p>
            <h1>Jhonmar</h1>
          </div>
        </div>

        <nav className="nav" aria-label="Primary">
          {(Object.entries(routes) as Array<[Route, (typeof routes)[Route]]>).map(
            ([route, item]) => (
              <button
                key={route}
                type="button"
                className={`nav-link ${path === route ? 'active' : ''}`}
                onClick={() => navigate(route)}
              >
                <span>{item.label}</span>
                <small>{item.description}</small>
              </button>
            ),
          )}
        </nav>

        <div className="sidebar-card">
          <p className="eyebrow">Current page</p>
          <strong>{routes[path].label}</strong>
          <span>{routes[path].description}</span>
        </div>
      </aside>

      <main className="content">{activePage}</main>
    </div>
  )
}

export default App
