import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';
import { MemoryRouter } from 'react-router-dom';

describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it('renders CharacterList', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CharacterList data={[
          {
            name:'Luke Skywalker',
            hair_color:'blond',
            birth_year: '19BBY',
            url: 'https://swapi.dev/api/people/1/',
            films: [
              'https://swapi.dev/api/films/1/',
              'https://swapi.dev/api/films/2/',
              'https://swapi.dev/api/films/3/',
              'https://swapi.dev/api/films/6/'
            ],
            vehicles:[
              'https://swapi.dev/api/vehicles/14/',
              'https://swapi.dev/api/vehicles/30/'
            ],
            starships:[
              'https://swapi.dev/api/starships/12/',
              'https://swapi.dev/api/starships/22/'
            ]
          }
        ]}/>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
