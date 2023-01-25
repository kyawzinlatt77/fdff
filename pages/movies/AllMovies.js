import Head from "next/head";
import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "urql";
import Movie from "../../components/Movie";
import { GET_MOVIES, GET_CATEGORIES } from "../../graphql/query";

const AllMovies = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [results, reexecuteQuery] = useQuery({
    query: GET_MOVIES,
    variables: selectedCategory
      ? {
          filters: {
            category: {
              slug: { eq: selectedCategory },
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

  function handleCategorySelect(category) {
    setSelectedCategory(category);
    reexecuteQuery({ requestPolicy: "network-only" });
  }
  function handleCategorytitle(category) {
    setSelectedCategory(category);
    reexecuteQuery({ requestPolicy: "network-only" });
  }

  return (
    <main className="flex container mx-auto">
      <Head>
        <title>Movies Categories</title>
      </Head>
      <aside className="w-1/5">
        <ul>
          {!categoryFetching && !categoryError 
            ? categoryData.categories.data.map((item) => (
                <li
                  className="p-2 font-semibold text-center text-black hover:bg-slate-200 hover:cursor-pointer"
                  onClick={() => handleCategorySelect(item.attributes.slug)}
                  key={item.attributes.slug}
                >
                  {item.attributes.name}
                </li>
              ))
            : <p>Loading..</p>}
        </ul>
      </aside>
      <div className="w-full px-4">
        <section>
          <h1 className="mb-3 font-semibold text-black">Movies</h1>
          <MovieGallery>
            {!fetching && !error ? (
              data.movies.data.map((movie) => (
                <Movie key={movie.attributes.slug} movie={movie} />
              ))
            ) : (
              <p>Loading</p>
            )}
          </MovieGallery>
        </section>
      </div>
    </main>
  );
};

export default AllMovies;

const MovieGallery = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;
