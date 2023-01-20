import React from "react";
import Link from "next/link";
import styled from 'styled-components'
import { FaPlay } from "react-icons/fa";

const Movie = ({ movie }) => {
    const { image, title, discripton, type, time, slug } = movie.attributes

    return (
        <MovieStyled>
          <Link href={`/movies/${slug}`}>
            <div>
              <img src={image.data.attributes.formats.small.url} alt={title} />
            </div>
            
          </Link>
          <h2>{title}</h2>
          <div className="flex pt-2 gap-5">
            <span>{type}</span>
            <span>{time}m</span>
          </div>
        </MovieStyled>
    );
}

export default Movie;

const MovieStyled = styled.div`
  background-color: #c9ccd1;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-inline: 20px;
  padding: 1.5rem;
  cursor: pointer;

  img {
    width: 100%;
    object-fit: cover;
  }

  h2 {
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding-top: 0.5rem;
  }

  span {
    color: var(--secondary);
  }

`;

