import React, { Fragment, useState } from 'react';
import './style.css';

function Calculator() {
    const [inputValues, setInputValues] = useState<any>('');

    const buttonsArray = ['C', '+-', '%', '/', 7, 8, 9, 'X', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.',];

    const handleButtonClick = (value: any) => {
        if(value==='C'){
            setInputValues('')
        }
        else if(value==='X'){
            setInputValues((prevValue:any) => prevValue +'*' );

        }
        else{
        setInputValues((prevValue:any) => prevValue + value);
        }
    };
    const handleSubmit=()=>{
        try{
            const result=eval(inputValues)
            setInputValues(result)
        }
        catch(err){
            setInputValues('NaN')
        }
    }

    const handleInputChange = (event:any) => {
        setInputValues(event.target.value);
    };

    return (
        <Fragment>
            <div className='container'>
                <div className='inputFieldContainer'>
                    <input
                        type="text"
                        className='inputField'
                        value={inputValues}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='buttonsContainer'>
                    {buttonsArray.map((value: any, index: number) => (
                        <button key={index} className='styleBtn' onClick={() => handleButtonClick(value)}>
                            {value}
                        </button>
                    ))}
                    <button className='equalSign' onClick={handleSubmit}>=</button>
                </div>
            </div>
        </Fragment>
    );
}

export default Calculator;
