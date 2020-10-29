import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={utilStyles.headingMd}>
          <p> A random blog for the rest of us! What can I say more I am software engineer <span><a href="https://wwww.twitter.com/VantolBennett">Twitter</a></span></p>
      </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Randomness</h2>
            <ul className={utilStyles.list}>
                {allPostsData.map(({id, date, title}) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br/>
                        <small className={utilStyles.lightText}>
                            <Date dateString={date}/>
                        </small>

                    </li>
                ))}
            </ul>
        </section>
    </Layout>
  )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
