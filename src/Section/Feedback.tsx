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
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center  h-screen  px-4 py-10">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg box bg-[#0000001d] rounded-2xl shadow-2xl p-8 space-y-6 "
            >
                <h2 className="text-3xl font-bold text-center">
                    Let me know your querry, thoughts or feedback.
                </h2>

                <div className="flex flex-col text-xl">

                    <input
                        type="email"
                        id="email"
                        style={{ color: "white" }}

                        className="placeholder-gray-400 border-primary border-2 box  text-black rounded px-4 py-2 bg-[#00000000]"
                        placeholder="yourname@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                    />
                </div>

                <div className="flex flex-col text-xl">

                    <textarea
                        id="feedback"
                        rows={5}
                        className="placeholder-gray-400 border-primary border-2 box text-black rounded px-4 py-2  bg-[#00000000]"
                        placeholder="Let me know your thoughts..."
                        style={{ color: "white" }}
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                        disabled={loading}
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full box bg-secondary text-[#000000]  py-2 px-4 rounded transition duration-200 ${loading
                        ? 'bg-blue-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}
