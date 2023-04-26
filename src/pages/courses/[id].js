import React from "react";
import MainLayout from "@/components/global/main-layout";
import Head from "next/head";
import CourseDetailsHero from "@/components/courses/course-details-hero";
import CourseDetailsStats from "@/components/courses/course-details-stats";
import CourseDetailsIntendedStudents from "@/components/courses/course-details-intended-students";
import CourseDetailsBenefits from "@/components/courses/course-details-benefits";
import CourseMentors from "@/components/courses/course-mentors";
import CourseDetailsFaq from "@/components/courses/course-details-faq";
import CourseDetailsContact from "@/components/courses/course-details-contact";
import {getCourse} from "@/api-functions/course/get-course";
import {getCourseList} from "@/api-functions/course/get-course-list";

export const getStaticPaths = async () => {
    const data = await getCourseList();

    const paths = data?.results.map(_course => ({params: {id: _course?.id?.toString()}}));
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await getCourse({id});

    return {
        props: {
            course: data?.result
        }
    }
}

const CourseDetails = (props) => {
    const {course} = props;

    return (
        <>
            <Head>
                <title>Online | {process.env.NEXT_PUBLIC_COMPANY_NAME}</title>
            </Head>
            <CourseDetailsHero
                id={course.id}
                title={course.name}
                description={course.description}
                color={course.color}
                image={course.image}
            />
            <CourseDetailsStats
                modules_count={course.module_count}
                lessons_count={course.lesson_count}
                duration={course.duration}
            />
            <CourseDetailsIntendedStudents
                intended_students={course.intended_students}
            />
            <CourseDetailsBenefits
                benefits={course.course_benefits}
            />
            <CourseDetailsContact/>
            <CourseMentors
                mentors={course.mentors}
                color={course.color}
            />
            <CourseDetailsFaq
                faq={course.faq}
            />
        </>
    );
};

CourseDetails.getLayout = (page) => (
    <MainLayout>
        {page}
    </MainLayout>
);

export default CourseDetails;
