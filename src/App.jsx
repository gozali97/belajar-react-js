import { useState } from 'react';
import PlaceContentCenter from './components/PlaceContentCenter';
import Button from './components/button';
import Card from './components/card';
import Counter from './components/Counter';
import { IconBrandGoogle } from '@tabler/icons-react';
import Input from './components/Input';
import Label from './components/Label';
import Todo from './components/todo';

function App() {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');

    const [form, setForm] = useState({
        name: '',
        email: '',
    });

    function onChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function submit(event) {
        event.preventDefault();
        console.log(form);
    }

    return (
        <PlaceContentCenter>
            <Todo></Todo>
        </PlaceContentCenter>
        // <PlaceContentCenter>
        //     <Card>
        //         <Card.Title>Login web</Card.Title>
        //         <form onSubmit={submit}>
        //             <Card.Body>
        //                 <div className='mb-5 border rounded-lg p-2'>
        //                     <p>Name : {form.name || '____'}</p>
        //                     <p>Email : {form.email || '____'}</p>
        //                 </div>
        //                 <div className='mb-6'>
        //                     <Label htmlFor='name' value={'Name'} />
        //                     <Input value={form.name} onChange={onChange} id={'name'} name={'name'} type={'text'} />
        //                 </div>
        //                 <div className='mb-6'>
        //                     <Label htmlFor='email' value={'Email'} />
        //                     <Input value={form.email} onChange={onChange} id={'email'} type={'email'} name={'email'} />
        //                 </div>
        //             </Card.Body>
        //             <Card.Footer>
        //                 <Button className='bg-blue-900'>
        //                     <IconBrandGoogle />
        //                     Login
        //                 </Button>
        //             </Card.Footer>
        //         </form>
        //     </Card>
        // </PlaceContentCenter>

        // <PlaceContentCenter>
        //     <Counter initialValue={10} />
        // </PlaceContentCenter>

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
