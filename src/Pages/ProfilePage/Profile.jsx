import { ManageAccounts } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ManageAccount from './Manage Account/ManageAccount'
import './profile.css'
import ProfileHistory from './ProfileHistorySection/profileHistory'


function Profile() {
const dispatch = useDispatch()

const User = useSelector((state) => state.user ) 
const {isUserLoading,user ,userIsLogged } = User




useEffect(()=>{ 

if(userIsLogged){


dispatch(getuserDetails())



}


}  , [userIsLogged] )



useEffect(() => {
  if (user) {
setEmail(user.email )
  }
}, [user]);

  const [email, setEmail] = useState(  user ?   user.email  : "email"  );
  const [name, setName] = useState(user ?   user.name  : "name");
  const [password, setPassword] = useState('pass');

const hundleChange = () => {

dispatch(updateUserDetails({ id : user.id , email : email , name : name }))

/*
    <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
<button onClick={hundleChange}  >Save</button>
*/
}


  return (
    <div   className='profile-section'  >

 

<ProfileHistory></ProfileHistory>

<ManageAccount></ManageAccount>

    </div>
  )
}

export default Profile
