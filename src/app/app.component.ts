import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BuscadorClimaService } from './services/buscador-clima.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Pronostico-Clima';
  searchInput: string = '';
  results: any[] = [];
  difKelvin = 273.15
  calculador = Math;
  constructor(private buscadorClima : BuscadorClimaService) {}

  onSearchClick(response: any): void { 
    this.results = [response];
    console.log(this.results);
  }

  async buscarClima(): Promise<void> {
    try {
      const response = await this.buscadorClima.searchCity(this.searchInput);
      if (response.cod === 200) {
        this.results = [response];
      } else {
        this.results = [];
      }
    } catch (error) {
      console.error('Error al buscar clima:', error);
    }
  }
}
