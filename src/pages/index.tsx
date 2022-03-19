import Head from 'next/Head';
import Image from 'next/image';
import avatarImg from '../assets/images/avatar.svg';
import SubscribeButton from '../components/SubscribeButton';
import styles from './home.module.scss';

export default function Home() {
    return (
        <>
            <Head>
                <title>HOME | ig.news</title>
            </Head>
            
            <main className={styles.contentContainer}>
                <section className={styles.hero}>
                    <span>👏 Hey, welcome</span>
                    <h1>News about the <strong>React</strong> world.</h1>
                    <p>
                        Get access to all the publications <br/>
                        <strong>for $9.90 month</strong>
                    </p>
                    <SubscribeButton />
                </section>

                <Image src={avatarImg} alt="Girl coding" />
            </main>
        </>
    );
}
