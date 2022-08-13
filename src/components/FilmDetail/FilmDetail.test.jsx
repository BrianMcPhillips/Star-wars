import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FilmDetail from './FilmDetail';
import { MemoryRouter } from 'react-router-dom';

describe('FilmDetail component', () => {
  afterEach(() => cleanup());
  it('renders FilmDetail', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <FilmDetail 
          title="A New Hope" 
          director="George Lucas" 
          producer="Gary Kurtz, Rick McCallum"
          release_date= "1977-05-25" 
          characters= {[
            'https://swapi.dev/api/people/1/', 
            'https://swapi.dev/api/people/2/', 
            'https://swapi.dev/api/people/3/', 
            'https://swapi.dev/api/people/4/', 
            'https://swapi.dev/api/people/5/'
          ]}
          planets= {[
            'https://swapi.dev/api/planets/1/', 
            'https://swapi.dev/api/planets/2/', 
            'https://swapi.dev/api/planets/3/'
          ]} 
          starships= {[
            'https://swapi.dev/api/starships/2/', 
            'https://swapi.dev/api/starships/3/', 
            'https://swapi.dev/api/starships/5/', 
          ]} 
          vehicles= {[
            'https://swapi.dev/api/vehicles/4/', 
            'https://swapi.dev/api/vehicles/6/', 
            'https://swapi.dev/api/vehicles/7/', 
            'https://swapi.dev/api/vehicles/8/'
          ]} 
          species= {[
            'https://swapi.dev/api/species/1/', 
            'https://swapi.dev/api/species/2/', 
            'https://swapi.dev/api/species/3/', 
            'https://swapi.dev/api/species/4/', 
            'https://swapi.dev/api/species/5/'
          ]} 
          url="https://swapi.dev/api/films/1/"
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
