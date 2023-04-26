import React, {useState} from 'react';
import PropTypes from "prop-types";
import {
    Card,
    CardContent,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@mui/material";
import Link from "next/link";
import {user_paths} from "@/consts/user-paths";
import {PencilAlt as PencilAltIcon} from "@/icons/pencil-alt";
import {Delete as DeleteIcon} from "@mui/icons-material";
import {useMutation, useQueryClient} from "react-query";
import {useAuth} from "@/hooks/use-auth";
import {deleteMentor} from "@/api-functions/mentor/delete-mentor";
import toast from "react-hot-toast";
import ConfirmDialog from "@/components/global/confirm-dialog";

function MentorListTable(props) {
    const {
        mentors
    } = props;

    const queryClient = useQueryClient();
    const {user} = useAuth();

    const [deleteConfirmDialogOpen, setDeleteConfirmDialogOpen] = useState(false);
    const [deleteMentorId, setDeleteMentorId] = useState(null);

    const {
        mutateAsync: handleDeleteMentor,
        isLoading
    } = useMutation({
        mutationKey: ["admin", "mentors", deleteMentorId],
        mutationFn: () => deleteMentor({
            token: user?.access_token,
            id: deleteMentorId
        }),
        onSuccess: () => {
            toast.success("Mentor has been deleted");
            queryClient.invalidateQueries({queryKey: ["admin", "mentors"]}).catch(console.error);
        },
        onError: error => toast.error(error.message)
    })

    const openDeleteConfirmDialog = (mentorId) => {
        setDeleteMentorId(mentorId);
        setDeleteConfirmDialogOpen(true);
    }

    const closeDeleteConfirmDialog = () => {
        setDeleteMentorId(null);
        setDeleteConfirmDialogOpen(false);
    }

    return (
        <>
            <Card>
                <CardContent>
                    <Table sx={{minWidth: 700}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Profession</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {mentors && mentors.map(_mentor => (
                                <TableRow
                                    key={_mentor?.id}
                                >
                                    <TableCell>{_mentor?.first_name}</TableCell>
                                    <TableCell>{_mentor?.last_name}</TableCell>
                                    <TableCell>{_mentor?.profession}</TableCell>
                                    <TableCell align="right">
                                        <IconButton
                                            component={Link}
                                            href={user_paths.admin + "/mentors/" + _mentor?.id + "/edit"}
                                        >
                                            <PencilAltIcon fontSize="small"/>
                                        </IconButton>
                                        <IconButton
                                            onClick={() => openDeleteConfirmDialog(_mentor?.id)}
                                        >
                                            <DeleteIcon/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <ConfirmDialog
                onClose={closeDeleteConfirmDialog}
                isOpen={deleteConfirmDialogOpen}
                onConfirm={handleDeleteMentor}
                isLoading={isLoading}
                title="Are you sure to delete a mentor?"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae eligendi in maiores repellendus totam."
            />
        </>

    );
}

MentorListTable.propTypes = {
    mentors: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        profession: PropTypes.string
    }))
}

export default MentorListTable;