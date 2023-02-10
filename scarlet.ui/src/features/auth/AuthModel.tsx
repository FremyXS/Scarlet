import React, { ReactNode } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import './AuthModel.scss';

function AuthModel({children}:{children: ReactNode}){
    return (
        <div className='auth'>
            <div className='auth-window'>
                <div className='auth-window__name'>
                    <h1>SCARLET</h1>
                </div>
                <div className='auth-window__inputs'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthModel;