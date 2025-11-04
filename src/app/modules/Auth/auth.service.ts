
type TloginData={
    email:string;
    password:string
}
const loginUser =async(data:TloginData)=>{

    console.log("user logging...",data)
};


export const AuthService ={
    loginUser
}