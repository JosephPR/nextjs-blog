

import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    image: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>   



      <section className={utilStyles.headingMd}>
        <p>Hello, I built this blog using the Next.js tutorial on their home page and implemented typescript, deployed with Vercel. </p>
      
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.paddingBottom}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>

        <Carousel autoPlay interval={5000} autoFocus infiniteLoop>
        {allPostsData.map(({ id, date, title, image }) => (
      
                  <div key={id}>
                      <Link  className={utilStyles.headingLg} href={`/posts/${id}`}>{title}</Link><br/>
                      <small className={utilStyles.lightText}>
                        <Date dateString={date} />
                      </small>
                      <img className={utilStyles.blogImage} src={image} />
  
                  </div>
              
                      ))}
              </Carousel>
      </section>

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}