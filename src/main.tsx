import { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './theme.css'
import './theme-refinements.css'
import './skills-dashboard.css'
import './contact-form.css'
import './experience.css'

const App = lazy(() => import('./pages/Portfolio'))

createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<div className="app-loader"><span>AM</span><i /></div>}><App /></Suspense>,
)
