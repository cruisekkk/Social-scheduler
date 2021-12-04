import React from 'react';
import { Input, Button} from 'antd';


function SignIn({setIsLogedIn, setStatus}) {
    
    return (
        <>
            <p>email/username</p>
            <Input size="small" placeholder="please input email or username" />
            <br />
            <br />
            <br />
            <p>password</p>
            <Input.Password size="small" placeholder="please input password" />
            <br />
            <br />
            <Button type="primary" onClick={(e) => 
                {
                    console.log(e)
                    setIsLogedIn(true)
                }
             } >
                Submit
            </Button>
            <br/>
            <br/>
            <a onClick={() => setStatus("register") } href="#" style={{color : 'yellow'}} >create account</a>
        </>
    );
}

export default SignIn;
