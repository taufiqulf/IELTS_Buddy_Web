import React from 'react';
import './App.css';
import { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import {useAuth0} from '@auth0/auth0-react';
import ListeningForm from "./components/ListeningForm";
import ReadingForm from "./components/ReadingForm";


function App() {

const {loginWithPopup, user, isAuthenticated, logout} = useAuth0();

// State to keep track of the active tab
const [activeTab, setActiveTab] = useState('Writing');

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

    return (   
        <div className="App">
            <header className="bg-orange-600 text-white text-xl p-6 shadow-lg flex justify-between items-center">
                <h1 className="font-semibold text-orange-100">English Buddy Admin Page</h1>
                {isAuthenticated ? (
                    <button
                        className="bg-orange-50 text-orange-600 hover:bg-orange-100 font-bold py-2 px-4 rounded"
                        onClick={() => logout({returnTo: "http://localhost:6060"})}
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        className="bg-orange-50 text-orange-600 hover:bg-orange-100 font-bold py-2 px-4 rounded"
                        onClick={loginWithPopup}
                    >
                        Login
                    </button>
                )}
            </header>
            <main className="p-8 bg-blue-50 min-h-screen">
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-orange-600 mb-4">
                        {isAuthenticated ? `Welcome ${user.name}` : "Welcome to English Buddy Admin"}
                    </h2>
                    <p className="text-lg mb-6">
                        This is your hub for managing the English Buddy platform. Here, you can oversee user accounts, monitor progress, manage resources, and update IELTS preparation materials. Your role is crucial in ensuring a smooth and effective learning experience for our users.
                    </p>
                    {isAuthenticated && (
                        <div role="tablist" className="tabs tabs-lifted tabs-lg">
                            <a
                            href="#" 
                            role="tab"
                            className={`tab transform transition duration-300 ease-in-out 
                                        ${activeTab === 'Listening' ? 'tab-active bg-orange-600 text-white' : 'hover:bg-orange-200'}`}
                            onClick={() => handleTabChange('Listening')}
                            >
                            Listening
                            </a>
                            <a
                            href="#" 
                            role="tab"
                            className={`tab transform transition duration-300 ease-in-out 
                                        ${activeTab === 'Reading' ? 'tab-active bg-orange-600 text-white' : 'hover:bg-orange-200'}`}
                            onClick={() => handleTabChange('Reading')}
                            >
                            Reading
                            </a>
                        </div>
                    )}
                    {isAuthenticated && activeTab === 'Listening' && <ListeningForm />}
                    {isAuthenticated && activeTab === 'Reading' && <ReadingForm />}
                </section>
            </main>
            <footer className="bg-orange-600 text-orange-100 text-center p-4 flex flex-col items-center">
                <p>English Buddy © 2023</p>
            </footer>
        </div>
    );
}

export default App;
