let amountBasVac = 0

const calculationAmountBasicVacation = (tgz, basDay) => {
    amountBasVac = tgz / 30 * basDay;
    amountBasVac = amountBasVac.toFixed(2);
    // amountBasVac = parseFloat(amountBasVac);

    return amountBasVac
}

export default calculationAmountBasicVacation;