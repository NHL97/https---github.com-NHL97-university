import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpdateStudent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [marks, setMarks] = useState('');
    const [grade, setGrade] = useState('');
    const [city, setCity] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/student/${id}`)
            .then(res => {
                const { name, email, marks, grade, city } = res.data;
                setName(name);
                setEmail(email);
                setMarks(marks);
                setGrade(grade);
                setCity(city);
            })
            .catch(err => console.error(err));
    }, [id]);

    function handleSubmit(e) {
        e.preventDefault();
        axios.put(`http://localhost:5000/update/${id}`, { name, email, marks, grade, city })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="container d-flex vh-100 justify-content-center align-items-center">
            <div className="card w-50 shadow-lg">
                <div className="card-header bg-warning text-dark">
                    <h4 className="mb-0 text-center">Update Student Information</h4>
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
                            <button type="submit" className="btn btn-success btn-block">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateStudent;
