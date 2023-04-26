import Head from 'next/head'
import MainLayout from "@/components/global/main-layout";
import HomeHero from "@/components/home/home-hero";
import HomeCourses from "@/components/home/home-courses";
import HomeInfo from "@/components/home/home-info";
import HomePartners from "@/components/home/home-partners";
import ContactBanner from "@/components/global/contact-banner";
import HomeMentors from "@/components/home/home-mentors";
import HomeComments from "@/components/home/home-comments";
import HomeReviews from "@/components/home/home-reviews";
import {getHome} from "@/api-functions/pages/get-home";

export const getStaticProps = async () => {
    const data = await getHome()

    return {
        props: {
            homeData: data?.results
        },
        revalidate: 60

    }
}

export default function Home(props) {
    const {homeData} = props

    return (
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_COMPANY_NAME}</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <HomeHero/>
            <HomeCourses courses={homeData?.courses}/>
            <HomeInfo/>
            <HomeMentors mentors={homeData?.mentors}/>
            <HomeComments comments={homeData?.comments}/>
            <HomeReviews reviews={homeData?.reviews}/>
            <HomePartners partners={homeData?.partners}/>
            <ContactBanner/>
        </>
    )
}

Home.getLayout = page => (
    <MainLayout>
        {page}
    </MainLayout>
)