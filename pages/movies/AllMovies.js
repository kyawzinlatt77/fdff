import Head from 'next/head'
import React, { useState } from 'react'
import styled from 'styled-components';
import { useQuery } from 'urql';
import Movie from '../../components/Movie';
import { GET_MOVIES, GET_CATEGORIES } from '../../graphql/query';

const AllMovies = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [results, reexecuteQuery] = useQuery({
    query: GET_MOVIES,
    variables: selectedCategory
      ? {
          filters: {
            category: {
              slug: { eq: selectedCategory ? selectedCategory : null },
            },
          },
        }
      : null,
  });
  const { data, fetching, error } = results;
  const [categoryResult] = useQuery({ query: GET_CATEGORIES });
  const {
    data: categoryData,
    fetching: categoryFetching,
    error: categoryError,
  } = categoryResult;

  if (fetching || categoryFetching) return <p>Loading...</p>;
  if (error || categoryError) return <p>Ugh..{error.message}</p>;
  const movies = data.movies.data;
  const categories = categoryData.categories.data;

  function handleCategorySelect(category) {
    setSelectedCategory(category);
    reexecuteQuery({ requestPolicy: "network-only" });
  }
    function handleCategorytitle(category) {
      setSelectedCategory(category);
      reexecuteQuery({ requestPolicy: "network-only" });
    }

  return (
    <main className="flex ">
      <Head>
        <title>All Movies</title>
      </Head>
      <aside className="w-1/5">
        <ul>
          {categories.map((item) => (
            <li
              className="p-2 font-semibold text-center hover:cursor-pointer"
              onClick={() => handleCategorySelect(item.attributes.slug)}
              key={item.attributes.slug}
            >
              {item.attributes.name}
            </li>
          ))}
        </ul>
      </aside>
      <div className='w-full px-4'>
        <section>
          <h1 className="p-4 text-black">
            Movies Lists
          </h1>
          <MovieGallery>
            {movies.map((movie) => (
              <Movie key={movie.attributes.slug} movie={movie} />
            ))}
          </MovieGallery>
        </section>
      </div>
    </main>
  );
}

export default AllMovies

const MovieGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;