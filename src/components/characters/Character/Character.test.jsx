import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';
import { MemoryRouter } from 'react-router-dom';

describe('Character component', () => {
  afterEach(() => cleanup());
  it('renders Character', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Character 
          name="Luke Skywalker"
          url="https://swapi.dev/api/people/1/"
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
