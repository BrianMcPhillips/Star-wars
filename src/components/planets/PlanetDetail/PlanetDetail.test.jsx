import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PlanetDetail from './PlanetDetail';


describe('PlanetDetail component', () => {
  afterEach(() => cleanup());
  it('renders PlanetDetail', () => {
    const { asFragment } = render(
      <PlanetDetail 
        name="Tatooine"
        diameter="10465"
        climate="arid"
        gravity= "1 standard"
        terrain="desert"
        population= "200000"
        residents= {[
          'https://swapi.dev/api/people/1/',
          'https://swapi.dev/api/people/2/',
          'https://swapi.dev/api/people/4/',
          'https://swapi.dev/api/people/6/',
          'https://swapi.dev/api/people/7/',
          'https://swapi.dev/api/people/8/',
          'https://swapi.dev/api/people/9/',
          'https://swapi.dev/api/people/11/',
          'https://swapi.dev/api/people/43/',
          'https://swapi.dev/api/people/62/'
        ]}
        films={[
          'https://swapi.dev/api/films/1/',
          'https://swapi.dev/api/films/3/',
          'https://swapi.dev/api/films/4/',
          'https://swapi.dev/api/films/5/',
          'https://swapi.dev/api/films/6/'
        ]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
