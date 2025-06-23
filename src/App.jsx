import { useEffect } from "react"
import About from "./components/About/About"
import Home from "./components/Hero/Home"
import Products from "./components/Products/Products"
import { scroller } from "react-scroll"
import { useLocation } from "react-router-dom"
import Contact from "./components/Contact/Contact"

function App() {
  const location = useLocation();

  useEffect(() => {

    switch (location.state?.scrollTo) {
      case 'home':
        scroller.scrollTo('home')
        break;
      case 'about':
        scroller.scrollTo('about')
        break;
      case 'products':
        scroller.scrollTo('products')
        break;
      case 'contact':
        scroller.scrollTo('contact')
        break;
      default:
        scroller.scrollTo('home')
    }

    const htmlElement = document.documentElement;
    htmlElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <Home />
      <About />
      <Products />
      <Contact />
    </>
  )
}

export default App
