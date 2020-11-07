import { getAllPostIds, getPostData } from "../../lib/posts";

import Date from '../../components/date'
import Head from 'next/head'
import Layout from "../../components/layout";
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <br/>
                {/*{postData.id}*/}
                {/*<br/>*/}
                {/*{postData.date}*/}
                <div className={utilStyles.lightText}>
                    <small>{postData.date}</small>
                </div>
                <br/>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await  getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
