import Head from "next/head";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "urql";
import Movie from "../../components/Movie";
import { GET_MOVIES, GET_CATEGORIES } from "../../graphql/query";
import { BiChevronDown } from "react-icons/bi";
import { Router } from "next/router";
import Link from "next/link";

const AllMovies = () => {
  const [search, setSearch] = useState("");
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

    pagination: { start: 20, limit: 100 },
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
    <main className="flex flex-col container mx-auto">
      <Head>
        <title>Movies Categories</title>
      </Head>
      <div className="flex justify-center my-4 gap-4">
        <div className="form-control ">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="mt-2 input-sm border  shadow-lg dark:bg-slate-800 dark:border-slate-700"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="dropdown dropdown-content text-black ">
          <label tabIndex={0} className="">
            <span className="flex items-center mt-2 btn btn-sm text-black bg-slate-50 hover:bg-slate-200 shadow-lg dark:bg-slate-800 dark:text-white dark:border-slate-700 ">
              Categories <BiChevronDown className="text-lg" />
            </span>
          </label>
          <ul
            tabIndex={0}
            className="flex p-2 shadow menu menu-compact dropdown-content bg-slate-200 rounded-box w-52 dark:bg-slate-800 dark:text-white dark:border-slate-700"
          >
            {!categoryFetching && !categoryError ? (
              categoryData.categories.data.map((item) => (
                <li
                  className="p-2 font-semibold text-center hover:bg-slate-200 hover:cursor-pointer"
                  onClick={() => handleCategorySelect(item.attributes.slug)}
                  key={item.attributes.slug}
                >
                  {item.attributes.name}
                </li>
              ))
            ) : (
              <p>Loading..</p>
            )}
            <li>
              <Link
                href="/movies/LatestMovies"
                className="w-full p-2 text-lg font-semibold text-center hover:bg-slate-200 hover:cursor-pointer justify-center"
              >
                Latest
              </Link>
            </li>
          </ul>
        </div>

        {/* <ul>
          {!categoryFetching && !categoryError ? (
            categoryData.categories.data.map((item) => (
              <li
                className="p-2 font-semibold text-center text-black hover:bg-slate-200 hover:cursor-pointer"
                onClick={() => handleCategorySelect(item.attributes.slug)}
                key={item.attributes.slug}
              >
                {item.attributes.name}
              </li>
            ))
          ) : (
            <p>Loading..</p>
          )}
        </ul> */}
      </div>
      <div>
        <section>
          <h1 className="mb-3 font-semibold">Movies</h1>
          <MovieGallery>
            {!fetching && !error ? (
              data.movies.data
                .filter((movie) => {
                  return search.toLowerCase() === ""
                    ? movie
                    : movie.attributes.title.toLowerCase().includes(search);
                })
                .map((movie) => (
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
    object-fit: cover;
  }
`;
