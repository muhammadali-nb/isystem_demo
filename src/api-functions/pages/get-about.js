import {getTrainings} from "@/api-functions/training/get-trainings";
import {getGalery} from "@/api-functions/galery/get-galery";
import {getMentorList} from "@/api-functions/mentor/get-mentor-list";

export const getAbout = async () => {
    const [trainingData, galeryData, mentorData] = await Promise.all([
        getTrainings(),
        getGalery(),
        getMentorList()
    ])

    return {
        results: {
            training: trainingData?.results,
            galery: galeryData?.results,
            mentors: mentorData?.results
        }
    }
}