import {getMentorList} from "@/api-functions/mentor/get-mentor-list";
import {getCourseList} from "@/api-functions/course/get-course-list";
import {getCommentList} from "@/api-functions/comment/get-comment-list";
import {getReview} from "@/api-functions/review/get-review";
import {getPartners} from "@/api-functions/partners/get-partners";

export const getHome = async () => {

    const [courseData, commentData, reviewData, mentorsData, partnersData] = await Promise.all([
        getCourseList(),
        getCommentList(),
        getReview(),
        getMentorList(),
        getPartners()
    ])

    return {
        results: {
            comments: commentData?.results,
            courses: courseData?.results,
            mentors: mentorsData?.results,
            reviews: reviewData?.results,
            partners: partnersData?.results
        }
    }
}