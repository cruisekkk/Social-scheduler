import React from 'react';
import { Input, Button, Checkbox } from 'antd';

function SignIn() {
    return (
        <>
            <p>email/username</p>
            <Input size="small" placeholder="large size" />
            <br />
            <br />
            <br />
            <Input.Password />
            <br />
            <br />
            <p>password</p>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </>
    );
}

export default SignIn;
