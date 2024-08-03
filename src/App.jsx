import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard'; 

 const users = [
    {
        name: 'Carlos Jose Quijano',
        username: 'straver00',
        isFollowing: true,
    },
    {
        name: 'Username',
        username: 'username',
        isFollowing: false,
    },
    {
        name: 'Car',
        username: 'car',
        isFollowing: true,
    }
]
export function App () {
    return (
        <section className='App'>
            {
                users.map(({ username, name, isFollowing}) => 
                    (
                        <TwitterFollowCard
                            key={username} 
                            userName={username}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                )
            }
        </section>
    )
}