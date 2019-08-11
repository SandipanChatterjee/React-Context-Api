import React, { useContext } from 'react'
import C from './C';
import {UserContext,ChannelContext} from '../context';

const B = () => {
        const user = useContext(UserContext);
        const Channel = useContext(ChannelContext)
        return (
            <div>
               <h2>Hello from B -{user} - {Channel}</h2> 
              <C />  
            </div>
        )
}

export default B

