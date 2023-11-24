let amountOGD = 0



const calcOGD = (tgz, e11, e12, e13, e21, e22, e23) => {


    const day = e21 - e11;
    const mounth = e22 - e12;
    const year = e23 - e13;

    // let newMounth = 0;
    let newYear = 0;


    // застосовувати якщо враховувати дні
    // let newMounth = 0;

    // if (day < 0) {
    //     newMounth = mounth - 1;
    // } else {
    //     newMounth = mounth;
    // } 

    // if (mounth < 0) {
    //     newYear = year - 1;
    // } else {
    //     newYear = year;
    // }
    // const totalMounth = newYear * 12 + newMounth;
   
    if (mounth < 0) {
        newYear = year - 1;
    } else {
        newYear = year;
    }

    const totalMounth = newYear * 12 + mounth - 1;

     if (totalMounth <= 0) {
         amountOGD = 0;
         return amountOGD;
    }


    const minOGD = (tgz * 0.25).toFixed(2);
    const totalOGD = (tgz * 0.04 * totalMounth).toFixed(2);
  
 
   
    
    if (parseFloat(totalOGD) > parseFloat(minOGD)) {
        amountOGD = totalOGD;
        return amountOGD;
    } 
    else {
        amountOGD = minOGD;
    }
   return amountOGD;
    
}

export default calcOGD;