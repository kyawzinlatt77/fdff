import React, { useState, useEffect } from "react";
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
      <Image
        className="m-5"
        src={url}
        alt={title}
        width={width}
        height={height}
      />

      <MovieInfo className="mx-auto shadow-lg shadow-slate-700/30 dark:bg-slate-900">
        <h2 className="text-2xl">{title}</h2>
        <div className="flex gap-3">
          <span className="px-3 py-1 rounded-xl border border-black dark:border-[#B3B3B3]">
            {type}
          </span>
          <span className="px-3 py-1 rounded-xl border border-black dark:border-[#B3B3B3]">
            {time}m
          </span>
        </div>
        <div>
          <Link href="./Watchmovies">
            <button className="rounded-full mr-2 border border-slate-500 btn btn-ghost shadow-lg shadow-slate-600/30">
              Watch Now
            </button>
          </Link>

          <button className="rounded-full border border-slate-500 btn btn-ghost shadow-lg shadow-slate-600/30">
            Add To List
          </button>
        </div>
        <div className="card py-2">
          <input id="toggle" type="checkbox" />
          <p className="content text-lg mt-4 dark:text-[#B3B3B3]">
            {description}
          </p>
          <label for="toggle"></label>
        </div>
      </MovieInfo>
    </MovieDetailsStyled>
  );
};

export default MovieDetails;

const MovieDetailsStyled = styled.main`
  display: flex;
  /* justify-content: space-between; */
  margin-top: 4rem;

  img {
    width: 20%;
    align-self: flex-start;
    margin: 0 4rem 4rem 4rem;
  }
`;

const MovieInfo = styled.div`
  padding: 2rem;
  width: 50%;
  h2 {
    font-family: "Playfair Display", serif;
    font-weight: 1000;
    margin: 1rem 0;
  }
  span {
    font: 1rem;
    margin: 1rem 0;
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: #9c9c9c;
    overflow: hidden;
  }

  label {
    font-weight: 600;
    cursor: pointer;
  }
`;
