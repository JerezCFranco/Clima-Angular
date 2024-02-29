import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscadorClimaService {
  private urlBase = 'https://api.openweathermap.org/data/2.5/weather'
  private weather_key = 'de40ee76fe00e8601a19bd494443dbd6'
  private difKelvin = 273.15

  // async searchCity(searchInput: string, callback: (data: any) => void): Promise<void> {
  //   const url = `${this.urlBase}?q=${searchInput}&appid=${this.weather_key}`;

  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     callback(data);
  //   } catch (error) {
  //     console.error('Error al buscar ciudad:', error);
  //   }
  // }

  async searchCity(searchInput: string): Promise<any> {
    const url = `${this.urlBase}?q=${searchInput}&appid=${this.weather_key}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.cod === 200 ? data : { cod: 404 }; // Devuelve datos si la ciudad fue encontrada, de lo contrario, devuelve un objeto con cod: 404
    } catch (error) {
      console.error('Error al buscar ciudad:', error);
      return { cod: 500 }; // Devuelve un código de error en caso de que ocurra un error en la solicitud
    }
  }

  constructor() { }
}
