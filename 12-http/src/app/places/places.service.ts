import { inject, Injectable, signal } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { HttpClient } from '@angular/common/http';

import { Place } from './place.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private httpClient = inject(HttpClient);
  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/places',
      'Failed to fetch places. Please try again later.'
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'Failed to fetch user places. Please try again later.'
    ).pipe(
      tap({
        next: (userPlaces) => {
          this.userPlaces.set(userPlaces);
        },
      })
    );
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces();
    this.userPlaces.set([...prevPlaces, place]);

    if (!prevPlaces.some((p) => p.id === place.id)) {
      this.userPlaces.set([...prevPlaces, place]);
    }//check if place already exists

    return this.httpClient
      .put(`http://localhost:3000/user-places`, {
        placeId: place.id,
      })
      .pipe(
        catchError((error) => {
          this.userPlaces.set(prevPlaces);
          return throwError(() => new Error('Failed to add place.'));
        })
      );
  }

  removeUserPlace(place: Place) {}

  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient.get<{ places: Place[] }>(url).pipe(
      map((resData) => resData.places),
      catchError((error) => {
        console.log(error);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
