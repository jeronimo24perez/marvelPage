import MovieList from "./movies/pages/movieList.tsx";
import {BrowserRouter, Routes, Route} from 'react-router'
import MovieDetail from "./movies/pages/movieDetail.tsx";
import SeriesList from "./series/pages/seriesList.tsx";
import SeriesDetail from "./series/pages/seriesDetail.tsx";
import Characters from "./characters/pages/characters.tsx";
import ActorDetail from "./characters/pages/actorDetail.tsx";
import Home from "./home/pages/home.tsx";
import Footer from "./shared/components/Footer.tsx";
function App() {

  return (
    <div className="flex flex-col min-h-screen">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path='/movies' element={<MovieList/>}/>
                <Route path='/movie/:id' element={<MovieDetail/>}/>
                <Route path='/tv/:id' element={<SeriesDetail />} />
                <Route path='/series' element={<SeriesList />} />
                <Route path='/characters' element={<Characters /> } />
                <Route path='/actor/:id' element={<ActorDetail />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App
