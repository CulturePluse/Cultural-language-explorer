// data/languageData.js
import isiZuluImage from '../assets/ndebele.jpg';
import isiXhosaImage from '../assets/ndebele2.jpg';
import sesothoImage from '../assets/ndebele3.jpg';
import setswanaImage from '../assets/ndebele4.jpg';
import afrikaansImage from '../assets/ndebele4.jpg';
import sepediImage from '../assets/ndebele4.jpg';

export const languageData = {
  isiZulu: {
    image: isiZuluImage,
    categories: {
      Food: {
        word: 'Ukudla',
        english: 'Food',
        context: 'Traditional Zulu food includes dishes like ujeqe (steamed bread) and chakalaka.',
        examples: ['Ngiyathanda ukudla kwesintu.']
      },
      Clothing: {
        word: 'Izingubo',
        english: 'Clothing',
        context: 'Zulu traditional attire is worn during ceremonies and special occasions.',
        examples: ['Uthanda izingubo zesintu.']
      },
      Household: {
        word: 'Ikhaya',
        english: 'Household',
        context: 'The Zulu household is often multi-generational and built around community.',
        examples: ['Ikhaya lami likhulu.']
      },
    },
  },
  isiXhosa: {
    image: isiXhosaImage,
    categories: {
      Food: {
        word: 'Ukutya',
        english: 'Food',
        context: 'Xhosa food includes umngqusho (samp and beans) and umphokoqo (maize meal).',
        examples: ['Ndiyakuthanda ukutya.']
      },
      Clothing: {
        word: 'Iimpahla',
        english: 'Clothing',
        context: 'Traditional Xhosa attire features colorful beadwork and cloaks.',
        examples: ['Unxibe iimpahla ezintle.']
      },
      Household: {
        word: 'Ikhaya',
        english: 'Household',
        context: 'Homes are often round huts called rondavels.',
        examples: ['Ikhaya lam likufuphi.']
      },
    },
  },
  Sesotho: {
    image: sesothoImage,
    categories: {
      Food: {
        word: 'Lijo',
        english: 'Food',
        context: 'Basotho dishes include papa and moroho.',
        examples: ['Ke rata lijo tsa mahae.']
      },
      Clothing: {
        word: 'Liaparo',
        english: 'Clothing',
        context: 'The Basotho blanket is a key part of traditional attire.',
        examples: ['O apere liaparo tse ntle.']
      },
      Household: {
        word: 'Ntlo',
        english: 'Household',
        context: 'Homes in Lesotho often use local stone and thatch.',
        examples: ['Ntlo ea ka e kholo.']
      },
    },
  },
  Setswana: {
    image: setswanaImage,
    categories: {
      Food: {
        word: 'Dijo',
        english: 'Food',
        context: 'Popular dishes include seswaa (shredded meat) and bogobe.',
        examples: ['Ke rata dijo tsa Setswana.']
      },
      Clothing: {
        word: 'Diaparo',
        english: 'Clothing',
        context: 'Traditional dress is worn during weddings and heritage days.',
        examples: ['O apere diaparo tsa setso.']
      },
      Household: {
        word: 'Ntlo',
        english: 'Household',
        context: 'A Setswana home may include separate buildings for different functions.',
        examples: ['Ntlo ya rona e ntle.']
      },
    },
  },
  Afrikaans: {
    image: afrikaansImage,
    categories: {
      Food: {
        word: 'Kos',
        english: 'Food',
        context: 'Afrikaans food includes biltong and boerewors.',
        examples: ['Ek hou van Suid-Afrikaanse kos.']
      },
      Clothing: {
        word: 'Klere',
        english: 'Clothing',
        context: 'Modern Western clothing is common with traditional influences.',
        examples: ['Sy dra mooi klere.']
      },
      Household: {
        word: 'Huis',
        english: 'Household',
        context: 'Afrikaans homes are often family-centered and neat.',
        examples: ['Ons huis is gesellig.']
      },
    },
  },
  Sepedi: {
    image: sepediImage,
    categories: {
      Food: {
        word: 'Dijo',
        english: 'Food',
        context: 'Sepedi cuisine includes bogobe and moroho.',
        examples: ['Ke ja dijo tša setšo.']
      },
      Clothing: {
        word: 'Dikgakga',
        english: 'Clothing',
        context: 'Clothing includes colorful wraps and bead accessories.',
        examples: ['O apere dikgakga tša setšo.']
      },
      Household: {
        word: 'Leago',
        english: 'Household',
        context: 'Households often include extended families.',
        examples: ['Leago la rena le leholo.']
      },
    },
  },
};
