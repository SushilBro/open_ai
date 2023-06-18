import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


export default function SignIn() {
  
    const navigate= useNavigate();
    const { loginWithRedirect } = useAuth0();


    const handleSignIn=()=>{
        navigate('/homepage')
    }
    return <div className='bg-blue-600 h-screen'>

        <h1 className='text-2xl font-bold mb-6 text-center pt-14 w-full text-white'></h1>
        <div className='flex items-center justify-center'>
            <Paper elevation="16" className='w-2/6 h-full p-8 bg-white shadow-lg rounded-lg '>
                <h1 className='text-4xl	font-serif font-bold'>Sign In</h1>
                <p className='text-slate-500 mt-2'>Sign in and start managing your drive files</p>
                <h3 className='mt-4 font-semibold text-sm	'>Username or Email Address</h3>
                <input className='w-full border-2 p-1 rounded-lg my-2'></input>
                <h3 className=' font-semibold text-sm	'>Password</h3>
                <input className='w-full border-2 p-1 rounded-lg my-2'></input>
                <div className='flex flex-row'>
                <Checkbox></Checkbox>
                <h3 className='mt-2'>Remember Me</h3>
                </div>
                <button className='w-full bg-blue-600 rounded-lg p-2 mt-2 text-white font-bold' onClick={handleSignIn}>Sign In</button>
                <button className='p-2 mt-2 text-blue-500' onClick={() => loginWithRedirect()}>Login with google</button>
                
            </Paper>
        </div>
    </div>
   

}
/*
Frontend - You would have a React.js application that will handle the UI. You might use libraries like React Router for navigation, Axios for API calls, etc.

Home component: Display a sign-in button for users to log in using Auth0.
Dashboard component: After users are authenticated, display an interface for selecting files from Google Drive or OneDrive.
Q&A component: After a file is selected, display an interface for asking questions and displaying answers.
Backend - A Node.js application that will handle API endpoints and interact with Auth0, Google Drive, OneDrive, and GPT.

User Authentication route: Authenticate users using Auth0 and retrieve access tokens for Google Drive and OneDrive.
File Retrieval route: Retrieve files from Google Drive and OneDrive using their respective SDKs.
Document Processing route: Process the document content using Langchain and file-specific handlers.
Q&A Processing route: Handle questions and generate answers using Chroma and GPT.
*/