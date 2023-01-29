export const GET_MOVIES = `
query getFilteredMovies($sort: [String], $pagination: PaginationArg, $filters: MovieFiltersInput){
    movies(sort: $sort, pagination: $pagination, filters: $filters) {
       data {
       id
       attributes {
        title
        slug
        description
        type
        time
        image {
          data {
            attributes {
              formats
            }
          }
        }
      }
    }
  }
}`;


// export const GET_MOVIES = `
// query getFilteredMovies($sort: [String], $pagination: PaginationArg, $filters: MovieFiltersInput){
//     movies(sort: $sort, pagination: $pagination, filters: $filters) {
//   documents(pagination: { start: 20, limit: 100 }) {
//        data {
//        id
//        attributes {
//         title
//         slug
//         description
//         type
//         time
//         image {
//           data {
//             attributes {
//               formats
//             }
//           }
//         }
//       }
//     }meta {
//       pagination {
//         start
//         limit
//       }
//     }
//   }
// }
//     `;

export const GET_MOVIE = `
  query getMovies($slug: String!) {
    movies(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          slug         
          description
          type
          time
          image {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
  }
}
`;

export const GET_CATEGORIES = `
query {
  categories{
    data {
      id 
      attributes {
        name
        slug
      }
    }
  }
}
      `;
// documents(pagination: {start: 20, limit: 100}) { meta {
//         pagination {
//           start
//           limit
//         }
//       }
