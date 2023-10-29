import {URL_UPCOMINGS} from '../settings';
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
    <div className="pt-5 pb-5">
        <h1 className="text-center mb-5 fw-bold">UPCOMING MOVIES:</h1>
        <Pages pages={pages} setPages={setPages} />
        <div className="d-flex flex-wrap justify-content-center">
            {upcomingMovies.map(movie =><Card movie={movie} id={movie.id}></Card>)}
        </div>
        <Pages pages={pages} setPages={setPages} />
    </div>
  )
}