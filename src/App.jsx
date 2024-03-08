import useHashNavigation from "./Components/CustomHooks/HashNavigation.jsx";
import Article from "./Components/RoutesComponent/Article.jsx";
import Contact from "./Components/RoutesComponent/Contact.jsx";
import {NotFound} from "./Components/RoutesComponent/NotFound.jsx";
import Home from "./Components/RoutesComponent/Home.jsx";
import {Header} from "./Components/Utilities/Header.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useDocumentTitle } from "@uidotdev/usehooks";
function App() {

  const {page, param} = useHashNavigation()

    const currentPage = GetPageContent(page, param)

    useDocumentTitle("Mon blog | Accueil ");
  return (
      <>
          <Header page={page}/>

          {currentPage}
      </>

  )
}


function GetPageContent(page, param) {


    if (page === "post") {
        return <Article />
    }else if (page === "contact") {
        return <Contact/>
    }else if (page === "home") {
        return <Home/>
    }
    if (param !== null) {
        return <Article postId={param} />
    }

    return <NotFound page={page}/>


}

export default App
