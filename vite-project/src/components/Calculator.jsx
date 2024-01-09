import React, { useState } from 'react'

function Calculator() {
    const [val, setVal] = useState(0);
    const [exp, setExp] = useState("")

    function inputhandler(e) {
        console.log(e.target);
        switch(e.target.innerHTML){
            case "*":
                setExp(exp+val+"*");
                setVal()
                break;     
            case "-":
                setExp(exp+val+"-");
                setVal()
                break;     
            case "+":
                setExp(exp+val+"+");
                setVal()
                break;     
            case "/":
                setExp(exp+val+"/");
                setVal()
                break;    

            case "=": 
                setVal(eval(exp+val))
                setExp("")
                break;

            case "ac":
                setVal();
                setExp("");
                break;

            case "del":
                if(val.length>0){
                    let newval = val.slice(0,-1);
                    setVal(newval);
                }
                break;
                
            default:
                setVal((val=="0" || isNaN(val))?e.target.innerHTML:val+e.target.innerHTML);
        }

    }
    return (
        <div className='container'>
            <div className='display'>
                {exp}
                <br />
                {val}
            </div>
            <div className='input_grid' onClick={inputhandler}>
                <div className='ac'>ac</div>
                <div className='del'>del</div>
                <div className='plus'>+</div>
                <div>2</div>
                <div>1</div>
                <div>3</div>
                <div>*</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>/</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>-</div>
                <div>.</div>
                <div>0</div>
                <div className='equal'>=</div>
            </div>
        </div>

    )
}

export default Calculator