import { Route, Routes } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { Issue } from './pages/Issue'
import { DefaultLayout } from './layout/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/issue/:issueNumber" element={<Issue />} />
      </Route>
    </Routes>
  )
}
