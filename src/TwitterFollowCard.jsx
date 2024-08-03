import { useState } from 'react';

export function TwitterFollowCard ({children, userName = 'unknown', initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
    ? 'tw-followcard-button is-following' 
    : 'tw-followcard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className='tw-followcard'>
            <header className='tw-followcard-header'>
            <img 
            className='tw-followcard-avatar'
            alt = "Straver00" 
            src = {`https://unavatar.io/${userName}`} />
            <div className='tw-followcard-info'>
                <strong>{children}</strong>
                <span
                className='tw-followcard-username'
                >@{userName}</span>
            </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-fowllowcard-text'>{text}</span>
                    <span className='tw-followcard-cancel'>
                        Dejar de seguir
                    </span>
                </button>
            </aside>
        </article>
    )
}