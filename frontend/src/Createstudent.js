import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateStudent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [marks, setMarks] = useState('');
    const [grade, setGrade] = useState('');
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/create', { name, email, marks, grade, city })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="container d-flex vh-100 justify-content-center align-items-center">
            <div className="card w-50 shadow-lg">
                <div className="card-header bg-primary text-white">
                    <h4 className="mb-0 text-center">Add New Student</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                placeholder="Enter student's name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter student's email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="marks" className="form-label">Marks</label>
                            <input
                                type="number"
                                id="marks"
                                className="form-control"
                                placeholder="Enter student's marks"
                                value={marks}
                                onChange={(e) => setMarks(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="grade" className="form-label">Grade</label>
                            <input
                                type="text"
                                id="grade"
                                className="form-control"
                                placeholder="Enter student's grade"
                                value={grade}
                                onChange={(e) => setGrade(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">City</label>
                            <input
                                type="text"
                                id="city"
                                className="form-control"
                                placeholder="Enter student's city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-success btn-block">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateStudent;
