"use strict";

import { imageBaseURL } from "./api.js";

/*-------
Movie Card
--------*/

export function createMovieCard(movie) {
  const { title, release_date, poster_path, vote_average, id } = movie;

  const card = document.createElement("div");
  card.classList.add("movie-card");

  card.innerHTML = `
    <figure class="poster-box card-banner">
      <img
        class="img-cover"
        src="${imageBaseURL}w342${poster_path}"
        alt="${title}"
        loading="lazy"
      />
    </figure>

    <h4 class="title">${title}</h4>

    <div class="meta-list">
      <div class="meta-item">
        <img
          src="./assets/images/star.png"
          width="20"
          height="20"
          loading="lazy"
          alt="rating"
          style="margin-bottom: 5px"
        />

        <span class="span">${vote_average.toFixed(1)}</span>
      </div>

      <div class="card-badge">${release_date.split("-")[0]}</div>
    </div>

    <a href="./detail.html" class="card-btn" title="${title}" onClick="getMovieDetail(${id})"></a>
  `;

  return card;
}
