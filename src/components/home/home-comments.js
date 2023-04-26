import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {Scrollbar} from "@/components/global/scrollbar";
import CommentCard from "@/components/global/comment-card";
import {useQuery} from "react-query";
import {getCommentList} from "@/api-functions/comment/get-comment-list";

const comments = [
    {
        id: 1,
        user: {
            avatar: null,
            name: "Djurayev Umid",
            course_name: "Python Backend",
        },
        comment: "Men veb-ishlab chiqish bilan shug'ullanaman. Menga hamma narsa yoqadi, onlayn suhbatda juda do‘stona muhit hukm suradi, ma’ruzalar esa tushunarli, men qiyinchiliklarga duch kelmadim – ma’lumotlar aniq va  tizimni ravishda tuzilgan, hamma narsa aniq. Yuqori bosqichga o'tishga umid qilyapman.",
        source: {
            name: "Instagram",
            link: "https://instagram.com",
        }
    },
    {
        id: 2,
        user: {
            avatar: null,
            name: "Azizbek Egamberdiyev",
            course_name: "Programming",
        },
        comment: "Men veb-ishlab chiqish bilan shug'ullanaman. Menga hamma narsa yoqadi, onlayn suhbatda juda do‘stona muhit hukm suradi, ma’ruzalar esa tushunarli, men qiyinchiliklarga duch kelmadim – ma’lumotlar aniq va  tizimni ravishda tuzilgan, hamma narsa aniq. Yuqori bosqichga o'tishga umid qilyapman.",
        source: {
            name: "Telegram",
            link: "https://t.me",
        }
    },
    {
        id: 3,
        user: {
            avatar: null,
            name: "Azizbek Egamberdiyev",
            course_name: "Programming",
        },
        comment: "Men veb-ishlab chiqish bilan shug'ullanaman. Menga hamma narsa yoqadi, onlayn suhbatda juda do‘stona muhit hukm suradi, ma’ruzalar esa tushunarli, men qiyinchiliklarga duch kelmadim – ma’lumotlar aniq va  tizimni ravishda tuzilgan, hamma narsa aniq. Yuqori bosqichga o'tishga umid qilyapman.",
        source: {
            name: "Telegram",
            link: "https://t.me",
        }
    }

]

function HomeComments(props) {

    const {comments} = props

    const {data, isLoading, isSuccess} = useQuery({
        queryKey: ['comments'],
        queryFn: () => getCommentList()
    })

    return (
        <Box
            sx={{
                pb: {
                    md: 12,
                    xs: 8
                }
            }}
        >
            <Container>
                <Typography
                    variant="h2"
                >
                    Fikr va izohlar
                </Typography>
                <Box
                    sx={{
                        mt: 6
                    }}
                >
                    <Scrollbar>
                        <Box
                            sx={{
                                display: "flex",
                                width: "max-content",
                                minWidth: "100%",
                                pb: 2
                            }}
                        >
                            {comments.map((_comment, index, array) => (
                                <Box
                                    key={_comment.id}
                                    sx={{
                                        width: {
                                            md: 800,
                                            sm: 520,
                                            xs: 320
                                        },
                                        mr: index === array.length - 1 ? 0 : 3
                                    }}
                                >
                                    <CommentCard
                                        avatar={_comment.avatar}
                                        name={_comment.user.name}
                                        label={_comment.user.course_name}
                                        paragraph={_comment.comment}
                                        source={{
                                            name: _comment.source.name,
                                            link: _comment.source.link
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Scrollbar>
                </Box>
            </Container>
        </Box>
    );
}

export default HomeComments;