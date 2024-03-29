import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {
  private api_key = '812011deb0fa28d2817112a5204b2960';
  private urlBase = 'https://api.themoviedb.org/3/search/movie';
  private urlBasePopular = 'https://api.themoviedb.org/3/discover/movie';
  private urlImg = 'https://image.tmdb.org/t/p/w200';
  private lenguageSpanish = 'language=es';

  async searchMovies(searchInput: string): Promise<any> {
    const url = `${this.urlBase}?&${this.lenguageSpanish}&api_key=${this.api_key}&query=${searchInput}`;

    return await fetch(url).then((response) => response.json());
  }

  async PopularMovies(): Promise<any> {
    const options:any = {
      method: 'GET',
      headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTIwMTFkZWIwZmEyOGQyODE3MTEyYTUyMDRiMjk2MCIsInN1YiI6IjY1NDQzYmEzNmJlYWVhMDEyYzhjZjdkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ML5gQ_ny0774BR6H9B8R_ux_mK-HqOr50fLsJNKx4X0'
      }
  };
    const url = `${this.urlBasePopular}?include_adult=false&include_video=false&${this.lenguageSpanish}&page=1&sort_by=popularity.desc`;
  
    return await fetch(url,options).then((response) => response.json());
  }
  constructor() { }
}
