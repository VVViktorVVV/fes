import React from "react";
import classes from "./table.module.css"


const Table = ({ arrayR }) => {

    
    return (
        <div>
            <table className={classes.table}>
                <caption>Суми до виплати</caption>
                <thead>
                    <tr>
                        <th>№п.п</th>
                        <th>Назва виплати</th>
                        <th>Сума</th>

                    </tr>
                </thead>
                <tbody>
                    <tr className={classes.table}>
                        <td>1</td>
                        <td>Одноразова грошова допомога при звільненні</td>
                        <td>{arrayR[0]}</td>
                    </tr>
                    <tr className={classes.table}>
                        <td>2</td>
                        <td>Грошова компенсація за дні невикористаної щорічної основної відпустки</td>
                        <td>{arrayR[1]}</td>
                    </tr>
                    
                    <tr className={classes.table}>
                        <td>3</td>
                        <td>Грошова допомога для оздоровлення</td>
                        <td>{arrayR[3]}</td>
                    </tr>
                    {/* <tr className={classes.table}>
                        <td>5</td>
                        <td>Матеріальна допомога для вирішення соціально-побутових питань</td>
                        <td>0</td>
                    </tr> */}
                    <tr className={classes.table}>
                        <td>4</td>
                        <td>Коменсація за дні невикористаної додаткової відпустки</td>
                        <td>{arrayR[2]}</td>
                    </tr>
                  
                                        
                </tbody>

            </table>
            
        </div>
    
    )
}

export default Table;