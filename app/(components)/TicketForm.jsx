"use client";

import {useRouter} from 'next/navigation'
import React, {useState} from 'react'

const TicketForm = () => {
    const router = useRouter();

    const startingTicketData = {
        title: '',
        description: '',
        priority: 1,
        progress: 0,
        status: 'not started',
        category: 'Hardware Issue',
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const [formData, setFormData] = useState(startingTicketData);

    return (
        <div className="flex justify-center">
            <form className="flex flex-col gap-4 w-1/2">
                <h3 className="text-2xl font-bold mb-4">Create a New Ticket</h3>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <label htmlFor="priority">Priority:</label>
                <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                >
                    <option value={1}>Low</option>
                    <option value={2}>Medium</option>
                    <option value={3}>High</option>
                </select>
                <label htmlFor="progress">Progress:</label>
                <input
                    type="number"
                    id="progress"
                    name="progress"
                    value={formData.progress}
                    onChange={handleChange}
                />
                <label htmlFor="status">Status:</label>
                <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    <option value="not started">Not Started</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </form>
        </div>
    )
}

export default TicketForm