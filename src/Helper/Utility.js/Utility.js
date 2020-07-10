export const getformbody =(params) =>{
    let formbody = [];
    for(let property in params){
        let encoded_property = encodeURIComponent(property);// user name => user20%name..
        let encoded_value = encodeURIComponent(params[property]);// chitesh bansal = chitesh20%bansal
        formbody.push(`${(encoded_property)}`+'='+`${encoded_value}`);
    }
    console.log(formbody.join('&'));
    return formbody.join('&');
}