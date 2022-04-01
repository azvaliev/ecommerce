import type { NextPage } from 'next'
import Image from 'next/image'
import classes from '../styles/Home.module.scss'
import BackgroundImage from "../public/img/models/man-in-suit-crossing-street.jpg"
import Link from 'next/link'

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
            <Link href="/products/all" passHref>
              <button className="btn btn-outline">
                View Latest Styles
              </button>
            </Link>
          </div>
        </div>
        <div className={classes.productWrapper}>
          <Image 
            src={BackgroundImage}
            alt="Man in Suit"
            placeholder="blur"
            objectFit="cover"
            objectPosition="0 35%"
            layout="fill"
            priority
            />
        </div>
      </section>
    </main>
  )
}

export default Home
