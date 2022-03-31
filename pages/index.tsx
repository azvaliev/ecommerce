import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import classes from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <main className={classes.main}>
      <section className={classes.productHighlight}>
        
        <div className={classes.introText}>
          <h1>
            The Distinguished Man
          </h1>
          <span>
            With dozens of options to choose from,<br/>
            there&apos;s a perfect look for everybody
          </span>
          <div className={classes.buttonWrapper}>
            <button className="btn btn-outline">
              View Latest Styles
            </button>
          </div>
        </div>
        <div className={classes.productWrapper}>
          <Image 
            src="/img/models/man-in-suit-crossing-street.jpg"
            alt="Man in Suit"
            objectFit="cover"
            objectPosition="0 35%"
            layout="fill"
            />
        </div>
      </section>
    </main>
  )
}

export default Home
