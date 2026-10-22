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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/Tickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const newTicket = await response.json();
            console.log('Ticket created:', newTicket);
            router.refresh(); // Refresh the current route to fetch the latest tickets
            router.push('/');
        } else {
            console.error('Failed to create ticket');
            throw new Error('Failed to create ticket');
        }
        
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
            <form className="flex flex-col gap-3 w-1/2" method="POST" onSubmit={handleSubmit}>
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
                    rows={4}
                />
                <label htmlFor="category">Category:</label>
                <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                >
                    <option value="Hardware Issue">Hardware Issue</option>
                    <option value="Software Issue">Software Issue</option>
                    <option value="Network Issue">Network Issue</option>
                </select>
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
                    type="range"
                    id="progress"
                    name="progress"
                    min="0"
                    max="100"
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

                <input type="submit" 
                    value="Create Ticket" 
                    className="btn max-w-xs self-center" 
                />
            </form>
        </div>
    )
}

export default TicketForm