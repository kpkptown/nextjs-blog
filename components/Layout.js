import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"

const name = "mugi";
export const siteTitle = "Next.js blog";

function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                {/* <Link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <header className={styles.header}>
                {home ? (
                        <>
                            <img src="/images/mugi-profile.png"
                            className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`} />
                            <h1 className={utilStyles.heading2Xl}>{name}</h1>
                        </>
                    ) : (
                        <>
                            <img src="/images/mugi-profile.png"
                            className={`${utilStyles.borderCircle}`} />
                            <h1 className={utilStyles.heading2Xl}>{name}</h1>
                        </>
                    )
                }
            </header>
            <main>{children}</main>
            {!home && (
                <div>
                    <Link href="/">👈 ホームへ戻る</Link>
                </div>
            )}
        </div>
    );
}

export default Layout;