import React, { useState } from 'react';
import { createFeedback } from '../../methods/feedback';

export default function Feedback() {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            await createFeedback(email, feedback);
            setEmail('');
            setFeedback('');
        } catch (error) {
            console.error('Error submitting feedback:', error);
            // Optionally show an error message
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center px-4 py-8 min-h-screen bg-gray-50">
            <h2 className="text-2xl font-bold mb-6 text-center">Feedback</h2>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white shadow-md rounded px-8 py-6 space-y-4"
            >
                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="feedback" className="mb-1 text-sm font-medium text-gray-700">
                        Feedback
                    </label>
                    <textarea
                        id="feedback"
                        className="border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                        disabled={loading}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className={`w-full text-white font-semibold py-2 px-4 rounded transition ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                    disabled={loading}
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}
