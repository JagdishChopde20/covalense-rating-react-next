import { useRouter } from "next/router";

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState();

  const optionChecked = (event) => {
    console.log(event.target.value);
  }

  const submit = () => {
    if (selectedOption) {
      router.push({
        pathname: 'showRating',
        query: { id: selectedOption }
      });
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Rating - CovalenseDigital</title>
        <meta name="description" content="This is a assignment done as a part of interview process of CovalenseDigital." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <article className={styles.card}>
          <span className={styles.logo}>
            <Image src="/icon-star.svg" alt="Vercel Logo" width={15} height={15} />
          </span>

          <section>
            <h1 className={styles.headingPrimary}>How did we do?</h1>
            <p className={styles.para}>
              Please let us know how we did with your support request. All feedback is appreciated to help us improve our offerings!
            </p>
          </section>

          <section className={styles.checkGroup}>
            <input type="radio" name="options" id="option1" onChange={(e) => setSelectedOption(1)} />
            <label htmlFor="option1" className={styles.checkLabel}>1</label>

            <input type="radio" name="options" id="option2" onChange={(e) => setSelectedOption(2)} />
            <label htmlFor="option2" className={styles.checkLabel}>2</label>

            <input type="radio" name="options" id="option3" onChange={(e) => setSelectedOption(3)} />
            <label htmlFor="option3" className={styles.checkLabel}>3</label>

            <input type="radio" name="options" id="option4" onChange={(e) => setSelectedOption(4)} />
            <label htmlFor="option4" className={styles.checkLabel}>4</label>

            <input type="radio" name="options" id="option5" onChange={(e) => setSelectedOption(5)} />
            <label htmlFor="option5" className={styles.checkLabel}>5</label>
          </section>

          <button className={styles.btnSubmit} onClick={submit}>SUBMIT</button>
        </article>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
