export const filterReport = (reports, val) => {

    return reports.filter(report => {
     if(val === ""){
       return report
     }else if(report.companyName.toLowerCase().includes(val.toLowerCase())){
       return report
     }else{
       return false;
     }
   })
 }