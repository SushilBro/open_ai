import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = () => {
    const responseGoogle = (response: any) => {
        // Handle the response from Google Sign-In
        
        console.log(response);
    };

    return (
        <div>
            <GoogleLogin
                clientId="594437624018-sqf0cvageo1oddnu8u0loccvugs0m616.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                redirectUri='http://localhost:3000/homepage'
                
            />
        </div>
    );
};

export default GoogleLoginButton;
