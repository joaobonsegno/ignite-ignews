import styles from './styles.module.scss';

type SignInButtonProps = {
    children: string;
} 

export function SignInButton({children}: SignInButtonProps) {

    return (
        <button 
            type="button" 
            className={styles.signInButtonContainer}
        >
            {children}
        </button>
    );
}