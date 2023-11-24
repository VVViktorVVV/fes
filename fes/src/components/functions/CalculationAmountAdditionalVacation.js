let amountAddVac = 0

const calculationAmountAdditionalVacation = (tgz, additDay) => {
    amountAddVac = tgz / 30 * additDay;
    amountAddVac = amountAddVac.toFixed(2);
    // amountAddVac = parseFloat(amountAddVac);

    return amountAddVac
}

export default calculationAmountAdditionalVacation;