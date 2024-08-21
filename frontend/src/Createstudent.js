import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Createstudent() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [marks,setMarks]=useState('')
    const [grade,setGrade]=useState('')
    const [city,setCity]=useState('')
    const navigate = useNavigate()

    function handlesubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:5000/create', { name, email, marks,grade,city })
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
                <div className='w-50 bg-white rounded p-3'>
                    <form onSubmit={handlesubmit}> {/* Form submission triggers handlesubmit function */}
                        <h2>Add Student</h2>
                        <div className='mb-3'>
                            <label>Name</label>
                            <input
                                type='text'
                                className='form-control'
                                onChange={(e) => setName(e.target.value)} // Update name state when input value changes
                            />
                        </div>
                        <div className='mb-3'>
                            <label>Email</label>
                            <input
                                type='email'
                                className='form-control'
                                onChange={(e) => setEmail(e.target.value)} // Update email state when input value changes
                            />
                        </div>

                        <div className='mb-3'>
                            <label>Marks</label>
                            <input
                                type='number'
                                className='form-control'
                                onChange={(e) => setMarks(e.target.value)} // Update marks state when input value changes
                            />
                        </div>
                        <div className='mb-3'>
                            <label>Grade</label>
                            <input
                                type='text'
                                className='form-control'
                                onChange={(e) => setGrade(e.target.value)} // Update grade state when input value changes
                            />
                        </div>
                        <div className='mb-3'>
                            <label>City</label>
                            <input
                                type='text'
                                className='form-control'
                                onChange={(e) => setCity(e.target.value)} // Update city state when input value changes
                            />
                        </div>
                        <button className="btn btn-success">Submit</button> {/* Submit button to trigger form submission */}
                    </form>
                </div>
            </div>



        </div>
    )
}

export default Createstudent