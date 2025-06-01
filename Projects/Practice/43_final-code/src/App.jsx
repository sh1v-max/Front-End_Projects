import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { Suspense } from 'react'

function App() {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="animate-pulse text-lg font-semibold text-gray-700">
              Loading...
            </div>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  )
}

export default App
