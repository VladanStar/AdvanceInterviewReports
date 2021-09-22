export const errorHandle = (data) => {
    const date = new Date(data.date);
if(!data.date){
    throw new Error('Date is reqired!!!');
}
if(date > new Date()){
    throw new Error('Date must be in past!!!')
}
if(!data.phase){
    throw new Error('Phase is reqired!!!')
}if(!data.status){
    throw new Error('Status is reqired!!!')
}
if(!data.notes){
    throw new Error('Notes is reqired!!!')
}
};