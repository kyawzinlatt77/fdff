import React from "react";
import Link from "next/link";
import styled from 'styled-components'
import { FaPlay } from "react-icons/fa";

const Movie = ({ movie }) => {
    const { image, title, discripton, type, time, slug } = movie.attributes

    return (
      <MovieStyled className="rounded-xl shadow-lg border shadow-slate-700/40 dark:bg-slate-900 dark:border-slate-700">
        <Link href={`/movies/${slug}`}>
          <div>
            <img src={image.data.attributes.formats.small.url} alt={title} />
          </div>
        </Link>
        <h2>{title}</h2>
        <p>{discripton}</p>
        <div className="flex pt-2 gap-5">
          <span>{type}</span>
          <span>{time}m</span>
        </div>
      </MovieStyled>
    );
}

export default Movie;

const MovieStyled = styled.div`
  width: 18rem;
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  cursor: pointer;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  h2 {
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding-top: 0.5rem;
  }

`;

