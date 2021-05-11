import { useEffect, useState } from "react";
import CardList from './Components/CardList'
import Navigation from "./Components/Navigation";
import SearchField from "./Components/SearchField";
import { GlobalStyle } from "./Components/StyledComponents/StyledComponents";
import {IMedia} from './Components/CardList'
import MediaDetails from "./Components/MediaDetails";
import { getPopularMovies, getPopularTvShows, searchMovies, searchTvShows } from "./API/Api";
import PaginationComp from "./Components/PaginationComp";

const App = () => {

  const [value, setValue] = useState<number>(0);
  const [searchQry,setSearchQry] = useState<string>("");
  const [mediasArr,setMediasArr] = useState<IMedia[]>();
  const [searchFlag,setSearchFlag] = useState("");
  const [open,setOpen] = useState(false);
  const [media,setMedia] = useState<IMedia>({
    id:"1",
    title:"Dummy",
    name:"Dummy",
    vote_average:1,
    poster_path:"Dummy",
    overview:"Dummy",
    release_date:"Dummy",
  });
  const [page,setPage] = useState(1);
  const [totalPages,setTotalPages] = useState(1);

  const placeHolder = value === 0 ? "Search Movies" : "Search TvShows";

  useEffect(() => {setSearchQry(""); setMediasArr([]);},[value])

  useEffect(() => {
    if(searchQry === "" || !searchQry)
    {
      console.log("Useeffect default")
      setMediasArr([])
      setSearchQry("");
      switch (value) {
          case 0:
            setSearchFlag("movie")
            getPopularMovies(page)
            .then(res => {console.log(res); setMediasArr(res.results); setPage(res.page || 1); setTotalPages(res.total_pages || 1);})
            break;
          case 1:
            setSearchFlag("tv")
            getPopularTvShows(page)
            .then(res => {setMediasArr(res.results); setPage(res.page || 1); setTotalPages(res.total_pages || 1);})
            break;
          default:
            break;
      }
    }
},[value,searchQry,page])

  useEffect(() => {
    console.log("Useeffect search")
    if(searchFlag && searchFlag!==""){
      if(searchQry && searchQry!=="")
      {
        console.log("search qry is" + searchQry)
        switch (searchFlag) {
          case "movie":
            searchMovies(searchQry,page).then(res => {setMediasArr(res.results); setPage(res.page || 1); setTotalPages(res.total_pages || 1);})
            break;
          case "tv":
            searchTvShows(searchQry,page).then(res => {setMediasArr(res.results); setPage(res.page || 1); setTotalPages(res.total_pages || 1);})
            break;
          default:
            break;
        }
      }
    }
},[searchQry,searchFlag,page])

const triggerDialogue = (media: IMedia) => {setOpen(true); setMedia(media)};
const handleDialogueClose = () => setOpen(false);

  return (
    <>
        <GlobalStyle/>
        <Navigation value={value} setValue={setValue}/>
        <SearchField placeHolder={placeHolder} searchqry={searchQry} setSearchqry={setSearchQry}/>
        <CardList mediasArr={mediasArr} triggerDialogue={triggerDialogue}/>
        <MediaDetails open={open} handleClose={handleDialogueClose} media={media}/>
        <PaginationComp page={page} setPage={setPage} totalPages={totalPages}/>
    </>
  );
}

export default App;
