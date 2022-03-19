import styles from './styles.module.scss';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function SignInButton() {
    const [signed, setSigned] = useState(false);

    function handleSignInClick() {
        setSigned(true);
    }

    function handleSignOutClick() {
        setSigned(false);
    }

    return signed ? (
        <button 
            type="button" 
            className={styles.signInButtonContainer}
            onClick={handleSignOutClick}
        >
            <FaGithub color="var(--green-500)" />
            João Bonsegno
            <FiX />
        </button>
    ) : (
        <button 
            type="button" 
            className={styles.signInButtonContainer}
            onClick={handleSignInClick}
        >
            <FaGithub color="var(--yellow-500)" />
            Sign in with Github
        </button>
    );
}