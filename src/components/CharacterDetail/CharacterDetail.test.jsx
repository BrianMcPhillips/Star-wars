import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail component', () => {
  afterEach(() => cleanup());
  it('renders CharacterDetail', () => {
    const { asFragment } = render(
      <CharacterDetail 
        name="Luke Skywalker"
        hair_color="blond"
        birth_year= "19BBY"
        films={[
          'https://swapi.dev/api/films/1/',
          'https://swapi.dev/api/films/2/',
          'https://swapi.dev/api/films/3/',
          'https://swapi.dev/api/films/6/'
        ]}
        vehicles={[
          'https://swapi.dev/api/vehicles/14/',
          'https://swapi.dev/api/vehicles/30/'
        ]}
        starships={[
          'https://swapi.dev/api/starships/12/',
          'https://swapi.dev/api/starships/22/'
        ]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
