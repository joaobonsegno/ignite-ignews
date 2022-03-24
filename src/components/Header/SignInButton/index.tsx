import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { Loading } from 'components/Loading';

export function SignInButton() {
    const { status, data } = useSession();
    const [loading, setLoading] = useState(false);

    async function handleSignIn() {
        setLoading(true);
        await signIn('github');
        setLoading(false);
    }

    return status === 'authenticated' ? (
        <button 
            type="button" 
            className={styles.signInButtonContainer}
            onClick={() => signOut()}
        >
            {data.user?.image ? (
                // eslint-disable-next-line
                <img src={data.user.image} alt="Pic" />
            ) : (
                <FaGithub color="var(--green-500)" />
            )}
            {data.user?.name}
            <FiX />
        </button>
    ) : (
        <button 
            type="button" 
            className={styles.signInButtonContainer}
            onClick={handleSignIn}
            disabled={loading}
        >
            {!loading ? (
                <FaGithub color="var(--yellow-500)" />
            ) : (
                <Loading />
            )}
            Sign in with Github
        </button>
    );
}