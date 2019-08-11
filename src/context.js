import React from 'react'

const UserContext = React.createContext('default Value')
const ChannelContext = React.createContext()

const UserProvider = UserContext.Provider
const ChannelProvider = ChannelContext.Provider

const UserConsumer = UserContext.Consumer
const ChannelConsumer = ChannelContext.Consumer

export {UserProvider,UserConsumer,ChannelProvider,ChannelConsumer}

export {UserContext,ChannelContext}