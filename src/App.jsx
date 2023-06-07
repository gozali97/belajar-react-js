import { useState } from 'react';
import PlaceContentCenter from './components/PlaceContentCenter';
import Button from './components/button';
import Card from './components/card';

function App() {
    const [counter, setCounter] = useState(0);

    function handleClick() {
        const nextCount = counter + 1;

        // setCounter(nextCount);
        setCounter((counter) => counter + 1);
    }
    return (
        <PlaceContentCenter>
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
        </PlaceContentCenter>

        // <div className='bg-slate-100 text-slate-800 antialiased flex justify-center items-center min-h-screen'>
        //     <div className='max-w-md w-full'>
        //         <Card>
        //             <Card.Title>Hello Guys</Card.Title>
        //             <Card.Body>
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid recusandae quod cum illum error est dolor unde non omnis
        //                 sequi quo at perspiciatis sed iusto commodi quidem nesciunt similique, nobis officia. Quo saepe praesentium accusantium vel
        //                 dignissimos earum accusamus minima consequatur alias provident ducimus magnam laudantium, veniam, modi exercitationem libero
        //                 deleniti? Maxime perferendis molestias, saepe rerum aut quas neque ab fuga nobis repellendus.
        //             </Card.Body>
        //             <Card.Footer>
        //                 <Button>Register</Button>
        //             </Card.Footer>
        //         </Card>
        //     </div>
        // </div>
    );
}

export default App;
