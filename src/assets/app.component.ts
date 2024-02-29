// import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { MovieSearchService } from './services/movie-search.service';
// import { Title } from '@angular/platform-browser';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, CommonModule, FormsModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent implements OnInit {
//   title = 'Buscador-Peliculas';
//   searchInput: string = '';
//   results: any[] = [];
//   resultsPopular: any[] = [];
//   posterPath: string = '';

//   constructor(private movieSearchService: MovieSearchService, private titleService: Title) {}

//   ngOnInit(): void {
//     this.titleService.setTitle('Buscador Películas');
//   }

//   async onSearchClick(): Promise<void> {
//     try {
//       const movies = await this.movieSearchService.searchMovies(this.searchInput);
//       this.results = movies.results;
//     } catch (error) {
//       console.error('Error al buscar películas:', error);
//     }
//   }

//   async onPopularClick(): Promise<void> {
//     try {
//       const movies = await this.movieSearchService.PopularMovies();
//       this.resultsPopular = movies.results.slice(0,10);
//     } catch (error) {
//       console.error('Error al obtener películas populares:', error);
//     }
//   }
  
// }
