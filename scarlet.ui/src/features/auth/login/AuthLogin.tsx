import React, { ChangeEvent, useState } from 'react';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import AuthModel from '../AuthModel';
import { Account } from '../types';

function AuthLogin(){
    const [form, setForm] = useState<Account>({
        login: "",
        password: "",
    })

    const onChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value
        })
    }
    return(
        <AuthModel>
            <Input 
            placeholder='User12345' 
            type='text'
            name='login'
            value={form.login}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeForm(e)}
            />
            <Input 
            placeholder='1234' 
            type='password' 
            name='password'
            value={form.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeForm(e)}
            />
            <Button value='Login' />
        </AuthModel>
    );
}

export default AuthLogin;