import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/carActions";

const initialState = {
  price: 26395,
  name: '2019 Ford Mustang',
  image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  features: [],
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ],
  additionalPrice: 0
}

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        additionalFeatures: state.additionalFeatures.filter(item => item.name !== action.payload.name),
        additionalPrice: state.additionalPrice + action.payload.price,
        features: [...state.features, action.payload]
      }
    case REMOVE_FEATURE:
      return {
        ...state,
        additionalFeatures: [...state.additionalFeatures, action.payload],
        additionalPrice: state.additionalPrice - action.payload.price,
        features: state.features.filter(item => item.name !== action.payload.name)
      }
    default:
      return state;
  }
}

export const mapCarToProps = state => {
  return {
    price: state.price,
    name: state.name,
    image: state.image,
    features: state.features
  }
}

export const mapFeaturesToProps = state => {
  return {
    features: state.additionalFeatures
  }
}