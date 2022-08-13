import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FilmList from './FilmList';


describe('FilmList component', () => {
  afterEach(() => cleanup());
  it('renders FilmList', () => {
    const { asFragment } = render(
      <FilmList data={[
        {
          title: 'A New Hope', 
          episode_id: 4, 
          director: 'George Lucas', 
          producer: 'Gary Kurtz, Rick McCallum', 
          release_date: '1977-05-25', 
          characters: [
            'https://swapi.dev/api/people/1/', 
            'https://swapi.dev/api/people/2/', 
          ], 
          planets: [
            'https://swapi.dev/api/planets/1/', 
          ], 
          starships: [
            'https://swapi.dev/api/starships/2/', 
          ], 
          vehicles: [
            'https://swapi.dev/api/vehicles/4/', 
          ], 
          species: [
            'https://swapi.dev/api/species/1/', 
          ], 
          created: '2014-12-10T14:23:31.880000Z', 
          edited: '2014-12-20T19:49:45.256000Z', 
          url: 'https://swapi.dev/api/films/1/'
        },
      ]} 
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
