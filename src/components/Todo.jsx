import { useState } from 'react';
import Input from './Input';
import Button from './button';
import Card from './card';

export default function Todo() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    // tasks: {
    //     id: random,
    //     name: newTask,
    //     completed: false,
    // }

    function handleAddTask(e) {
        e.preventDefault();
        setTasks((prevTask) => [
            ...prevTask,
            {
                id: Math.floor(Math.random() * Date.now()),
                name: newTask,
                completed: false,
            },
        ]);
        setNewTask('');
    }

    function handleCompleteTask(id) {
        const updateTask = tasks.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    completed: !task.completed,
                };
            }
            return task;
        });

        setTasks(updateTask);
    }
    function handleRemoveTask(id) {
        const removeTask = tasks.filter((task) => task.id !== id);
        {
            setTasks(removeTask);
        }
    }

    return (
        <Card>
            <Card.Title>Todo</Card.Title>
            <Card.Body>
                <form>
                    <div className='flex items-center gap-x-2'>
                        <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                        <Button onClick={handleAddTask} text='input data' />
                    </div>
                </form>
                {tasks.length > 0 ? (
                    <ol className='space-y-2 mt-4'>
                        {' '}
                        {tasks.map((task) => (
                            <li key={task.id} className='flex items-center justify-between'>
                                <span>
                                    {task.name}
                                    {task.completed ? '✅' : '❌'}
                                </span>
                                <div className='flex items-center gap-x-2'>
                                    <button onClick={() => handleCompleteTask(task.id)} className='px-2 py-1 border text-xs'>
                                        Mark as {task.completed ? 'completed' : 'incomplete'}
                                    </button>
                                    <button onClick={() => handleRemoveTask(task.id)} className='px-2 py-1 border text-xs'>
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}{' '}
                    </ol>
                ) : null}
            </Card.Body>
            <Card.Footer>you have {tasks.length} tasks.</Card.Footer>
        </Card>
    );
}
