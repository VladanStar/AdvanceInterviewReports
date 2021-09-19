const FilterUser = (users, val) => {

    return users.filter(user => {
     if(val === ""){
       return user
     }else if(user.name.toLowerCase().includes(val.toLowerCase())){
       return user
     }else{
       return false;
     }
   })
 }

 export default FilterUser;