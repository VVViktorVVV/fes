import React, {useState} from "react";
import classes from "./form.module.css";
import calcOGD from "../functions/CalcOGD";
import calculationAmountAdditionalVacation from "../functions/CalculationAmountAdditionalVacation";
import calculationAmountBasicVacation from "../functions/CalculationAmountBasicVacation";





const Form = ({setArrayR}) => {

    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');
    const [inputValue5, setInputValue5] = useState('');
    const [inputValue6, setInputValue6] = useState('');
    const [inputValue7, setInputValue7] = useState('');
    const [inputValue8, setInputValue8] = useState('');
    const [inputValue9, setInputValue9] = useState('');

    const handleInputChange1 = (event) => { setInputValue1(event.target.value) }


    const handleInputChange2 = (event) => {setInputValue2(event.target.value)}
    const handleInputChange3 = (event) => {setInputValue3(event.target.value)}
    const handleInputChange4 = (event) => {setInputValue4(event.target.value)}
    const handleInputChange5 = (event) => {setInputValue5(event.target.value)}
    const handleInputChange6 = (event) => {setInputValue6(event.target.value)}
    const handleInputChange7 = (event) => {setInputValue7(event.target.value)}
    const handleInputChange8 = (event) => {setInputValue8(event.target.value)}
    const handleInputChange9 = (event) => {setInputValue9(event.target.value)}
    
    
    

    const handleSubmit = () => {

        const gz = parseFloat(inputValue1).toFixed(2);
     
        const result = [
            calcOGD(inputValue1, inputValue2, inputValue3, inputValue4, inputValue5, inputValue6, inputValue7),
            calculationAmountBasicVacation(inputValue1, inputValue8),
            calculationAmountAdditionalVacation(inputValue1, inputValue9),
            gz];

        return setArrayR(result);
    }

   
    




    return (
        <div>
            <form className={classes.form}>
                <div className={classes.container}>
                    <label className={classes.label}>
                        Розрахункова сума грошового забезпечення
                        
                    <input
                        // type="number"
                        className={classes.input}
                        name="total"
                        onChange={handleInputChange1}
                        value={inputValue1}
                        />
                        </label>
                
                </div>
                
                <div className={classes.container}>
                    <label className={classes.label}>
                    Дата початку служби
                    <input
                        type="number"
                        className={classes.input}
                        name = "day"
                        onChange={handleInputChange2}
                        value={inputValue2}
                    />
                      <input
                         type="number"
                        className={classes.input}
                        name = "mounth"
                        onChange={handleInputChange3}
                        value={inputValue3}
                    />
                      <input
                        type="number"
                        className={classes.input}
                        name = "year"
                        onChange={handleInputChange4}
                        value={inputValue4}
                    />

                </label>
                </div>
                <div className={classes.container}><div className={classes.container}></div>
                    <label className={classes.label}>
                    Дата закінчення служби
                    <input
                        type="number"
                        className={classes.input}
                        name = "day"
                        onChange={handleInputChange5}
                        value={inputValue5}
                    />
                      <input
                        type="number"
                        className={classes.input}
                        name = "mounth"
                        onChange={handleInputChange6}
                        value={inputValue6}
                    />
                      <input
                        type="number"
                        className={classes.input}
                        name = "year"
                        onChange={handleInputChange7}
                        value={inputValue7}
                    />
                </label></div>
                 
                
                

                <div className={classes.container}><label className={classes.label}>
                    Дні невикористаної основної відпустки
                    <input
                        type="number"
                        className={classes.input}
                        onChange={handleInputChange8}
                        value={inputValue8}
                    />
                </label></div>
                 

                <div className={classes.container}><label className={classes.label}>
                    Дні невикористаної додаткової відпустки
                    <input
                        type="number"
                        className={classes.input}
                        onChange={handleInputChange9}
                        value={inputValue9}
                    />
                </label></div>
                
                
                <button type='button' className={classes.btn} onClick={handleSubmit}>Підрахуймо</button>
            </form> 
    </div>
)
}

export default Form;
