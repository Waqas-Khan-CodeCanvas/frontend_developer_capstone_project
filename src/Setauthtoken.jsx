import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Setauthtoken = () => {
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!params.authtoken || params.authtoken === "") {  
            console.log(params);
            navigate('/frontend_developer_capstone_project/login');
        }
        else {
            sessionStorage.setItem('auth-token', params.authtoken);
            navigate('/frontend_developer_capstone_project');
        }
        // eslint-disable-next-line
    }, [])

  return (
    <div>Loading...</div>
  )
}

export default Setauthtoken;