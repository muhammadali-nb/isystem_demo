import {getCommentList} from "@/api-functions/comment/get-comment-list";
import {getCourseList} from "@/api-functions/course/get-course-list";

export const getOnline = async () => {
    const [commentData, courseData] = await Promise.all([
        getCommentList(),
        getCourseList()
    ])

    return {
        results: {
            comments: commentData?.results,
            courses: courseData?.results
        }
    }

}