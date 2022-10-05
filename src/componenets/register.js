import React from 'react';

import './css/sign.css';

function Register(){
    return(
        <div>
            <div>
                회원가입
            </div>
            <div>
                <form method="get">
                    <label for="name">이름</label>
                    <p><input type="text" name="name" id="name" placeholder='이름을 입력해주세요.'/></p>

                    <label for="email">이메일</label>
                    <p><input type="email" name="email" id="email" placeholder='이메일을 입력해주세요.'/></p>

                    <label for="password">비밀번호</label>
                    <p><input type="password" name="password" id="password" minLength="8" maxLength="16" placeholder='설정할 비밀번호를 입력해주세요.'/></p>

                    <input type="submit" value="회원가입"/>
                </form>
            </div>
        </div>
    );
}

export default Register;