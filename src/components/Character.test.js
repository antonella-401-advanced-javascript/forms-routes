import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders Character', () => {
    const testCharacter = {
      photoUrl: 'https://www.outbrain.com/techblog/wp-content/uploads/2017/05/road-sign-361513_960_720.jpg',
      name: 'test'
    };
    const wrapper = shallow(<Character character={testCharacter} />);
    expect(wrapper).toMatchSnapshot();
  });
});