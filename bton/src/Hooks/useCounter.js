import React, {useState} from 'react';

const useCounter = (initValue) => {
    const [count, setCount] = useState(initValue);
    return [
        count,  // Giá trị hiện tại cùa state 
        () => {
            setCount(count + 1);    // Hàm tăng
        },
        () => {
            setCount(count - 1);    // Hàm giảm
        },
    ];
};

export default useCounter;
