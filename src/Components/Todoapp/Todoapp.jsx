//#1a0033

import { useState } from 'react';
import logo from './images/logo.png'
import Task from './Task';

import '../../css/style.css'

const Todoapp = () => {

    const [tasks, setTasks] = useState([]);
    const [task, getTask] = useState('');

    const Submit = () => {

        setTasks((preValue) => {
            return ([...preValue, task])
        });

        getTask('')
    }

    const Delete = (index) => {

        setTasks((preValue) => {

            return preValue.filter((ele, pos) => {

                return index !== pos;
            })

        })
    }

    const Clear = () => {

        setTasks([]);
    }

    return (
        <>

            <div style={{ backgroundColor: '#00001a', height: '100vh', display: "flex", alignItems: 'center', justifyContent: "center", flexDirection: 'column' }}>

                <div className='app' style={{ display: "flex", alignItems: 'center', flexDirection: 'column', height: '80vh', width: '30%' }}>

                    <img src={logo} alt="Logo" style={{ height: '80px', width: '80px', marginBottom: '25px' }} />
                    <h1 style={{ fontSize: '40px', fontFamily: 'sans-serif', color: 'white', textAlign:'center' }}>My Todo List</h1>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '25px 0px' }}>

                        <input value={task} type="text" placeholder='Enter Your Task' style={{ textAlign: 'center', fontSize: 'larger', padding: '5px', width: '70%' }} onChange={(event) => getTask(event.target.value)} />

                        <svg xmlns="http://www.w3.org/2000/svg" width="38px" height="38px" fill="currentColor" className="bi bi-plus-circle ms-3 text-white" viewBox="0 0 16 16" onClick={Submit} style={{ cursor: 'pointer' }}>
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>

                    </div>

                    <div style={{ width: '80%', display: 'flex', flexDirection: 'column' }} >

                        {tasks.map((data, index) => {

                            return (
                                <Task key={index} task={data} Delete={Delete} index={index} />
                            );
                        })}

                    </div>


                    <button style={{ width: '70%', backgroundColor: '#3939ac', color:'white', fontWeight:600, borderRadius: '8px', border:'none', fontSize:'20px', padding:'3px 0px', margin:'20px 0px' }} onClick={() => Clear()}> Clear All </button>

                </div>

            </div>

        </>);
}

export default Todoapp;