import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from 'next/head';
import Image from 'next/image';
import styles from "../styles/ShowRating.module.scss";

export default function ShowRating(props) {
    const router = useRouter();
    const [rating, setRating] = useState();

    useEffect(() => {
        setRating(router.query.id);
    }, [router.query.id]);

    return (
        <React.Fragment>
            <div className={styles.container}>
                <Head>
                    <title>Show Rating - CovalenseDigital</title>
                    <meta name="description" content="This page shows rating selected by user on previous page." />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>

                    <article className={styles.card}>
                        <figure className={styles.logo}>
                            <Image src="/illustration-thank-you.svg" alt="Vercel Logo" width={140} height={90} />
                            <figcaption className={styles.ratingBlock} >You selected {rating} out of 5</figcaption>
                        </figure>

                        <section>
                            <h2 className={styles.headingSecondary}>Thank you!</h2>
                            <p className={styles.para}>
                                {"We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch."}
                            </p>
                        </section>

                    </article>

                </main>

                <footer className={styles.footer}>

                </footer>
            </div>

        </React.Fragment>
    )
}