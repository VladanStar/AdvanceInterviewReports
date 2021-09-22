export const filterCompany = (companies, val) => {

    return companies.filter(company => {
     if(val === ""){
       return company
     }else if(company.name.toLowerCase().includes(val.toLowerCase())){
       return company
     }else{
       return false;
     }
   })
 }