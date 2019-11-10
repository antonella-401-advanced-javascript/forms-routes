import React from 'react';
import { shallow } from 'enzyme';
import CharacterList from './CharacterList';

describe('CharacterList component', () => {
  it('renders CharacterList', () => {
    const testCharacterList = [
      {
        photoUrl: 'https://www.outbrain.com/techblog/wp-content/uploads/2017/05/road-sign-361513_960_720.jpg',
        name: 'test'
      },
      {
        photoUrl: 'https://www.outbrain.com/techblog/wp-content/uploads/2017/05/road-sign-361513_960_720.jpg',
        name: 'test2'
      }
    ];
    const wrapper = shallow(<CharacterList character={testCharacterList} />);
    expect(wrapper).toMatchSnapshot();
  });
});