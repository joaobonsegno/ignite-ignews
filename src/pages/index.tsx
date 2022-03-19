import { GetStaticProps } from 'next';
import Head from 'next/Head';
import Image from 'next/image';
import avatarImg from '../assets/images/avatar.svg';
import SubscribeButton from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import styles from './home.module.scss';

type HomeProps = {
    product: {
        priceId: string;
        amount: number;
    }
}

export default function Home({ product }: HomeProps) {

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
                        <strong>
                            for {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            }).format(product.amount)} month
                        </strong>
                    </p>
                    <SubscribeButton />
                </section>

                <Image src={avatarImg} alt="Girl coding" />
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const price = await stripe.prices.retrieve('price_1JrYlkEcXGhtUhLcLbGE4Zl8', {
        expand: ['product']
    });

    const product = {
        priceId: price.id,
        amount: price.unit_amount / 100
    }

    return {
        props: {
            product
        },
        revalidate: 60 * 60 * 24 // 24 hours
    };
}
