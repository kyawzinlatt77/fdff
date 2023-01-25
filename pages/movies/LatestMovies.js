import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Movie from "../../components/Movie";
import { useQuery } from "urql";
import { GET_MOVIES } from "../../graphql/query";

const LatestMovies = () => {
  const [latest] = useQuery({
    query: GET_MOVIES,
    variables: {
      sort: "date:desc",
    },
  });
  const {
    data: latestData,
    fetching: LatestFetching,
    error: LatestError,
  } = latest;

  if (LatestFetching) return <p>Loading...</p>;
  if (LatestError) return <p>Ugh..{error.message}</p>;
  const LatestMovies = latestData.movies.data;
  return (
    <div>
      <section>
        <div className="flex justify-between">
          <h1 className="p-4 text-black">Latest Movies Lists</h1>
        </div>
        <MovieGallery>
          {LatestMovies.map((movie) => (
            <Movie key={movie.attributes.slug} movie={movie} />
          ))}
        </MovieGallery>
      </section>
     {/* <Link className="text-slate-900" href="/movies/AllMovies">
        view 
      </Link> */}
    </div>
    
     
  );
};

export default LatestMovies;

const MovieGallery = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
