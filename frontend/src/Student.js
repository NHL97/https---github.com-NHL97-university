import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Student() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(res => setStudents(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/student/${id}`);
            setStudents(students.filter(student => student.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
            <div className="card vw-75 shadow-lg">
                <div className="card-header d-flex justify-content-between align-items-center bg-primary text-white">
                    <h4 className="mb-0">Student List</h4>
                    <Link to="/create" className="btn btn-success">Add New Student</Link>
                </div>
                <div className="card-body p-0">
                    <table className="table table-hover">
                        <thead className="table-primary">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Marks</th>
                                <th>Grade</th>
                                <th>City</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.marks}</td>
                                    <td>{student.grade}</td>
                                    <td>{student.city}</td>
                                    <td>
                                        <Link to={`update/${student.id}`} className="btn btn-primary btn-sm me-2">Update</Link>
                                        <button 
                                            className="btn btn-danger btn-sm" 
                                            onClick={() => handleDelete(student.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Student;
