import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../../shared/baseurl';

// /////////////////////////////// COMMENTS SYSTEM/////////////////////////////////
export const commentsFailed = errmess => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess,
});

export const updateComments = (dishId, rating, author, comment, date) => ({
  type: ActionTypes.UPDATE_COMMENTS,
  payload: {
    dishId,
    rating,
    author,
    comment,
    date,
  },
});

export const postComments = (dishId, rating, author, comment) => dispatch => {
  console.log('THIS IS POSTCOMMENTS PRE TIMEOUT');
  /* type: ActionTypes.ADD_COMMENTS,
  payload: (dishid, rating, author, comment, date), */
  const d = new Date();
  const n = d.toISOString();

  setTimeout(() => {
    dispatch(updateComments(dishId, rating, author, comment, n));
    console.log('THIS IS POSTCOMMENTS POST TIMEOUT');
    dispatch(commentsLoading());
  }, 2000);
};

export const commentsLoading = () => ({
  type: ActionTypes.COMMENTS_LOADING,
});

export const addComments = comments => ({
  type: ActionTypes.DONE_COMMENTS,
  payload: comments,
});

// ////// FETCHING DATA FROM API /////////
export const fetchComments = () => dispatch => {
  dispatch(commentsLoading());
  /*  fetch(`${baseUrl}comments`) */
  /*  console.log('FETCHING OUR DATA FROM API'); */
  fetch(`${baseUrl}comments`)
    .then(
      response => {
        /* console.log(`DATA ${response}`); */
        if (response.ok) {
          return response;
        }
        const error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
      },
      error => {
        const errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    // comments is promise resolve response after json format
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));

  // / Fetch on success dispatch commentsDONE.
};

// /////////////////////////////// DISHES/////////////////////////////////

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = errmess => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
});

export const addDishes = dishes => ({
  type: ActionTypes.DONE_DISHES,
  payload: dishes,
});

// ////// FETCHING DATA FROM API /////////

export const fetchDishes = () => dispatch => {
  dispatch(dishesLoading());

  return fetch(`${baseUrl}dishes`)
    .then(
      response => {
        if (response.ok) {
          return response;
        }
        const error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
      },
      error => {
        const errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
};

// /////////////////////////////// PROMOTIONS/////////////////////////////////
export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});

export const promosFailed = errmess => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess,
});

export const addPromos = promos => ({
  type: ActionTypes.DONE_PROMOS,
  payload: promos,
});

// ////// FETCHING DATA FROM API /////////

export const fetchPromos = () => dispatch => {
  dispatch(promosLoading());

  return fetch(`${baseUrl}promotions`)
    .then(
      response => {
        if (response.ok) {
          return response;
        }
        const error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
      },
      error => {
        const errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
};

// /////////////////////////////// LEADERS /////////////////////////////////

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING,
});

export const leadersFailed = errmess => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errmess,
});

export const addLeaders = leaders => ({
  type: ActionTypes.DONE_LEADERS,
  payload: leaders,
});

// ////// FETCHING DATA FROM API /////////

export const fetchLeaders = () => dispatch => {
  dispatch(leadersLoading());

  return fetch(`${baseUrl}leaders`)
    .then(
      response => {
        if (response.ok) {
          return response;
        }
        const error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
      },
      error => {
        const errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
};

// ///////////////// favorites // /////////////////// /////////////////// /////////////////

export const addFavorite = dishId => ({
  type: ActionTypes.ADD_FAVORITE,
  payload: dishId,
});

export const removeFavorite = dishId => ({
  type: ActionTypes.FAVORITE_DELETE,
  payload: dishId,
});

export const deleteFavorite = dishId => ({
  type: ActionTypes.DELETE_FAVORITE,
  payload: dishId,
});

/* export const fetchFavorites = () => dispatch => {
  dispatch(leadersLoading());

  return fetch(`${baseUrl}favorites`)
    .then(
      response => {
        if (response.ok) {
          return response;
        }
        const error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
      },
      error => {
        const errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
}; */
