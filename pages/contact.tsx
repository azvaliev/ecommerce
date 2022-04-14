import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import classes from "../styles/pages/Contact.module.scss";

type RequestState = "sent" | "error" | "";

const ContactPage = () => {
	const router = useRouter();
	const [messageIsSubmitted, setMessageIsSubmitted] =
		useState<RequestState>("");

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formElements = e.currentTarget.elements;
		const nameInput = formElements[0] as HTMLInputElement;
		const messageInput = formElements[1] as HTMLInputElement;
		const requestData = {
			name: nameInput.value,
			message: messageInput.value,
		};
		e.currentTarget.reset();
		try {
			// Send with third party
			setMessageIsSubmitted("sent");
			setTimeout(() => {
				router.push("/");
			}, 6000);
		} catch (err) {
			setMessageIsSubmitted("error");
			setTimeout(() => {
				setMessageIsSubmitted("");
			}, 5000);
		}
	};

	return (
		<>
			<Head>
				<title>Contact Us</title>
				<meta
					name="description"
					content="Contact us with any question/concerns you may have"
				/>
			</Head>
			<main className={classes["root"]}>
				<h1>Contact Us</h1>
				{messageIsSubmitted !== "sent" && (
					<p>All questions, concerns and comments are welcome!</p>
				)}
				<div
					className={`${classes["success"]} ${
						messageIsSubmitted !== "sent" && classes["hidden"]
					}`}
				>
					<h2>
						Message delivered successfully
						<svg
							focusable="false"
							aria-hidden="true"
							viewBox="0 0 24 24"
							className={classes["success__icon"]}
						>
							<path d="m18 7-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41 6 19l1.41-1.41L1.83 12 .41 13.41z"></path>
						</svg>
					</h2>
				</div>
				<div
					className={`${classes["error"]} ${
						messageIsSubmitted !== "error" && classes["hidden"]
					}`}
				>
					<h2>
						Message delivery failed
						<svg
							focusable="false"
							aria-hidden="true"
							viewBox="0 0 24 24"
							className={classes["error__icon"]}
						>
							<path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
						</svg>
					</h2>
				</div>
				{messageIsSubmitted !== "sent" && (
					<form className={classes["form"]} onSubmit={handleSubmit}>
						<div
							className={`${classes["form__row"]} ${classes["form__inputwrapper"]}`}
						>
							<input
								type="text"
								aria-label="name"
								placeholder="Your Name"
								minLength={2}
							/>
						</div>
						<div className={classes["form__row"]}>
							<textarea
								name="message"
								aria-label="Your Message"
								rows={8}
								placeholder="Type your message"
								minLength={5}
							></textarea>
						</div>
						<input type="submit" value="Submit" />
					</form>
				)}
			</main>
		</>
	);
};

export default ContactPage;
