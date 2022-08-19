import { Suspense, lazy } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loading from '../layouts/Loading'
import ProtectedRoute from './protected-route'

const SignIn = lazy(() => import('../pages/public/signin'))
const Characters = lazy(() => import('../pages/public/characters'))
const CharacterDetails = lazy(() => import('../pages/public/characterDetail'))
const Favorites = lazy(() => import('../pages/private/favorites'))

function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={<Characters title="Rick&Morty | Suflex" />}
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignIn />} />
          <Route
            path="/character-details/:id"
            element={
              <ProtectedRoute>
                <CharacterDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/favorites"
            element={
              <ProtectedRoute>
                <Favorites title="Rick&Morty | Favoritos" />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default AppRoutes
