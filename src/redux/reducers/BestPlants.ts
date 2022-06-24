// Lib
import { handleActions } from 'redux-actions';

const initialState = {
  id: 1,
  name: '16 Best Plants That Thrive In Your Bedroom',
  description:
    'Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.',
  tags: [
    { id: 0, name: 'Interior' },
    { id: 1, name: '27m²' },
    { id: 2, name: 'Ideas' },
  ],
  images: [
    require('../../assets/images/plants_1.png'),
    require('../../assets/images/plants_2.png'),
    require('../../assets/images/plants_3.png'),
    // showing only 3 images, show +6 for the rest
    require('../../assets/images/plants_1.png'),
    require('../../assets/images/plants_2.png'),
    require('../../assets/images/plants_3.png'),
    require('../../assets/images/plants_1.png'),
    require('../../assets/images/plants_2.png'),
  ],
};

export default handleActions({}, initialState);
