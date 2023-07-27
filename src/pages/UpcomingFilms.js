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
    <div className='m-3'>
        <h1 className='mb-5'>Upcoming Movies:</h1>
        <Pages pages={pages} setPages={setPages} />
        <div className='d-flex flex-wrap'>
            {upcomingMovies.map(movie =><Card movie={movie} id={movie.id}></Card>)}
        </div>
    </div>
  )
}