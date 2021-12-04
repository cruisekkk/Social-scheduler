import React from "react"
import { Input, Button} from 'antd';

function Register({setIsLogedIn}) {
    return(
           <>
            <p>username</p>
            <Input size="small" placeholder="please set username" />
            <br />
            <br />
            <br />
            <p>email</p>
            <Input size="small" placeholder="please set email" />
            <br />
            <br />
            <br />
            <p>password</p>
            <Input.Password size="small" placeholder="please set password"/>
            <br />
            <br />
            <Button type="primary" htmlType="submit" onClick={() => {setIsLogedIn(true);}}>
                Submit
            </Button>
           </>
    )
}

export default Register