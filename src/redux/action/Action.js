import { Types } from "./Type"

export const Reytingfun=(data)=>{
    return{
        payload:data,
        type:Types.reyting
    }
}
export const ADD=(data)=>{
    return{
        payload:data,
        type:Types.add
    }
}
export const DEL=(data)=>{
    return{
        payload:data,
        type:Types.delet
    }
}
export const Loaderfun=()=>{
    return{
        type:Types.loader
    }
}
export const Mailfun=(id)=>{
    return{
        payload:id,
        type:Types.mailclick
    }
}