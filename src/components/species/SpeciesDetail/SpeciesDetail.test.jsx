import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SpeciesDetail from './SpeciesDetail';
import { MemoryRouter } from 'react-router-dom';

describe('SpeciesDetail component', () => {
  afterEach(() => cleanup());
  it('renders SpeciesDetail', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SpeciesDetail 
          name="Human"
          classification="mammal"
          designation= "sentient"
          average_lifespan="120"
          homeworld="https://swapi.dev/api/planets/9"
          language="Galactic Basic"
          people={[
            'https://swapi.dev/api/people/12/',
            'https://swapi.dev/api/people/22/'
          ]}
          films={[
            'https://swapi.dev/api/films/1/',
            'https://swapi.dev/api/films/2/',
            'https://swapi.dev/api/films/3/',
            'https://swapi.dev/api/films/6/'
          ]}
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
