import Image from 'next/image';

import { SignInButton } from './SignInButton';
import logoImg from '../../assets/images/logo.svg';

import styles from './styles.module.scss';

export function Header() {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <div>
                    <Image src={logoImg} alt="ig.news" />
                    <nav>
                        <a className={styles.active}>Home</a>
                        <a>Posts</a>
                    </nav>
                </div>
                <SignInButton />
            </div>
        </header>
    );
}