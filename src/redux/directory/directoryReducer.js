const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.imgur.com/FaNKvay.jpg",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "jackets",
      imageUrl: "https://i.imgur.com/qh8TxoP.jpg",
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "sneakers",
      imageUrl: "https://i.imgur.com/qfOJ8zO.jpg",
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: "womens",
      imageUrl: "https://i.imgur.com/Z42czEj.jpg",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "mens",
      imageUrl: "https://i.imgur.com/jbw3qKX.jpg",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
