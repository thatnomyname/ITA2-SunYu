var config = {
    style: 'mapbox://styles/yu1118/cmtpw79tj00fw01r26d2zc3xo',
    accessToken: 'pk.eyJ1IjoieXUxMTE4IiwiYSI6ImNtdGpmbTJ0ZjAzaHQyeG9rNWZiOTF2MW8ifQ.42VCz5_RqJa2oqZxPeQ7lQ',
    showMarkers: false,
    markerColor: '#3FB1CE',

    inset: false,
    theme: 'light',
    use3dTerrain: false,
    auto: false,
    
    title: 'How Do Visitors Experience Singapore?',
    subtitle: 'From attraction concentration and online attention to the places and experiences visitors remember',
    byline: 'By Sun Yu',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    
    chapters: [


  // CHAPTER 1

  {
    id: 'chapter-1',

    alignment: 'left',

    hidden: false,

    title:
      'Where Are Singapore’s Tourist Attractions Concentrated?',

    description:
      'Singapore’s tourist attractions are not evenly distributed across the island. Counting attractions within each planning area reveals a strong concentration around the Central Region, while outer planning areas show a much more dispersed pattern.',

    location: {

      center: [
        103.8198,
        1.3521
      ],

      zoom: 10.5,

      pitch: 0,

      bearing: 0

    },

    mapAnimation: 'flyTo',

    onChapterEnter: [

      {
        layer:
          'planning-area-attraction-count-v4 (1)',

        opacity: 0.8
      },

      {
        layer:
          'tourist-attractions-reviewcount',

        opacity: 0
      },

      {
        layer:
          'tourist-attractions-qualitative',

        opacity: 0
      }

    ],

    onChapterExit: [

      {
        layer:
          'planning-area-attraction-count-v4 (1)',

        opacity: 0
      }

    ]

  },


  // CHAPTER 2
 
  {
    id: 'chapter-2',

    alignment: 'left',

    hidden: false,

    title:
      'Which Attractions Receive the Most Visitor Attention?',

    description:
      'From this map, online review counts reveal that visitor attention is concentrated around a relatively small number of major attractions. Larger and darker circles indicate higher review counts, making the most prominent tourism hotspots immediately visible.',

    location: {

      center: [
        103.8198,
        1.3521
      ],

      zoom: 11,

      pitch: 0,

      bearing: 0

    },

    mapAnimation: 'flyTo',

    onChapterEnter: [

      {
        layer:
          'planning-area-attraction-count-v4 (1)',

        opacity: 0
      },

      {
        layer:
          'tourist-attractions-reviewcount',

        opacity: 1
      },

      {
        layer:
          'tourist-attractions-qualitative',

        opacity: 0
      }

    ],

    onChapterExit: [

      {
        layer:
          'tourist-attractions-reviewcount',

        opacity: 0
      }

    ]

  },


  // CHAPTER 3A

  {
    id: 'chapter-3a',

    alignment: 'left',

    hidden: false,

    title:
      'What Actually Makes Up This Concentration of Attractions?',

    description:
      'The concentration of attractions in the Central Region is shaped by several different types of destinations. Cultural, natural, artistic, urban and leisure attractions overlap within the same compact area, creating a diverse and layered tourism landscape.',

    location: {

      center: [
        103.851,
        1.292
      ],

      zoom: 12.5,

      pitch: 0,

      bearing: 0

    },

    mapAnimation: 'flyTo',

    onChapterEnter: [

      {
        layer:
          'planning-area-attraction-count-v4 (1)',

        opacity: 0
      },

      {
        layer:
          'tourist-attractions-reviewcount',

        opacity: 0
      },

      {
        layer:
          'tourist-attractions-qualitative',

        opacity: 1
      }

    ],

    onChapterExit: []

  },


  // CHAPTER 3B
 
  {
    id: 'chapter-3b',

    alignment: 'left',

    hidden: false,

    title:
      'Culture & Heritage',

    description:
      'Many Culture & Heritage attractions are located around historic districts and landmarks in the Central Region. This shows that visitors can have a strong cultural experience while exploring central Singapore.',

    location: {

      center: [
        103.851,
        1.292
      ],

      zoom: 12.5,

      pitch: 0,

      bearing: 0

    },

    mapAnimation: 'flyTo',

    onChapterEnter: [

      {
        layer:
          'planning-area-attraction-count-v4 (1)',

        opacity: 0
      },

      {
        layer:
          'tourist-attractions-reviewcount',

        opacity: 0
      },

      {
        layer:
          'tourist-attractions-qualitative',

        opacity: 1
      }

    ],

    onChapterExit: []

  },


  // CHAPTER 3C

  {
    id: 'chapter-3c',

    alignment: 'left',

    hidden: false,

    title:
      'Nature & Parks',

    description:
      'Nature & Parks attractions are scattered throughout the Central Region, providing green and relaxing spaces within the city. They give visitors a chance to enjoy nature while still being close to urban attractions.',

    location: {

      center: [
        103.851,
        1.292
      ],

      zoom: 12.5,

      pitch: 0,

      bearing: 0

    },

    mapAnimation: 'flyTo',

    onChapterEnter: [

      {
        layer:
          'planning-area-attraction-count-v4 (1)',

        opacity: 0
      },

      {
        layer:
          'tourist-attractions-reviewcount',

        opacity: 0
      },

      {
        layer:
          'tourist-attractions-qualitative',

        opacity: 1
      }

    ],

    onChapterExit: []

  },


  // CHAPTER 3D

  {
    id: 'chapter-3d',

    alignment: 'left',

    hidden: false,

    title:
      'Arts & Museums',

    description:
      'Arts Museums are mainly located across the Central Region, including museums, galleries and other creative spaces. These places give visitors more opportunities to experience Singapore’s art and culture.',

    location: {

      center: [
        103.851,
        1.292
      ],

      zoom: 12.5,

      pitch: 0,

      bearing: 0

    },

    mapAnimation: 'flyTo',

    onChapterEnter: [

      {
        layer:
          'planning-area-attraction-count-v4 (1)',

        opacity: 0
      },

      {
        layer:
          'tourist-attractions-reviewcount',

        opacity: 0
      },

      {
        layer:
          'tourist-attractions-qualitative',

        opacity: 1
      }

    ],

    onChapterExit: []

  },


  // CHAPTER 3E

  {
    id: 'chapter-3e',

    alignment: 'left',

    hidden: false,

    title:
      'Urban Attractions & Lifestyle',

    description:
      'Urban Attractions & Lifestyle are mainly connected with busy streets and everyday city life in the Central Region. These places allow visitors to experience the more modern and lively side of Singapore.',

    location: {

      center: [
        103.851,
        1.292
      ],

      zoom: 12.5,

      pitch: 0,

      bearing: 0

    },

    mapAnimation: 'flyTo',

    onChapterEnter: [

      {
        layer:
          'planning-area-attraction-count-v4 (1)',

        opacity: 0
      },

      {
        layer:
          'tourist-attractions-reviewcount',

        opacity: 0
      },

      {
        layer:
          'tourist-attractions-qualitative',

        opacity: 1
      }

    ],

    onChapterExit: []

  },

  // CHAPTER 3F

  {
    id: 'chapter-3f',

    alignment: 'left',

    hidden: false,

    title:
      'Entertainment & Leisure',

    description:
      'Entertainment & Leisure attractions are mainly places for visitors to have fun and enjoy different leisure activities. These places add more playful and relaxing experiences to tourism in the Central Region.',

    location: {

      center: [
        103.851,
        1.292
      ],

      zoom: 12.5,

      pitch: 0,

      bearing: 0

    },

    mapAnimation: 'flyTo',

    onChapterEnter: [

      {
        layer:
          'planning-area-attraction-count-v4 (1)',

        opacity: 0
      },

      {
        layer:
          'tourist-attractions-reviewcount',

        opacity: 0
      },

      {
        layer:
          'tourist-attractions-qualitative',

        opacity: 1
      }

    ],

    onChapterExit: []

  },


  // CHAPTER 3G
 
  {
    id: 'chapter-3g',

    alignment: 'left',

    hidden: false,

    title:
      'A Diverse Tourism Attractions',

    description:
      'When all five types of attractions are shown together, the Central Region appears as a diverse tourism area rather than a place dominated by only one kind of attraction. Different types of attractions are located close to each other, giving visitors a wider range of experiences within the same part of Singapore.',

    location: {

      center: [
        103.851,
        1.292
      ],

      zoom: 12.5,

      pitch: 0,

      bearing: 0

    },

    mapAnimation: 'flyTo',

    onChapterEnter: [

      {
        layer:
          'planning-area-attraction-count-v4 (1)',

        opacity: 0
      },

      {
        layer:
          'tourist-attractions-reviewcount',

        opacity: 0
      },

      {
        layer:
          'tourist-attractions-qualitative',

        opacity: 1
      }

    ],


    onChapterExit: [

      {
        layer:
          'tourist-attractions-qualitative',

        opacity: 0
      }

    ]

  },


  // CHAPTER 4

  {
    id: 'chapter-4',

    alignment: 'left',

    hidden: false,

    title:
      'What Do Visitors Remember?',

    description:
      'These three attractions reveal three different kinds of visitor experience. Sultan Mosque is remembered through culture and street atmosphere, Fort Canning Park through greenery and photogenic landmarks, while Gardens by the Bay stands out for its iconic scenery and stronger overall satisfaction.',

    location: {

      center: [
        103.855,
        1.290
      ],

      zoom: 13,

      pitch: 0,

      bearing: 0

    },

    mapAnimation: 'flyTo',

    onChapterEnter: [

      {
        layer:
          'planning-area-attraction-count-v4 (1)',

        opacity: 0
      },

      {
        layer:
          'tourist-attractions-reviewcount',

        opacity: 0
      },

      {
        layer:
          'tourist-attractions-qualitative',

        opacity: 1
      }

    ],

    onChapterExit: [

      {
        layer:
          'tourist-attractions-qualitative',

        opacity: 0
      }

    ]

  }

]

};
