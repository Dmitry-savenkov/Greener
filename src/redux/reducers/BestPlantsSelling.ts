// Lib
import { handleActions } from 'redux-actions';

const initialState = {
  bestPlantsSelling: [
    {
      previewImage: require('../../assets/images/categoriesPlants/BestForBeginners/MoneyTreePlant/money-tree_small_bryant-cream.webp'),
      label: 'Best Seller',
      title: 'Money Tree Plant',
      price: {
        lowPrice: 64,
        highPrice: 66,
      },
      payload: {
        sliderPhotos: [
          {
            size: 'Small',
            color: 'Cream',
            planter: 'Bryant',
            choice: true,
            image: require('../../assets/images/categoriesPlants/BestForBeginners/MoneyTreePlant/money-tree_small_bryant-cream.webp'),
          },
          {
            size: null,
            color: null,
            planter: null,
            choice: false,
            image: require('../../assets/images/categoriesPlants/BestForBeginners/MoneyTreePlant/money-tree_gallery_small_all_all_01.webp'),
          },
          {
            size: null,
            color: null,
            planter: null,
            choice: false,
            image: require('../../assets/images/categoriesPlants/BestForBeginners/MoneyTreePlant/money-tree_gallery_small_all_all_02.webp'),
          },
          {
            size: null,
            color: null,
            planter: null,
            choice: false,
            image: require('../../assets/images/categoriesPlants/BestForBeginners/MoneyTreePlant/money-tree_gallery_small_all_all_03.webp'),
          },
        ],
        size: ['Small - 5'],
        planter: ['Bryant'],
        planterColor: ['Cream'],
        description:
          'Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk. ',
        careGuide: {
          title: 'Tropical Americas',
          plantCare: [
            {
              description: 'Thrives in bright indirect to medium light.',
            },
            {
              description:
                'Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.',
            },
            {
              description: 'This is a pet friendly plant.',
            },
            {
              description:
                'According to lore, a poor farmer had such great luck selling these hardy plants that he called them good fortune or good luck money trees.',
            },
          ],
        },
        sadPlantSigns: [
          {
            title: 'Leaf drop:',
            description: 'Not enough sunlight',
          },
          {
            title: 'Yellowing leaves, black stems:',
            description: 'Overwatered',
          },
          {
            title: 'Curling leaves, dry potting mix:',
            description: 'Underwatered',
          },
        ],
        guarantee: {
          description:
            'Your plants will arrive in happy, healthy condition—guaranteed. If not, we replace them for free.Simply reach out to us with a photo within 30 days of receiving your order.',
        },
      },
    },
    {
      previewImage: require('../../assets/images/categoriesPlants/BestForBeginners/Rhipsalis/rhipsalis_small_upcycled_avocado.webp'),
      label: 'New Arrival',
      title: 'Rhipsalis',
      price: {
        lowPrice: 52,
        highPrice: null,
      },
      payload: {
        sliderPhotos: [
          {
            size: 'Small',
            color: 'Avocado',
            planter: 'Upcycled',
            image: require('../../assets/images/categoriesPlants/BestForBeginners/Rhipsalis/rhipsalis_small_upcycled_avocado.webp'),
          },
          {
            size: 'Small',
            color: 'Blue',
            planter: 'Upcycled',
            image: require('../../assets/images/categoriesPlants/BestForBeginners/Rhipsalis/rhipsalis_small_upcycled_blue.webp'),
          },
          {
            size: 'Small',
            color: 'Cream',
            planter: 'Upcycled',
            image: require('../../assets/images/categoriesPlants/BestForBeginners/Rhipsalis/rhipsalis_small_upcycled_cream.webp'),
          },
          {
            size: 'Small',
            color: 'Stonewash',
            planter: 'Upcycled',
            image: require('../../assets/images/categoriesPlants/BestForBeginners/Rhipsalis/rhipsalis_small_upcycled_stonewash.webp'),
          },
          {
            size: null,
            color: null,
            planter: null,
            image: require('../../assets/images/categoriesPlants/BestForBeginners/Rhipsalis/rhipsalis_small_gallery.webp'),
          },
        ],
        size: ['Small - 5'],
        planter: ['Grow Pot', 'Grant', 'Hyde', 'Upcucled'],
        planterColor: ['Blue', 'Avocado', 'Cream', 'Stonewash'],
        description:
          "The Rhipsalis, or mistletoe cactus, is known for its clusters of branching, pencil-thin stems. The ideal growing conditions for the Rhipsalis mirror those of the jungle understory: bright filtered (indirect) light with weekly waterings. Added bonus, it's pet-safe!",
        careGuide: {
          title: 'Central & South America',
          plantCare: [
            {
              description:
                'Thrives in bright indirect light. Can tolerate some direct sun in the morning. Not suited for low light.',
            },
            {
              description:
                'Water every 1-2 weeks allowing soil to dry out between waterings. Expect to water more often in brighter light conditions and less often in lower light.',
            },
            {
              description: 'This plant is pet-friendly.',
            },
            {
              description:
                'This plant is a jungle cactus species and is most commonly found in the wild growing as an epiphyte.',
            },
          ],
        },
        sadPlantSigns: [
          {
            title: 'Mushy or black stems:',
            description: 'Overwatered',
          },
          {
            title: 'Yellowing stems:',
            description: 'Overwatered',
          },
          {
            title: 'Wrinkling leaves, dry potting mix::',
            description: 'Thirsty plant, underwatered',
          },
          {
            title: 'Leaf drop, etiolation:',
            description: 'Not enough light',
          },
        ],
        guarantee: {
          description:
            'Your plants will arrive in happy, healthy condition—guaranteed. If not, we replace them for free.Simply reach out to us with a photo within 30 days of receiving your order.',
        },
      },
    },
    {
      previewImage: require('../../assets/images/categoriesPlants/BestForBeginners/LargeZZPlants/zz-plant_large_pallas_white.webp'),
      label: 'Easy Care',
      title: 'Large ZZ Plant',
      price: {
        lowPrice: 118,
        highPrice: 180,
      },
      payload: {
        sliderPhotos: [
          {
            size: 'Large',
            color: 'White',
            planter: 'Pallas',
            image: require('../../assets/images/categoriesPlants/BestForBeginners/LargeZZPlants/zz-plant_large_pallas_white.webp'),
          },
          {
            size: 'Large',
            color: 'Blush',
            planter: 'Pallas',
            image: require('../../assets/images/categoriesPlants/BestForBeginners/LargeZZPlants/zz-plant_large_pallas_almond.webp'),
          },
          {
            size: null,
            color: null,
            planter: null,
            image: require('../../assets/images/categoriesPlants/BestForBeginners/LargeZZPlants/large-zz-plant_gallery_all_04.webp'),
          },
          {
            size: null,
            color: null,
            planter: null,
            image: require('../../assets/images/categoriesPlants/BestForBeginners/LargeZZPlants/large_zz_plant_gallery_all_07.webp'),
          },
          {
            size: null,
            color: null,
            planter: null,
            image: require('../../assets/images/categoriesPlants/BestForBeginners/LargeZZPlants/large-zz-plant_gallery_all_06.webp'),
          },
        ],
        size: ['Large - 11'],
        planter: ['Grow Pot', 'Burbank', 'Upcucled'],
        planterColor: ['Almond', 'Stonewash', 'White', 'Blush'],
        description:
          'The ZZ Plant is characterized by its waxy green leaves above the surface of its potting mix, and its large potato-like rhizomes underneath. These rhizomes store water, making the ZZ a drought-tolerant plant that can go weeks without water. Sized to ship best, our large ZZ arrives with room to grow as it adapts to your home’s conditions, ',
        careGuide: {
          title: 'Zanzibar, Kenya, Eastern Africa',
          plantCare: [
            {
              description:
                'Thrives in medium to bright indirect light, but can tolerate low indirect light. Not suited for intense, direct sun.',
            },
            {
              description:
                'Water every 2-3 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.',
            },
            {
              description:
                "You might spot large potato-like rhizomes under the surface of the ZZ Plant's soil. These store water to help the plant survive drought in its native habitat.",
            },
          ],
        },
        sadPlantSigns: [
          {
            title: 'Wilting plant, dry potting mix:',
            description: 'Thirsty plant, underwatered',
          },
          {
            title: 'Wrinkled leaves:',
            description: 'Thirsty plant, underwatered',
          },
          {
            title: 'Yellowing and becoming mushy, wet potting mix:',
            description: 'Root rot, overwatered',
          },
        ],
        guarantee: {
          description:
            'Your plants will arrive in happy, healthy condition—guaranteed. If not, we replace them for free.Simply reach out to us with a photo within 30 days of receiving your order.',
        },
      },
    },
  ],
};

export default handleActions({}, initialState);
