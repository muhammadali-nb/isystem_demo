import React from 'react';
import {Box} from "@mui/material";
import {Scrollbar} from "@/components/global/scrollbar";

const gallery = [
    {
        id: 1,
        image: "/mock-images/about/gallery/image-1.jpg",
    },
    {
        id: 2,
        image: "/mock-images/about/gallery/image-2.jpg",
    },
    {
        id: 3,
        image: "/mock-images/about/gallery/image-3.jpg",
    },
    {
        id: 4,
        image: "/mock-images/about/gallery/image-4.jpg",
    }
]

function AboutGalleryCarousel(props) {
    const {items, ...other} = props;

    return (
        <Box
            {...other}
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
                    {items && items.map((_item, _index, _array) => (
                        <Box
                            key={_item.id}
                            sx={{
                                width: {
                                    xs: "70vw",
                                    md: "720px"
                                },
                                mr: _index !== _array.length - 1 ? 3 : 0
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    pt: "56.25%",
                                    borderRadius: 1,
                                    backgroundColor: "background.paper",
                                    backgroundImage: `url(${_item.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            >

                            </Box>
                        </Box>
                    ))}
                </Box>
            </Scrollbar>
        </Box>
    );
}

export default AboutGalleryCarousel;