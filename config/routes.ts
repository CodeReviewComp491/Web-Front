const paths = {
  home: {
    index: '/',
    signin: {
      index: '/signin',
      __query: ['signin'],
    },
    signup: {
      index: '/signup',
      __query: ['signup'],
    },
    communityReviews: {
      index: '/community-reviews',
      __query: ['community-reviews'],
    },
    profil: {
      index: '/profil',
      __query: ['profil'],
    },
    settings: {
      index: '/settings',
      __query: ['settings'],
    },
    askReview: {
      index: '/ask-review',
      __query: ['ask-review'],
    },
    review: {
      index: '/review',
      id: {
        index: '/review/:id',
        __query: ['review', ':id'],
      },
      __query: ['review'],
    }
  }
}

const getPath = () => {

}

export default paths;