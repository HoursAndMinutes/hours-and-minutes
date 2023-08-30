import React, { useState } from 'react';
import LogInForm from "../components/LogInForm";
import RegisterForm from "../components/RegisterForm";

const App = () => {
    const [showLoginForm, setShowLoginForm] = useState(true);

    return (
        <section>
            {showLoginForm ? <LogInForm /> : <RegisterForm />}
            {showLoginForm ? (
                <p>New User? Sign Up <a href="#" onClick={() => setShowLoginForm(false)}>Here!</a></p>
            ) : (
                <p>Already have an account? <a href="#" onClick={() => setShowLoginForm(true)}>Log In!</a></p>
            )}
        </section>
    );
};

export default App;
