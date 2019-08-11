import React from 'react'
import { UserConsumer,ChannelConsumer } from '../context';


class C extends React.Component {
    render(){
        return (
            <UserConsumer>
                {
                    (user) => {
                        return(
                            <ChannelConsumer>
                                {
                                     channel => {
                                         return (
                                             <div>
                                                 <h2>Hello From C -{user} - {channel}</h2>
                                             </div>
                                         )
                                     }
                                }
                            </ChannelConsumer>
                        )
                    }
                }
            </UserConsumer>
        )
    }
    
}

export default C
