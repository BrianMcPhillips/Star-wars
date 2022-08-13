import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Film from './Film';


describe('Film component', () => {
  afterEach(() => cleanup());
  it('renders Film', () => {
    const { asFragment } = render(
      <Film 
        name="A New Hope"
        url="https://swapi.dev/api/films/1/"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
