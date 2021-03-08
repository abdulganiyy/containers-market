import container from "./assets/images/container-house.jpg";

const initialState = {
  products: [
    {
      id: "abdrgd",
      name: "40ft by 40ft container",
      desc:
        "A large Container with spacious inner that can be used as office space",
      price: 8000,
      location: "Lagos",
      img: container,
    },
    {
      id: "jkmnvdj",
      name: "40ft by 40ft container",
      desc:
        "A large Container with spacious inner that can be used as office space",
      price: 5000,
      location: "Ibadan",
      img: container,
    },
    {
      id: "jkjgnvdj",
      name: "40ft by 40ft container",
      desc:
        "A large Container with spacious inner that can be used as office space",
      price: 5000,
      location: "Ilorin",
      img: container,
    },
    {
      id: "jkmbrtvdj",
      name: "40ft by 40ft container",
      desc:
        "A large Container with spacious inner that can be used as office space",
      price: 3000,
      location: "Lagos",
      img: container,
    },
    {
      id: "jkmnvdjll",
      name: "40ft by 40ft container",
      desc:
        "A large Container with spacious inner that can be used as office space",
      price: 4000,
      location: "Osogbo",
      img: container,
    },
    {
      id: "jkmnvdjmbnn",
      name: "40ft by 40ft container",
      desc:
        "A large Container with spacious inner that can be used as office space",
      price: 5000,
      location: "Kaduna",
      img: container,
    },
  ],
  cart: [],
  totalAmount: 0,
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const products = [...state.products];
      const product = products.find((prod) => {
        return prod.id === action.payload;
      });

      // const cartItem = state.cart.find((item) => {
      //   return item.id === product.id;
      // });
      // if (cartItem) return;
      const newCart = [...state.cart, product];
      const newTotalAmount = newCart.reduce((sum, item) => {
        return sum + item.price;
      }, 0);
      return {
        ...state,
        cart: newCart,
        totalAmount: newTotalAmount,
      };

    case "REMOVE_FROM_CART":
      if (this.state.cart.length === 0) return;

    case "ORDER_NOW":
      return {
        ...state,
        totalAmount: action.payload,
      };

    case "SIGNUP":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };

    case "LOGIN":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };

    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };

    default:
      return state;
  }
};

export default reducer;
