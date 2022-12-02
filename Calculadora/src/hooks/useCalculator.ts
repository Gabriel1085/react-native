import { useState, useRef } from 'react';

enum Operators {
    add, rest, multiply, divide
}

export const useCalculator = () => {

    const [number, setNumber] = useState('0');
    const [smallNumber, setSmallNumber] = useState('0');

    const lastOperation = useRef<Operators>();

    const clean = () => {
        setNumber('0');
        setSmallNumber('0');
    };

    const { add, multiply, rest, divide } = Operators;

    const cleanOneNumber = () => {
        if (number.length <= 2 && number.includes('-')) {
            setNumber('0');
        } else {
            if (number.length < 2) {
                setNumber('0');
            } else
            {setNumber(number.slice(0, -1));}
        }
    };

    const buildNumber = ( option: string ) => {
        let isValid = true;
        if (option === '0') {
            if (number === '0') {
                isValid = false;
            }
        } else if (option === '.') {
            if (number.includes('.')){
                isValid = false;
            }
        }

        if (isValid) {
            if (number === '-0'){
                option !== '.' ? setNumber('-' + option) : setNumber(number + option);
            } else {
                number === '0' && option !== '.' ?  setNumber(option) : setNumber(number + option);
            }
        }
    };

    const invertNumber = () => {
        number.includes('-') ? setNumber( number.replace('-', '')) : setNumber('-' + number);
    };

    const switchNumbers = () => {
        number.endsWith('.') ? setSmallNumber(number.slice(0,-1)) : setSmallNumber(number);
        setNumber('0');
    };

    const handleOperation = (op: Operators) => {
        switchNumbers();
        lastOperation.current = op;
    };

    const calculate = () => {

        if (smallNumber !== '0') {

            const n1 = Number(smallNumber);
            const n2 = Number(number);

            switch (lastOperation.current) {
                case add:
                    setNumber(`${ n1 + n2 }`);
                    break;
                case rest:
                    setNumber(`${ n1 - n2 }`);
                    break;
                case multiply:
                    setNumber(`${ n1 * n2 }`);
                    break;
                case divide:
                    setNumber(`${ (n1 / n2).toFixed(1) }`);
                    break;
                default:
                    break;
            }
            setSmallNumber('0');
        }

    };

    return {
        clean,
        cleanOneNumber,
        buildNumber,
        invertNumber,
        handleOperation,
        calculate,
        number,
        smallNumber,
        add,
        multiply,
        divide,
        rest,
    };
};
