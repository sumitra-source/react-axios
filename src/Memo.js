import React ,{useState} from 'react';
import{ UserContext } from './Context';
import Profile from './Profile';
import'./Layout.css';

const Memo=props=>{
    const [user,setUser]=useState('');
    const [login,setLogin]=useState('');
    let renderUser;
    let loginForm;

    user ? (
        renderUser=(
            <UserContext.Provider value={[user,setUser]}>
                  <div>
            <h1>{user}'s App</h1>
            <Profile/>
            </div>
            </UserContext.Provider>
          
        )
    ) : (
        loginForm=(
            <form>
            <input type='text' onChange={e=>setLogin(e.target.value)}/>
            <button onClick={()=>setUser(login)}>Login</button>
            </form>
    )
    )
    return(
        <>
            <main>
                {renderUser}
                {loginForm}
            </main>
        </>
    );

}
export default Memo