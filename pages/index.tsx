import type { NextPage } from "next";
import Image from "next/image";
import classes from "../styles/pages/Home.module.scss";
import BackgroundImage from "../public/img/models/man-in-suit-crossing-street.webp";
import Link from "next/link";
import useMobileCheck from "../lib/useMobileCheck";
import Head from "next/head";

const Home: NextPage = () => {
	const isMobile = useMobileCheck();

	return (
		<>
			<Head>
				<title>Perseus</title>
				<meta
					name="description"
					content={`
          Welcome to Perseus.
          The one stop shop for everything mens luxury
          `}
				/>
			</Head>
			<main className={classes.main}>
				<section className={classes.productHighlight}>
					<div className={classes.introText}>
						<h1>The Distinguished Man</h1>
						<span>
							With dozens of options to choose from,
							<br />
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
							quality={50}
							priority
						/>
						<div className={`${!isMobile && classes.darken}`}></div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
