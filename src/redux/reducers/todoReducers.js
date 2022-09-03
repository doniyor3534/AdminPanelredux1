import { Types } from "../action/Type";

const initialData = {
    contacts:[
        {id:0,img:'./img/imgcontact.png',email:'doniyorbektursunov800@gmail.com',tel:'+998991101197',name:'Samantha William',title:'Marketing Manager',messege:false},
        {id:1,img:'./img/imgcontact.png',email:'doniyorbektursunov800@gmail.com',tel:'+998991101197',name:'Tony Soap',title:'Marketing Manager',messege:false},
        {id:2,img:'./img/imgcontact.png',email:'doniyorbektursunov800@gmail.com',tel:'+998991101197',name:'Nadila Adja',title:'Marketing Manager',messege:true},
        {id:3,img:'./img/imgcontact.png',email:'doniyorbektursunov800@gmail.com',tel:'+998991101197',name:'Karen Hope',title:'Marketing Manager',messege:false},
        {id:4,img:'./img/imgcontact.png',email:'doniyorbektursunov800@gmail.com',tel:'+998991101197',name:'Jordan Nico',title:'Marketing Manager',messege:true},
        {id:5,img:'./img/imgcontact.png',email:'doniyorbektursunov800@gmail.com',tel:'+998991101197',name:'Samantha William',title:'Marketing Manager',messege:false}
    ],
    comments:JSON.parse(localStorage.getItem('comments'))|| [],
    resentActiv:[
        {id:0,name:'Transaction Assets',title:'Ab architecto provident ex accusantium deserunt. ',rangi:'#5149E4'},
        {id:1,name:'New Email Register',title:'Ab architecto provident ex accusantium deserunt. ',rangi:'#FFB9CD'},
        {id:2,name:'Transaction Assets',title:'Ab architecto provident ex accusantium deserunt. ',rangi:'green'},
        {id:3,name:'New Email Register',title:'Ab architecto provident ex accusantium deserunt. ',rangi:'red'},
    ],
    cryptocardmass:[
      {id:0,name:'Bitcoin',sena:'$25,741',foiz:'15%'},
      {id:1,name:'Litecoin',sena:'$45,741',foiz:'25%'},
      {id:2,name:'Ethereum',sena:'$45,741',foiz:'25%'},
    ],
    tickeding:[
      {id:0,rangi:'red',name:'Ticket Solds',soni:11.720},
      {id:1,rangi:'yellow',name:'Ticket Solds',soni:2.345},
      {id:2,rangi:'green',name:'Ticket Solds',soni:980},
      {id:3,rangi:'blue',name:'Ticket Solds',soni:720},
    ],
    loader:true,
    Emailmassiv:JSON.parse(localStorage.getItem ('emailmassiv'))|| [],
    dashHedCardsMas:[
      {id:0,name:'Progect1',korsatkich:932,img:'./img/40-bag.svg'},
      {id:1,name:'Progect2',korsatkich:9352,img:'./img/38-file.svg'},
      {id:2,name:'Progect3',korsatkich:732,img:'./img/49-graph.svg'},
      {id:3,name:'Progect4',korsatkich:232,img:'./img/investments.svg'},
    ]
}

const todoRuducers = (state=initialData,{type,payload}) =>{
        switch(type){
             case Types.add:
                  localStorage.setItem('comments',JSON.stringify([...state.comments,payload]))
              return{
                ...state,comments:JSON.parse(localStorage.getItem('comments'))
              }
             case Types.delet:
                  localStorage.setItem('comments',JSON.stringify(state.comments.filter(val=>val.id !== payload)))
              return{
                ...state,comments:JSON.parse(localStorage.getItem('comments'))
              }
             case Types.loader:
              return{
                ...state,loader:false
              }
             case Types.mailclick:
              return{
                ...state,contacts:state.contacts.filter(val=>val.id===payload.id ?{payload:payload.messege=true}:val)
              }
            default :return state;
        }

}

export default todoRuducers;