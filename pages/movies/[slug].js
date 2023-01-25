import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "urql";
import { useRouter } from "next/router";
import { GET_MOVIE } from "../../graphql/query";
import styled from "styled-components";
import Watchmovies from "./Watchmovies";

const MovieDetails = () => {
  const { query } = useRouter();

  const [results] = useQuery({
    query: GET_MOVIE,
    variables: { slug: query.slug },
  });
  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Ugh..{error.message}</p>;

  const movie = data.movies.data[0].attributes;
  const { title, description, image, type, time, slug } = movie;
  const { url, width, height } = image.data.attributes.formats.medium;

  return (
    <MovieDetailsStyled className="container mx-auto">
      <Image className="my-5" src={url} alt={title} width={width} height={height} />
      <MovieInfo>
        <h2 className="text-2xl">{title}</h2>
        <div className="flex gap-2">
          <span className="px-3 py-1 rounded-xl border-2 border-black">
            {type}
          </span>
          <span></span>
          <span className="px-3 py-1 rounded-xl border-2 border-black">
            {time}m
          </span>
        </div>
        <div>
          <Link href="./Watchmovies">
            <button
              className="py-2 px-4 rounded-full mr-2 text-white bg-green-500
             hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
            >
              Watch Now
            </button>
          </Link>
          <button
            className="py-2 px-4 rounded-full ml-2 text-white bg-slate-400
             hover:bg-slate-600 active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-300"
          >
            Add To List
          </button>
        </div>
        <div className="card py-2">
          <input id="toggle" type="checkbox" />
          <p className="content text-lg mt-4">{description}</p>
          <label for="toggle"></label>
        </div>
      </MovieInfo>
    </MovieDetailsStyled>
  );
};

export default MovieDetails;

const MovieDetailsStyled = styled.div`
  display: flex;
  /* justify-content: space-between; */
  margin-top: 2rem;

  img {
    width: 25%;
    align-self: flex-start;
    margin-right: auto;
  }
`;

const MovieInfo = styled.div`
  width: 50%;
  h2 {
    font-family: "Playfair Display", serif;
    font-weight: 1000;
    color: var(--primary);
    margin: 1rem 0;
  }
  span {
    font: 1rem;
    color: var(--primary);
    margin: 1rem 0;
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    color: var(--secondary);
  }

  label {
    font-weight: 600;
    color: black;
    cursor: pointer;
  }
`;
