import { Types } from "../action/Type";



const initialData = {
    contacts: [
    { id: 0, img: './img/imgcontact.png', email: 'doniyorbektursunov800@gmail.com', tel: '+998991101197', name: 'Samantha William', title: 'Marketing Manager', messege: false },
    { id: 1, img: './img/imgcontact.png', email: 'doniyorbektursunov800@gmail.com', tel: '+998991101197', name: 'Tony Soap', title: 'Marketing Manager', messege: false },
    { id: 2, img: './img/imgcontact.png', email: 'doniyorbektursunov800@gmail.com', tel: '+998991101197', name: 'Nadila Adja', title: 'Marketing Manager', messege: true },
    { id: 3, img: './img/imgcontact.png', email: 'doniyorbektursunov800@gmail.com', tel: '+998991101197', name: 'Karen Hope', title: 'Marketing Manager', messege: false },
    { id: 4, img: './img/imgcontact.png', email: 'doniyorbektursunov800@gmail.com', tel: '+998991101197', name: 'Jordan Nico', title: 'Marketing Manager', messege: true },
    { id: 5, img: './img/imgcontact.png', email: 'doniyorbektursunov800@gmail.com', tel: '+998991101197', name: 'Samantha William', title: 'Marketing Manager', messege: false }
  ],
  comments: JSON.parse(localStorage.getItem('comments')) || [],
  resentActiv: [
    { id: 0, name: 'Transaction Assets', title: 'Ab architecto provident ex accusantium deserunt. ', rangi: '#5149E4' },
    { id: 1, name: 'New Email Register', title: 'Ab architecto provident ex accusantium deserunt. ', rangi: '#FFB9CD' },
    { id: 2, name: 'Transaction Assets', title: 'Ab architecto provident ex accusantium deserunt. ', rangi: 'green' },
    { id: 3, name: 'New Email Register', title: 'Ab architecto provident ex accusantium deserunt. ', rangi: 'red' },
  ],
  cryptocardmass: [
    { id: 0, name: 'Bitcoin', sena: '$25,741', foiz: '15%' },
    { id: 1, name: 'Litecoin', sena: '$45,741', foiz: '25%' },
    { id: 2, name: 'Ethereum', sena: '$45,741', foiz: '25%' },
  ],
  tickeding: [
    { id: 0, rangi: 'red', name: 'Ticket Solds', soni: 11.720 },
    { id: 1, rangi: 'yellow', name: 'Ticket Solds', soni: 2.345 },
    { id: 2, rangi: 'green', name: 'Ticket Solds', soni: 980 },
    { id: 3, rangi: 'blue', name: 'Ticket Solds', soni: 720 },
  ],
  loader: true,
  Emailmassiv: JSON.parse(localStorage.getItem('emailmassiv')) || [],
  dashHedCardsMas: [
    { id: 0, name: 'Progect1', korsatkich: 932, img: './img/40-bag.svg' },
    { id: 1, name: 'Progect2', korsatkich: 9352, img: './img/38-file.svg' },
    { id: 2, name: 'Progect3', korsatkich: 732, img: './img/49-graph.svg' },
    { id: 3, name: 'Progect4', korsatkich: 232, img: './img/investments.svg' },
  ],
  kuntun: JSON.parse(localStorage.getItem('kuntun')) || false ,
  dataSize: JSON.parse(localStorage.getItem('dataSize')) || [],
}

