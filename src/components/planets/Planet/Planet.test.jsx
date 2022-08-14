import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Planet from './Planet';


describe('Planet component', () => {
  afterEach(() => cleanup());
  it('renders Planet', () => {
    const { asFragment } = render(
      <Planet 
        name="Tatooine"
        terrain="desert"
        url="https://swapi.dev/api/planet/1/"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});