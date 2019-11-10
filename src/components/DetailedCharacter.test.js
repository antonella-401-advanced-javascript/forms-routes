import React from 'react';
import { shallow } from 'enzyme';
import DetailedCharacter from './DetailedCharacter';

describe('DetailedCharacter component', () => {
  it('renders DetailedCharacter', () => {
    const testDetailedCharacter = 
      {
        photoUrl: 'https://www.outbrain.com/techblog/wp-content/uploads/2017/05/road-sign-361513_960_720.jpg',
        name: 'test2',
        gender: 'test',
        hair: 'test color',
        weapon: 'tests',
        affiliation: 'test?'
      };
    const wrapper = shallow(<DetailedCharacter character={testDetailedCharacter} />);
    expect(wrapper).toMatchSnapshot();
  });
});