import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";

function ContactBannerForm() {
    return (
        <form>
            <TextField
                variant="outlined"
                label="Ismingiz"
                fullWidth={true}
                size="small"
                name="full_name"
                color="secondary"
                sx={{
                    background: "#f3f3f3"
                }}
            />
            <TextField
                variant="outlined"
                label="Telefon"
                fullWidth={true}
                size="small"
                name="phone_number"
                color="secondary"
                sx={{
                    mt: 2,
                    background: "#f3f3f3"
                }}
            />
            <TextField
                variant="outlined"
                label="Email"
                fullWidth={true}
                size="small"
                name="email"
                color="secondary"
                sx={{
                    mt: 2,
                    background: "#f3f3f3"
                }}
            />
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    ml: -1,
                    mt: 2
                }}
            >
                <Checkbox
                    name="policy"
                    color="secondary"
                />
                <Typography
                    color="textSecondary"
                    variant="body2"
                >
                    Shaxsiy ma’luotlarni qayta ishlash va foydalanish shartlariga roziman
                </Typography>
            </Box>
            <Button
                variant="contained"
                color="secondary"
                sx={{
                    width: "100%",
                    mt: 3
                }}
            >
                Jo&apos;natish
            </Button>
        </form>
    );
}

export default ContactBannerForm;