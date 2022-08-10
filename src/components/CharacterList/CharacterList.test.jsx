import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';

describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it('renders CharacterList', () => {
    const { asFragment } = render(
      <CharacterList data={[
        {
          name: 'Luke Skywalker'
        }
      ]}/>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});