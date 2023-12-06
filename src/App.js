import React from 'react';
import './App.css';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

function TestBanner({ title, description, buttonText }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="font-bold text-xl mb-2">{title}</h3>
            <p>{description}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {buttonText}
            </button>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <header className="bg-blue-600 text-white text-xl p-6 shadow-lg flex justify-between items-center">
                <h1 className="font-semibold">IELTS Learning App</h1>
                <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-2 px-4 rounded">
                    Login
                </button>
            </header>
            <main className="p-8 bg-blue-50 min-h-screen">
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-blue-700 mb-4">Welcome to the IELTS Learning Platform</h2>
                    <p className="text-lg mb-6">Here you can find resources to prepare for your IELTS exam. Explore lessons, practice tests, and expert tips to enhance your English language skills.</p>

                    {/* Listening Test Banner */}
                    <TestBanner
                        title="Listening Test"
                        description="Sharpen your listening skills with our practice exercises and simulated test environments."
                        buttonText="Start Listening Test"
                    />

                    {/* Reading Test Banner */}
                    <TestBanner
                        title="Reading Test"
                        description="Improve your reading comprehension with a variety of practice passages and quizzes."
                        buttonText="Start Reading Test"
                    />

                    {/* Writing Test Banner */}
                    <TestBanner
                        title="Writing Test"
                        description="Enhance your writing skills through guided quizzes and essay writing practices."
                        buttonText="Start Writing Test"
                    />

                    {/* Speaking Test Banner */}
                    <TestBanner
                        title="Speaking Test"
                        description="Practice your spoken English with our interactive speaking test simulations."
                        buttonText="Start Speaking Test"
                    />

                </section>
            </main>
            <footer className="bg-blue-700 text-white text-center p-4 flex flex-col items-center">
                <p>IELTS Learning App © 2023</p>
            </footer>
        </div>
    );
}

export default App;
