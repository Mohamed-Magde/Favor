import React, { useEffect, useRef, useState } from 'react'
import { navContent } from '../../Data/landing'
import './main.css'

const Navbar = () => {
  const { navBtn,navSearch } = navContent
  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 500
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    
    document.addEventListener('scroll', handleScroll,{
      passive: true
    })
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <nav className={navBackground?"sticky nav":"nav"}>
      <div className="container">
        <div className="nav-menu">
          <i className={navBtn}></i>
        </div>
        <div className="nav-logo">
          <svg
            className="nav-logo-icon"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 112 20"
          >
            <path d="M39.857 2.024h11.066v3.758H44.04v2.876h6.184v3.596h-6.184v6.008h-4.184zM60.269 12.034l-1.511-4.728-1.511 4.728h3.022zm-3.58-10.01h4.23l5.743 16.238h-4.394l-.953-2.906H56.2l-.93 2.906h-4.3l5.719-16.238zM65.216 2.024h4.556l3 10.057 2.975-10.057h4.463l-5.486 16.238h-4.022zM91.655 10.282v-.255c0-2.807-1.349-4.523-3.278-4.523-1.93 0-3.255 1.693-3.255 4.5v.255c0 2.807 1.349 4.524 3.278 4.524 1.953 0 3.255-1.694 3.255-4.5m-10.81.045v-.347c0-4.848 3.185-8.259 7.555-8.259 4.394 0 7.533 3.364 7.533 8.235v.348c0 4.849-3.185 8.259-7.556 8.259-4.394 0-7.533-3.364-7.533-8.236M104.406 9.91c1.418 0 2.255-.81 2.255-2.11v-.047c0-1.391-.883-2.087-2.278-2.087h-2.047V9.91h2.07zm-6.23-7.886h6.393c2.185 0 3.835.58 4.882 1.647.907.904 1.418 2.158 1.418 3.804v.116c0 2.413-1.186 3.92-2.906 4.78l3.347 5.891h-4.719l-2.766-5.034h-1.489v5.034h-4.16V2.024zM28.393 17.026c-1.644-.335-5.353-1.282-7.705-3.334V11.48h4.355c.74 0 1.34-.598 1.34-1.337 0-.738-.6-1.337-1.34-1.337h-4.355V6.594c2.354-2.054 6.068-3 7.709-3.334a13.893 13.893 0 0 1 1.839 6.883c0 3.248-1.187 5.748-1.843 6.883m-25.63-6.883c0-3.248 1.188-5.75 1.844-6.884 1.642.333 5.346 1.275 7.705 3.335v2.212H7.957c-.74 0-1.34.599-1.34 1.337 0 .739.6 1.337 1.34 1.337h4.355v2.212c-2.355 2.054-6.068 3-7.71 3.335a13.897 13.897 0 0 1-1.838-6.884M30.105.978a1.342 1.342 0 0 0-1.253-.517c-.258.036-5.977.865-9.686 3.914a6.445 6.445 0 0 0-2.666-.583 6.446 6.446 0 0 0-2.666.583C10.124 1.326 4.406.497 4.148.461c-.48-.066-.96.131-1.253.517C2.78 1.129.083 4.741.083 10.143c0 5.402 2.696 9.014 2.811 9.165a1.34 1.34 0 0 0 1.254.517c.258-.036 5.977-.865 9.686-3.914a6.445 6.445 0 0 0 2.666.584 6.446 6.446 0 0 0 2.666-.584c3.709 3.05 9.428 3.878 9.686 3.914a1.342 1.342 0 0 0 1.253-.517c.115-.15 2.811-3.763 2.811-9.165 0-5.402-2.696-9.014-2.81-9.165"></path>
          </svg>
        </div>
        <div className="nav-search">
          <i className={navSearch}></i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
