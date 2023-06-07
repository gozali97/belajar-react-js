import { useState } from 'react';
import Button from './button';

export default function Counter({ initialValue }) {
    const [counter, setCounter] = useState(initialValue);

    function handleClick() {
        const nextCount = counter + 1;

        // setCounter(nextCount);
        setCounter((counter) => counter + 1);
    }
    return (
        <div>
            <h1 className='text-5xl font-bold'>{counter}</h1>
            <div className='mt-5 flex items-center gap-2'>
                <Button onClick={handleClick}>Count +1</Button>
                <Button
                    onClick={() => {
                        handleClick();
                        handleClick();
                        handleClick();
                    }}>
                    Count +3
                </Button>
            </div>
        </div>
    );
}
