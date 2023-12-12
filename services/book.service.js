import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
var gFilterBy = { title: '', listPrice: 0 }
const tempBooks = [
  {
    id: 'OXeMG8wNskc',
    title: 'metus hendrerit',
    subtitle: 'mi est eros convallis auctor arcu dapibus himenaeos',
    authors: ['Barbara Cartland'],
    publishedDate: 1999,
    description:
      'placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse',
    pageCount: 713,
    categories: ['Computers', 'Hack'],
    thumbnail: 'img/1.jpg',
    language: 'en',
    listPrice: {
      amount: 109,
      currencyCode: 'EUR',
      isOnSale: false,
    },
  },
  {
    id: 'JYOJa2NpSCq',
    title: 'morbi',
    subtitle: 'lorem euismod dictumst inceptos mi',
    authors: ['Barbara Cartland'],
    publishedDate: 1978,
    description:
      'aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor',
    pageCount: 129,
    categories: ['Computers', 'Hack'],
    thumbnail: 'img/2.jpg',
    language: 'sp',
    listPrice: {
      amount: 44,
      currencyCode: 'EUR',
      isOnSale: true,
    },
  },
  {
    id: '1y0Oqts35DQ',
    title: 'at viverra venenatis',
    subtitle: 'gravida libero facilisis rhoncus urna etiam',
    authors: ['Dr. Seuss'],
    publishedDate: 1999,
    description:
      'lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant',
    pageCount: 972,
    categories: ['Computers', 'Hack'],
    thumbnail: 'img/3.jpg',
    language: 'he',
    listPrice: {
      amount: 108,
      currencyCode: 'ILS',
      isOnSale: false,
    },
  },
  {
    id: 'kSnfIJyikTP',
    title: 'dictum',
    subtitle:
      'augue eu consectetur class curabitur conubia ligula in ullamcorper',
    authors: ['Danielle Steel'],
    publishedDate: 1978,
    description:
      'interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam',
    pageCount: 303,
    categories: ['Computers', 'Hack'],
    thumbnail: 'img/4.jpg',
    language: 'en',
    listPrice: {
      amount: 30,
      currencyCode: 'EUR',
      isOnSale: true,
    },
  },
  {
    id: 'f4iuVmbuKCC',
    title: 'sem himenaeos aptent',
    subtitle: 'interdum per habitasse luctus purus est',
    authors: ['Dr. Seuss'],
    publishedDate: 2011,
    description:
      'et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed',
    pageCount: 337,
    categories: ['Computers', 'Hack'],
    thumbnail: 'img/5.jpg',
    language: 'sp',
    listPrice: {
      amount: 19,
      currencyCode: 'USD',
      isOnSale: false,
    },
  },
  {
    id: 'U2rfZO6oBZf',
    title: 'mi ante posuere',
    subtitle:
      'sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus',
    authors: ['Leo Tolstoy'],
    publishedDate: 1978,
    description:
      'senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in',
    pageCount: 748,
    categories: ['Computers', 'Hack'],
    thumbnail: 'img/6.jpg',
    language: 'en',
    listPrice: {
      amount: 91,
      currencyCode: 'USD',
      isOnSale: true,
    },
  },
  {
    id: 'xI0wrXaaAcq',
    title: 'non',
    subtitle:
      'leo tortor per dapibus mattis ut conubia porttitor ligula viverra',
    authors: ['Leo Tolstoy'],
    publishedDate: 2011,
    description:
      'nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque',
    pageCount: 65,
    categories: ['Computers', 'Hack'],
    thumbnail: 'img/7.jpg',
    language: 'he',
    listPrice: {
      amount: 90,
      currencyCode: 'USD',
      isOnSale: false,
    },
  },
  {
    id: '9laHCEdSpFy',
    title: 'tristique',
    subtitle: 'consectetur a eu tincidunt condimentum amet nisi',
    authors: ['Dr. Seuss'],
    publishedDate: 1999,
    description:
      'magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem',
    pageCount: 299,
    categories: ['Computers', 'Hack'],
    thumbnail: 'img/8.jpg',
    language: 'he',
    listPrice: {
      amount: 176,
      currencyCode: 'EUR',
      isOnSale: false,
    },
  },
  {
    id: 'nGhVwZvGCGp',
    title: 'urna ornare gravida',
    subtitle: 'sem vestibulum semper convallis pharetra tempor himenaeos ut',
    authors: ['Jin Yong'],
    publishedDate: 2011,
    description:
      'porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla',
    pageCount: 803,
    categories: ['Computers', 'Hack'],
    thumbnail: 'img/9.jpg',
    language: 'sp',
    listPrice: {
      amount: 116,
      currencyCode: 'USD',
      isOnSale: true,
    },
  },
  {
    id: 'Q8Q9Lsd03BD',
    title: 'consequat neque volutpat',
    subtitle: 'vel quis taciti fermentum feugiat ullamcorper curae praesent',
    authors: ['Dr. Seuss'],
    publishedDate: 1978,
    description:
      'curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare',
    pageCount: 891,
    categories: ['Computers', 'Hack'],
    thumbnail: 'img/10.jpg',
    language: 'en',
    listPrice: {
      amount: 145,
      currencyCode: 'EUR',
      isOnSale: false,
    },
  },
  {
    id: 'bd7a76kARao',
    title: 'risus',
    subtitle: 'pretium bibendum pharetra curabitur quisque dictumst',
    authors: ['Danielle Steel'],
    publishedDate: 2018,
    description:
      'auctor amet nostra luctus molestie proin platea cubilia netus sed purus egestas a primis eu tristique interdum litora lorem venenatis mattis senectus',
    pageCount: 86,
    categories: ['Computers', 'Hack'],
    thumbnail: 'img/11.jpg',
    language: 'sp',
    listPrice: {
      amount: 157,
      currencyCode: 'ILS',
      isOnSale: true,
    },
  },
  {
    id: 'qKyG0vqeO3e',
    title: 'interdum etiam vulputate',
    subtitle: 'velit sapien eget tincidunt nunc tortor',
    authors: ['Danielle Steel'],
    publishedDate: 2018,
    description:
      'aenean mauris porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad',
    pageCount: 882,
    categories: ['Computers', 'Hack'],
    thumbnail: 'img/12.jpg',
    language: 'sp',
    listPrice: {
      amount: 57,
      currencyCode: 'USD',
      isOnSale: true,
    },
  },
  {
    id: '2RvT48ZNInj',
    title: 'sagittis justo',
    subtitle: 'etiam primis proin praesent placerat nisi fermentum nisi',
    authors: ['Agatha Christie'],
    publishedDate: 2011,
    description:
      'nec faucibus arcu suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus',
    pageCount: 598,
    categories: ['Computers', 'Hack'],
    thumbnail: 'img/13.jpg',
    language: 'en',
    listPrice: {
      amount: 167,
      currencyCode: 'ILS',
      isOnSale: false,
    },
  },
  {
    id: '5z2s9pDXAYj',
    title: 'quam ullamcorper himenaeos',
    subtitle: 'ut placerat eu dapibus sapien sodales laoreet',
    authors: ['Danielle Steel'],
    publishedDate: 1999,
    description:
      'etiam nec aliquam euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam',
    pageCount: 608,
    categories: ['Computers', 'Hack'],
    thumbnail: 'img/14.jpg',
    language: 'he',
    listPrice: {
      amount: 150,
      currencyCode: 'USD',
      isOnSale: true,
    },
  },
  {
    id: 'zBZu5cDEWha',
    title: 'quis',
    subtitle: 'suscipit turpis etiam turpis libero lobortis',
    authors: ['Jin Yong'],
    publishedDate: 2011,
    description:
      'etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor',
    pageCount: 583,
    categories: ['Computers', 'Hack'],
    thumbnail: 'img/15.jpg',
    language: 'en',
    listPrice: {
      amount: 58,
      currencyCode: 'ILS',
      isOnSale: true,
    },
  },
  {
    id: 'aOI7tQuPZ2f',
    title: 'aliquam aliquet dapibus',
    subtitle:
      'neque eu purus euismod placerat adipiscing odio egestas consequat',
    authors: ['Leo Tolstoy'],
    publishedDate: 2011,
    description:
      'dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt',
    pageCount: 497,
    categories: ['Computers', 'Hack'],
    thumbnail: 'img/16.jpg',
    language: 'en',
    listPrice: {
      amount: 78,
      currencyCode: 'USD',
      isOnSale: false,
    },
  },
  {
    id: 'WBooB82Uvwu',
    title: 'class',
    subtitle:
      'elit enim ultricies amet imperdiet a molestie class elementum venenatis',
    authors: ['Danielle Steel'],
    publishedDate: 1999,
    description:
      'rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla',
    pageCount: 804,
    categories: ['Computers', 'Hack'],
    thumbnail: 'img/17.jpg',
    language: 'en',
    listPrice: {
      amount: 118,
      currencyCode: 'ILS',
      isOnSale: false,
    },
  },
  {
    id: 'xm1z5bbZjlS',
    title: 'vitae',
    subtitle: 'class habitant at commodo semper ligula a bibendum',
    authors: ['Leo Tolstoy'],
    publishedDate: 1999,
    description:
      'himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus',
    pageCount: 231,
    categories: ['Computers', 'Hack'],
    thumbnail: 'img/18.jpg',
    language: 'he',
    listPrice: {
      amount: 60,
      currencyCode: 'EUR',
      isOnSale: false,
    },
  },
  {
    id: 'u3j6QIKLlJb',
    title: 'rhoncus vivamus',
    subtitle: 'nullam class risus amet senectus scelerisque etiam curabitur',
    authors: ['Agatha Christie'],
    publishedDate: 1978,
    description:
      'torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis',
    pageCount: 652,
    categories: ['Computers', 'Hack'],
    thumbnail: 'img/19.jpg',
    language: 'he',
    listPrice: {
      amount: 110,
      currencyCode: 'USD',
      isOnSale: true,
    },
  },
  {
    id: 'vxYYYdVlEH3',
    title: 'donec mi ullamcorper',
    subtitle:
      'varius malesuada augue molestie sollicitudin faucibus mi eu tempus',
    authors: ['William Shakespeare'],
    publishedDate: 2011,
    description:
      'aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed',
    pageCount: 904,
    categories: ['Computers', 'Hack'],
    thumbnail: 'img/20.jpg',
    language: 'sp',
    listPrice: {
      amount: 186,
      currencyCode: 'ILS',
      isOnSale: true,
    },
  },
]
const googleBooks = {
  kind: 'books#volumes',
  totalItems: 288,
  items: [
    {
      kind: 'books#volume',
      id: 'nBuA0hmspdMC',
      etag: '6Jrln+iK3So',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/nBuA0hmspdMC',
      volumeInfo: {
        title: 'Effective JavaScript',
        authors: ['David Herman'],
        publisher: 'Addison-Wesley',
        publishedDate: '2012-11-26',
        description:
          '“It’s uncommon to have a programming language wonk who can speak in such comfortable and friendly language as David does. His walk through the syntax and semantics of JavaScript is both charming and hugely insightful; reminders of gotchas complement realistic use cases, paced at a comfortable curve. You’ll find when you finish the book that you’ve gained a strong and comprehensive sense of mastery.” —Paul Irish, developer advocate, Google Chrome “This is not a book for those looking for shortcuts; rather it is hard-won experience distilled into a guided tour. It’s one of the few books on JS that I’ll recommend without hesitation.” —Alex Russell, TC39 member, software engineer, Google In order to truly master JavaScript, you need to learn how to work effectively with the language’s flexible, expressive features and how to avoid its pitfalls. No matter how long you’ve been writing JavaScript code, Effective JavaScript will help deepen your understanding of this powerful language, so you can build more predictable, reliable, and maintainable programs. Author David Herman, with his years of experience on Ecma’s JavaScript standardization committee, illuminates the language’s inner workings as never before—helping you take full advantage of JavaScript’s expressiveness. Reflecting the latest versions of the JavaScript standard, the book offers well-proven techniques and best practices you’ll rely on for years to come. Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency. Key features include Better ways to use prototype-based object-oriented programming Subtleties and solutions for working with arrays and dictionary objects Precise and practical explanations of JavaScript’s functions and variable scoping semantics Useful JavaScript programming patterns and idioms, such as options objects and method chaining In-depth guidance on using JavaScript’s unique “run-to-completion” approach to concurrency',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9780132902250',
          },
          {
            type: 'ISBN_10',
            identifier: '0132902257',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 231,
        printType: 'BOOK',
        categories: ['Computers'],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '2.11.9.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=nBuA0hmspdMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=nBuA0hmspdMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=nBuA0hmspdMC&printsec=frontcover&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=1&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=nBuA0hmspdMC&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Effective_JavaScript.html?hl=&id=nBuA0hmspdMC',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=nBuA0hmspdMC&hl=&as_pt=BOOKS&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'You’ll find when you finish the book that you’ve gained a strong and comprehensive sense of mastery.” —Paul Irish, developer advocate, Google Chrome “This is not a book for those looking for shortcuts; rather it is hard-won ...',
      },
    },
    {
      kind: 'books#volume',
      id: 'qBiEjwEACAAJ',
      etag: 'jTxGahymwLI',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/qBiEjwEACAAJ',
      volumeInfo: {
        title: 'Effective JavaScript',
        subtitle: '68 Specific Ways to Harness the Power of JavaScript',
        publishedDate: '2013',
        description:
          'Provides information on how to write better JavaScript programs, covering such topics as functions, arrays, library and API design, and concurrency.',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '0132902281',
          },
          {
            type: 'ISBN_13',
            identifier: '9780132902281',
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 206,
        printType: 'BOOK',
        categories: ['JavaScript (Computer program language)'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: 'preview-1.0.0',
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=qBiEjwEACAAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=2&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=qBiEjwEACAAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Effective_JavaScript.html?hl=&id=qBiEjwEACAAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'NO_PAGES',
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=qBiEjwEACAAJ&hl=&as_pt=BOOKS&source=gbs_api',
        accessViewStatus: 'NONE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Provides information on how to write better JavaScript programs, covering such topics as functions, arrays, library and API design, and concurrency.',
      },
    },
    {
      kind: 'books#volume',
      id: 'PXa2bby0oQ0C',
      etag: 'b3d7UFPdP9g',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/PXa2bby0oQ0C',
      volumeInfo: {
        title: 'JavaScript: The Good Parts',
        subtitle: 'The Good Parts',
        authors: ['Douglas Crockford'],
        publisher: '"O\'Reilly Media, Inc."',
        publishedDate: '2008-05-08',
        description:
          "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code. Considered the JavaScript expert by many people in the development community, author Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language-ideas such as functions, loose typing, dynamic objects, and an expressive object literal notation. Unfortunately, these good ideas are mixed in with bad and downright awful ideas, like a programming model based on global variables. When Java applets failed, JavaScript became the language of the Web by default, making its popularity almost completely independent of its qualities as a programming language. In JavaScript: The Good Parts, Crockford finally digs through the steaming pile of good intentions and blunders to give you a detailed look at all the genuinely elegant parts of JavaScript, including: Syntax Objects Functions Inheritance Arrays Regular expressions Methods Style Beautiful features The real beauty? As you move ahead with the subset of JavaScript that this book presents, you'll also sidestep the need to unlearn all the bad parts. Of course, if you want to find out more about the bad parts and how to use them badly, simply consult any other JavaScript book. With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.",
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9780596554873',
          },
          {
            type: 'ISBN_10',
            identifier: '0596554877',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 172,
        printType: 'BOOK',
        categories: ['Computers'],
        averageRating: 4.5,
        ratingsCount: 37,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '0.6.6.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=PXa2bby0oQ0C&printsec=frontcover&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=3&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=PXa2bby0oQ0C&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/JavaScript_The_Good_Parts.html?hl=&id=PXa2bby0oQ0C',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=PXa2bby0oQ0C&hl=&as_pt=BOOKS&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'If you develop sites or applications for the Web, this book is an absolute must.',
      },
    },
    {
      kind: 'books#volume',
      id: 'wD63DwAAQBAJ',
      etag: 'FFXovghkpww',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/wD63DwAAQBAJ',
      volumeInfo: {
        title: 'Effective TypeScript',
        subtitle: '62 Specific Ways to Improve Your TypeScript',
        authors: ['Dan Vanderkam'],
        publisher: "O'Reilly Media",
        publishedDate: '2019-10-17',
        description:
          'TypeScript is a typed superset of JavaScript with the potential to solve many of the headaches for which JavaScript is famous. But TypeScript has a learning curve of its own, and understanding how to use it effectively can take time. This book guides you through 62 specific ways to improve your use of TypeScript. Author Dan Vanderkam, a principal software engineer at Sidewalk Labs, shows you how to apply these ideas, following the format popularized by Effective C++ and Effective Java (both from Addison-Wesley). You’ll advance from a beginning or intermediate user familiar with the basics to an advanced user who knows how to use the language well. Effective TypeScript is divided into eight chapters: Getting to Know TypeScript TypeScript’s Type System Type Inference Type Design Working with any Types Declarations and @types Writing and Running Your Code Migrating to TypeScript',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781492053712',
          },
          {
            type: 'ISBN_10',
            identifier: '1492053716',
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 264,
        printType: 'BOOK',
        categories: ['Computers'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.3.1.0.preview.1',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=wD63DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=wD63DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=wD63DwAAQBAJ&printsec=frontcover&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=4&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=wD63DwAAQBAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Effective_TypeScript.html?hl=&id=wD63DwAAQBAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=wD63DwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'But TypeScript has a learning curve of its own, and understanding how to use it effectively can take time. This book guides you through 62 specific ways to improve your use of TypeScript.',
      },
    },
    {
      kind: 'books#volume',
      id: '25AEAwAAQBAJ',
      etag: 'B9hGvTqCQjU',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/25AEAwAAQBAJ',
      volumeInfo: {
        title: "You Don't Know JS: Scope & Closures",
        authors: ['Kyle Simpson'],
        publisher: '"O\'Reilly Media, Inc."',
        publishedDate: '2014-03-10',
        description:
          'No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. You’ll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset. Like other books in the "You Don’t Know JS" series, Scope and Closures dives into trickier parts of the language that many JavaScript programmers simply avoid. Armed with this knowledge, you can achieve true JavaScript mastery. Learn about scope, a set of rules to help JavaScript engines locate variables in your code Go deeper into nested scope, a series of containers for variables and functions Explore function- and block-based scope, “hoisting”, and the patterns and benefits of scope-based hiding Discover how to use closures for synchronous and asynchronous tasks, including the creation of JavaScript libraries',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781449335540',
          },
          {
            type: 'ISBN_10',
            identifier: '1449335543',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 105,
        printType: 'BOOK',
        categories: ['Computers'],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '1.7.8.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=25AEAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=25AEAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=25AEAwAAQBAJ&printsec=frontcover&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=5&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=25AEAwAAQBAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/You_Don_t_Know_JS_Scope_Closures.html?hl=&id=25AEAwAAQBAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=25AEAwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'No matter how much experience you have with JavaScript, odds are you don’t fully understand the language.',
      },
    },
    {
      kind: 'books#volume',
      id: '--gvDwAAQBAJ',
      etag: 'LbGQXbyp5vU',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/--gvDwAAQBAJ',
      volumeInfo: {
        title: 'An Effective Guide to Modern JavaScript',
        subtitle: '(ECMAScript 2017 / ES 8)',
        authors: ['Chong Lip Phang'],
        publisher: 'Chong Lip Phang',
        publishedDate: '2017-08-08',
        description:
          "ES8 was finalized in June 2017. This book: - effectively teaches standard JavaScript from A to Z. - includes all the JavaScript common APIs, presented in a highly organized fashion. - lists in the Appendix the new features introduced in each JavaScript edition from ES5 to ES8 and beyond, and illustrates all of them. - clearly explains advanced concepts such as closures, Proxy, generators, Promise, async functions, and Atomics. - covers OOP techniques -- classical JavaScript OOP, the new 'class' syntax, data encapsulation, multiple inheritance, abstract classes, object relay etc. - teaches you how to define and use iterators and various iterables. - turns you into an efficient JavaScript coder.",
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781974207923',
          },
          {
            type: 'ISBN_10',
            identifier: '1974207927',
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 127,
        printType: 'BOOK',
        categories: ['Computers'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: 'preview-1.0.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=--gvDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=--gvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=--gvDwAAQBAJ&printsec=frontcover&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=6&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=--gvDwAAQBAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/An_Effective_Guide_to_Modern_JavaScript.html?hl=&id=--gvDwAAQBAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com/books/download/An_Effective_Guide_to_Modern_JavaScript-sample-pdf.acsm?id=--gvDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=--gvDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'This book: - effectively teaches standard JavaScript from A to Z. - includes all the JavaScript common APIs, presented in a highly organized fashion. - lists in the Appendix the new features introduced in each JavaScript edition from ES5 to ...',
      },
    },
    {
      kind: 'books#volume',
      id: 'bzekBgAAQBAJ',
      etag: 'h+sHt2ZYt30',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/bzekBgAAQBAJ',
      volumeInfo: {
        title: 'Beginning JavaScript',
        authors: ['Jeremy McPeak'],
        publisher: 'John Wiley & Sons',
        publishedDate: '2015-02-17',
        description:
          "The bestselling JavaScript guide, updated with current features and best practices Beginning JavaScript 5th Edition shows you how to work effectively with JavaScript frameworks, functions, and modern browsers, and teaches more effective coding practices using HTML5. This new edition has been extensively updated to reflect the way JavaScript is most commonly used today, introducing you to the latest tools and techniques available to JavaScript developers. Coverage includes modern coding practices using HTML5 markup, the JSON data format, DOM APIs, the jQuery framework, and more. Exercises with solutions provide plenty of opportunity to practice, and the companion website offers downloadable code for all examples given in the book. Learn JavaScript using the most up to date coding style Understand JSON, functions, events, and feature detection Utilize the new HTML5 elements and the related API Explore new features including geolocation, local storage, and more JavaScript has shaped the Web from a passive medium into one that is rich, dynamic, and interactive. No matter the technology on the server side, it's JavaScript that makes it come alive in the browser. To learn JavaScript the way it's used today, Beginning JavaScript, 5th Edition is your concise guide.",
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781118903438',
          },
          {
            type: 'ISBN_10',
            identifier: '1118903439',
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 768,
        printType: 'BOOK',
        categories: ['Computers'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '2.8.3.0.preview.1',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=bzekBgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=bzekBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=bzekBgAAQBAJ&printsec=frontcover&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=7&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=bzekBgAAQBAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Beginning_JavaScript.html?hl=&id=bzekBgAAQBAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com/books/download/Beginning_JavaScript-sample-pdf.acsm?id=bzekBgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=bzekBgAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'The bestselling JavaScript guide, updated with current features and best practices Beginning JavaScript 5th Edition shows you how to work effectively with JavaScript frameworks, functions, and modern browsers, and teaches more effective ...',
      },
    },
    {
      kind: 'books#volume',
      id: 'O_d5DwAAQBAJ',
      etag: 'nV9b/+kWsv4',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/O_d5DwAAQBAJ',
      volumeInfo: {
        title: 'Full Stack JavaScript',
        subtitle: 'Learn Backbone.js, Node.js, and MongoDB',
        authors: ['Azat Mardan'],
        publisher: 'Apress',
        publishedDate: '2018-11-14',
        description:
          "Learn agile JavaScript web development using the latest cutting-edge front-end and back-end technologies including Node.js, MongoDB, Backbone.js, Parse.com, Heroku, and Microsoft Azure. Using a key project example of a message board app, you will learn the foundations of a typical web application: fetching data, displaying it, and submitting new data. Practical examples of the app build are provided with multiple technologies and all code examples are in full color. This book will save you many hours by providing a hand-picked and tested collection of quick start guides that will enable you to spend less time learning and more time building your own applications. Completely updated for this second edition, Full Stack JavaScript uses current versions of all technologies, including ES6/ES2015 and the latest versions of Node and npm. Prototype fast and ship code that matters! What You'll Learn Use a collection of quick start guides, tutorials, and suggestions, to enhance several development appsReview virtually all setup and deployment step-by-step.Work with Chat web/mobile applications Put front-end and back-end components together and deploy them to production environmentWho This Book Is For Programmers who want to learn more about effective JavaScript coding",
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781484237182',
          },
          {
            type: 'ISBN_10',
            identifier: '1484237188',
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 315,
        printType: 'BOOK',
        categories: ['Computers'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.0.1.0.preview.1',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=O_d5DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=O_d5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=O_d5DwAAQBAJ&printsec=frontcover&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=8&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=O_d5DwAAQBAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Full_Stack_JavaScript.html?hl=&id=O_d5DwAAQBAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com/books/download/Full_Stack_JavaScript-sample-pdf.acsm?id=O_d5DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=O_d5DwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Completely updated for this second edition, Full Stack JavaScript uses current versions of all technologies, including ES6/ES2015 and the latest versions of Node and npm. Prototype fast and ship code that matters!',
      },
    },
    {
      kind: 'books#volume',
      id: 'Iv1wDwAAQBAJ',
      etag: 'xkdoxsbnkYc',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/Iv1wDwAAQBAJ',
      volumeInfo: {
        title: 'Hands-On Design Patterns with React Native',
        subtitle:
          'Proven techniques and patterns for efficient native mobile development with JavaScript',
        authors: ['Mateusz Grzesiukiewicz'],
        publisher: 'Packt Publishing Ltd',
        publishedDate: '2018-09-29',
        description:
          'Learn how to write cross platform React Native code by using effective design patterns in the JavaScript world. Get to know industry standard patterns as well as situational patterns. Decouple your application with these set of “Idea patterns”. Key FeaturesMobile development in React Native should be done in a reusable way. Learn how to build scalable applications using JavaScript patterns that are battle tested.Try effective techniques on your own using over 80 standalone examples.Book Description React Native helps developers reuse code across different mobile platforms like iOS and Android. This book will show you effective design patterns in the React Native world and will make you ready for professional development in big teams. The book will focus only on the patterns that are relevant to JavaScript, ECMAScript, React and React Native. However, you can successfully transfer a lot of the skills and techniques to other languages. I call them “Idea patterns”. This book will start with the most standard development patterns in React like component building patterns, styling patterns in React Native and then extend these patterns to your mobile application using real world practical examples. Each chapter comes with full, separate source code of applications that you can build and run on your phone. The book is also diving into architectural patterns. Especially how to adapt MVC to React environment. You will learn Flux architecture and how Redux is implementing it. Each approach will be presented with its pros and cons. You will learn how to work with external data sources using libraries like Redux thunk and Redux Saga. The end goal is the ability to recognize the best solution for a given problem for your next mobile application. What you will learnExplore the design Patterns in React NativeLearn the best practices for React Native developmentExplore common React patterns that are highly used within React Native developmentLearn to decouple components and use dependency injection in your applicationsExplore the best ways of fetching data from the backend systemsLearn the styling patterns and how to implement custom mobile designsExplore the best ways to organize your application code in big codebasesWho this book is for The ideal target audience for this book are people eager to learn React Native design patterns who already know the basics of JavaScript. We can assume that the target audience already knows how to write Hello World in JavaScript and know what are the functions, recursive functions, JavaScript types and loops.',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781788999540',
          },
          {
            type: 'ISBN_10',
            identifier: '1788999541',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 297,
        printType: 'BOOK',
        categories: ['Computers'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '0.1.1.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=Iv1wDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=Iv1wDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=Iv1wDwAAQBAJ&printsec=frontcover&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=9&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=Iv1wDwAAQBAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Hands_On_Design_Patterns_with_React_Nati.html?hl=&id=Iv1wDwAAQBAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=Iv1wDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'This book will show you effective design patterns in the React Native world and will make you ready for professional development in big teams.',
      },
    },
    {
      kind: 'books#volume',
      id: 'Gn1VDgAAQBAJ',
      etag: 'z4+5qZ1wEbk',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/Gn1VDgAAQBAJ',
      volumeInfo: {
        title: 'Refactoring JavaScript',
        subtitle: 'Turning Bad Code Into Good Code',
        authors: ['Evan Burchard'],
        publisher: '"O\'Reilly Media, Inc."',
        publishedDate: '2017-03-13',
        description:
          'How often do you hear people say things like this? "Our JavaScript is a mess, but we’re thinking about using [framework of the month]." Like it or not, JavaScript is not going away. No matter what framework or ”compiles-to-js” language or library you use, bugs and performance concerns will always be an issue if the underlying quality of your JavaScript is poor. Rewrites, including porting to the framework of the month, are terribly expensive and unpredictable. The bugs won’t magically go away, and can happily reproduce themselves in a new context. To complicate things further, features will get dropped, at least temporarily. The other popular method of fixing your JS is playing “JavaScript Jenga,” where each developer slowly and carefully takes their best guess at how the out-of-control system can be altered to allow for new features, hoping that this doesn’t bring the whole stack of blocks down. This book provides clear guidance on how best to avoid these pathological approaches to writing JavaScript: Recognize you have a problem with your JavaScript quality. Forgive the code you have now, and the developers who made it. Learn repeatable, memorable, and time-saving refactoring techniques. Apply these techniques as you work, fixing things along the way. Internalize these techniques, and avoid writing as much problematic code to begin with. Bad code doesn’t have to stay that way. And making it better doesn’t have to be intimidating or unreasonably expensive.',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781491964897',
          },
          {
            type: 'ISBN_10',
            identifier: '1491964898',
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 441,
        printType: 'BOOK',
        categories: ['Computers'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.1.0.0.preview.1',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=Gn1VDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=Gn1VDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=Gn1VDgAAQBAJ&printsec=frontcover&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=10&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=Gn1VDgAAQBAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Refactoring_JavaScript.html?hl=&id=Gn1VDgAAQBAJ',
      },
      saleInfo: {
        country: 'IL',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IL',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=Gn1VDgAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'This book provides clear guidance on how best to avoid these pathological approaches to writing JavaScript: Recognize you have a problem with your JavaScript quality. Forgive the code you have now, and the developers who made it.',
      },
    },
  ],
}

_createBooks()

export const bookService = {
  query,
  get,
  remove,
  save,
  getEmptyBook,
  getNextBookId,
  getFilterBy,
  setFilterBy,
  addReview,
  removeReview,
  queryGoogleBooks,
  addGoogleBook,
}

// Book DB functions

function query() {
  return storageService.query(BOOK_KEY).then((books) => {
    if (gFilterBy.title) {
      const regex = new RegExp(gFilterBy.title, 'i')
      books = books.filter((book) => regex.test(book.title))
    }
    if (gFilterBy.listPrice) {
      books = books.filter(
        (book) => book.listPrice.amount >= gFilterBy.listPrice
      )
    }
    return books
  })
}

function get(bookId) {
  return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
  return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
  if (book.id) {
    return storageService.put(BOOK_KEY, book)
  } else {
    return storageService.post(BOOK_KEY, book)
  }
}

function getFilterBy() {
  return { ...gFilterBy }
}

function setFilterBy(filterBy = {}) {
  // DONE : setup filter inputs for books
  if (filterBy.title !== undefined) gFilterBy.title = filterBy.title
  if (filterBy.listPrice !== undefined) gFilterBy.listPrice = filterBy.listPrice
  return gFilterBy
}

// Review functions

function addReview(bookId, review) {
  review.id = utilService.makeId()
  return storageService.get(BOOK_KEY, bookId).then((book) => {
    if (book.reviews === undefined) book.reviews = [review]
    else book.reviews.push(review)
    save(book)
    return book
  })
}

function removeReview(bookId, reviewId) {
  return storageService.get(BOOK_KEY, bookId).then((book) => {
    book.reviews = book.reviews.filter((review) => review.id !== reviewId)
    save(book)
    return book
  })
}

// Google Book Functions

function queryGoogleBooks(searchParam) {
  const axios = require('axios')

  return axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?printType=books&q=${searchParam}#`
    )
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error)
    })
}

function addGoogleBook(googleBook) {
  console.log('book.service.js - addGoogleBook', googleBook)
  const formatedGoogleBook = formatGoogleBook(googleBook)
  return query().then((books) => {
    const isInDB = books.some(
      (book) => book.googleId === formatedGoogleBook.googleId
    )
    console.log(isInDB)
    if (isInDB) return Promise.reject(new Error('Book already in database'))
    return save(formatedGoogleBook)
  })
}

function formatGoogleBook(googleBook) {
  const listPrice = {
    amount: 0,
    currencyCode: 'ILS',
    isOnSale: false,
  }
  const formatedBook = {
    ...getEmptyBook(),
    googleId: googleBook.id,
    title: googleBook.volumeInfo.title,
    subtitle: googleBook.searchInfo.textSnippet
      ? googleBook.searchInfo.textSnippet
      : '',
    authors: Array.isArray(googleBook.volumeInfo.authors)
      ? [...googleBook.volumeInfo.authors]
      : [googleBook.volumeInfo.authors],
    publishedDate: googleBook.volumeInfo.publishedDate.split('-')[0],
    description: googleBook.volumeInfo.description
      ? googleBook.volumeInfo.description
      : '',
    pageCount: googleBook.volumeInfo.pageCount
      ? googleBook.volumeInfo.pageCount
      : 0,
    categories: [...googleBook.volumeInfo.categories],
    thumbnail: googleBook.volumeInfo.imageLinks
      ? googleBook.volumeInfo.imageLinks.thumbnail
      : '',
    language: googleBook.volumeInfo.language,
    listPrice,
  }
  return formatedBook
}

// Book utils

function getEmptyBook(
  title = '',
  subtitle = '',
  authors = [],
  publishedDate = new Date().getFullYear(),
  description = 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid',
  pageCount = 30,
  categories = [],
  thumbnail = '',
  language = 'he',
  amount = 0,
  currencyCode = 'ILS',
  isOnSale = false
) {
  const listPrice = { amount, currencyCode, isOnSale }
  //DONE : setup data structure of a book & args of the func
  return {
    title,
    subtitle,
    authors,
    publishedDate,
    description,
    pageCount,
    categories,
    thumbnail,
    language,
    listPrice,
  }
}

function getNextBookId(bookId) {
  return storageService.query(BOOK_KEY).then((books) => {
    let nextBookIdx = books.findIndex((book) => book.id === bookId) + 1
    if (nextBookIdx === books.length) nextBookIdx = 0
    return books[nextBookIdx].id
  })
}

function _createBooks() {
  let books = utilService.loadFromStorage(BOOK_KEY)
  if (!books || !books.length) {
    books = []

    console.log(tempBooks)
    // books.push(_createBook(tempBooks[0].title, tempBooks[0].listPrice.amount))
    utilService.saveToStorage(BOOK_KEY, tempBooks)
  }
}

function _createBook(title, listPrice = 250) {
  //DONE : change the after changing getEmptyBook data structure change the args of the func
  const book = getEmptyBook(title, listPrice)
  if (!book.id) book.id = utilService.makeId()
  return book
}

/*//* Example of book data structure
const book = {
    id: 'OXeMG8wNskc',
    title: 'metus hendrerit',
    description: 'placerat nisi sodales suscipit tellus',
    img/21.jpg
    listPrice: {
    amount: 109,
    currencyCode: 'EUR',
    isOnSale: false,
    },
}
*/
