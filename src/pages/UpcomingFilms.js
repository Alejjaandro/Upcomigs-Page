import {URL_UPCOMINGS, URL_DETAILS} from '../settings';
import { useState, useEffect } from 'react';

import Card from '../components/Card';
import Pages from "../components/Pages";

export default function UpcomingFilms() {

  const [upcomingMovies, setUpcoming] = useState([]);
  const [pages, setPages] = useState({ current: 1, total: undefined });

  useEffect(() => {
    fetch(URL_UPCOMINGS + "&page=" + pages.current)
        .then(response => response.json())
        .then(data => {
          setUpcoming(data.results);
          if (pages.current !== Number(data.page) || pages.total === undefined) {
              setPages(prevPages => { return { ...prevPages, total: data.total_pages } });
          }
        });
  }, [pages]);


  return (
    <div className="pt-5 pb-5 flex-grow-1">
        <h1 className="text-center mb-5">Upcoming Movies:</h1>
        <Pages pages={pages} setPages={setPages} />
        <div className="container d-flex flex-wrap">
            {upcomingMovies.map(movie =><Card movie={movie} id={movie.id}></Card>)}
        </div>
    </div>
  )
}