const todoRuducers = (state = initialData, { type, payload }) => {
  
  switch (type) {
    case Types.add:
      localStorage.setItem('comments', JSON.stringify([...state.comments, payload]))
      return {
        ...state, comments: JSON.parse(localStorage.getItem('comments'))
      }
    case Types.delet:
      localStorage.setItem('comments', JSON.stringify(state.comments.filter(val => val.id !== payload)))
      return {
        ...state, comments: JSON.parse(localStorage.getItem('comments'))
      }
    case Types.loader:
      return {
        ...state, loader: false
      }
    case Types.mailclick:
      return {
        ...state, contacts: state.contacts.filter(val => val.id === payload.id ? { payload: payload.messege = true } : val)
      }
    case Types.kuntunClick:
      return {
        ...state, kuntun: payload
      }
       // /////////O'lcham
    case Types.sizeAdd:
      localStorage.setItem('dataSize', JSON.stringify([...state.dataSize, payload]))
      return {
        ...state,
        dataSize: JSON.parse(localStorage.getItem('dataSize')),
      }
    case Types.sizeDelet:
      localStorage.setItem('dataSize', JSON.stringify(state.dataSize.filter((val) => val.id !== payload)))
      return {
        ...state,
        dataSize: JSON.parse(localStorage.getItem('dataSize')),
      }
    case Types.sizeEdit:
      localStorage.setItem('dataSize', JSON.stringify(state.dataSize.map((val) => val.id === payload.id ? payload : val)))
      return {
        ...state,
        dataSize: JSON.parse(localStorage.getItem('dataSize')),
      }
    // /////////O'lcham
    
    default: 
    localStorage.setItem('dataSize', JSON.stringify([
      {
        id: 0,
        img: './img/k.png',
        categorya: 'Nike',
        type: 'Size-30',
        sales: 38,
      },
      {
        id: 2,
        img: './img/k2.png',
        categorya: 'Nike',
        type: 'Size-32',
        sales: 52,
      },
      {
        id: 3,
        img: './img/k.png',
        categorya: 'Nike',
        type: 'Size-34',
        sales: 61,
      },
      {
        id: 4,
        img: './img/k2.png',
        categorya: 'Nike',
        type: 'Size-36',
        sales: 145,
      },
      {
        id: 5,
        img: './img/k2.png',
        categorya: 'Nike',
        type: 'Size-38',
        sales: 48,
      },
      {
        id: 6,
        img: './img/k.png',
        categorya: 'Nike',
        type: 'Size-40',
        sales: 38,
      },
      {
        id: 7,
        img: './img/k2.png',
        categorya: 'Nike',
        type: 'Size-42',
        sales: 38,
      },
      {
        id: 8,
        img: './img/k2.png',
        categorya: 'Nike',
        type: 'Size-44',
        sales: 58,
      },
      {
        id: 9,
        img: './img/k.png',
        categorya: 'Nike',
        type: 'Size-46',
        sales: 98,
      },
      {
        id: 10,
        img: './img/k2.png',
        categorya: 'Nike',
        type: 'Size-48',
        sales: 38,
      },
      {
        id: 11,
        img: './img/k.png',
        categorya: 'Nike',
        type: 'Size-50',
        sales: 108,
      },
      {
        id: 12,
        img: './img/k.png',
        categorya: 'Zara',
        type: 'Size-30',
        sales: 108,
      },
      {
        id: 13,
        img: './img/k2.png',
        categorya: 'Zara',
        type: 'Size-32',
        sales: 52,
      },
      {
        id: 14,
        img: './img/k.png',
        categorya: 'Zara',
        type: 'Size-34',
        sales: 61,
      },
      {
        id: 15,
        img: './img/k.png',
        categorya: 'Zara',
        type: 'Size-36',
        sales: 145,
      },
      {
        id: 16,
        img: './img/k.png',
        categorya: 'Zara',
        type: 'Size-38',
        sales: 48,
      },
      {
        id: 17,
        img: './img/k.png',
        categorya: 'Zara',
        type: 'Size-40',
        sales: 38,
      },
      {
        id: 18,
        img: './img/k.png',
        categorya: 'Zara',
        type: 'Size-42',
        sales: 98,
      },
      {
        id: 19,
        img: './img/k.png',
        categorya: 'Zara',
        type: 'Size-44',
        sales: 58,
      },
      {
        id: 20,
        img: './img/k.png',
        categorya: 'Zara',
        type: 'Size-46',
        sales: 18,
      },
      {
        id: 21,
        img: './img/k.png',
        categorya: 'Zara',
        type: 'Size-48',
        sales: 78,
      },
      {
        id: 22,
        img: './img/k.png',
        categorya: 'Zara',
        type: 'Size-50',
        sales: 108,
      },
      {
        id: 23,
        img: './img/k.png',
        categorya: 'Lacosta',
        type: 'Size-30',
        sales: 18,
      },
      {
        id: 24,
        img: './img/k.png',
        categorya: 'Lacosta',
        type: 'Size-32',
        sales: 52,
      },
      {
        id: 25,
        img: './img/k.png',
        categorya: 'Lacosta',
        type: 'Size-34',
        sales: 61,
      },
      {
        id: 26,
        img: './img/k.png',
        categorya: 'Lacosta',
        type: 'Size-36',
        sales: 45,
      },
      {
        id: 27,
        img: './img/k.png',
        categorya: 'Lacosta',
        type: 'Size-38',
        sales: 18,
      },
      {
        id: 28,
        img: './img/k.png',
        categorya: 'Lacosta',
        type: 'Size-40',
        sales: 38,
      },
      {
        id: 29,
        img: './img/k.png',
        categorya: 'Lacosta',
        type: 'Size-42',
        sales: 38,
      },
      {
        id: 30,
        img: './img/k.png',
        categorya: 'Lacosta',
        type: 'Size-44',
        sales: 58,
      },
      {
        id: 31,
        img: './img/k.png',
        categorya: 'Lacosta',
        type: 'Size-46',
        sales: 68,
      },
      {
        id: 32,
        img: './img/k.png',
        categorya: 'Lacosta',
        type: 'Size-48',
        sales: 38,
      },
      {
        id: 33,
        img: './img/k.png',
        categorya: 'Lacosta',
        type: 'Size-50',
        sales: 8,
      },
    ]))
    return state;
  }

}

export default todoRuducers;