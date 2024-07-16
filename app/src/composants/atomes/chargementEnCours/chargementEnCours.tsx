import { Box, CircularProgress } from '@mui/material';

export default function ChargementEnCours() {
    return (
        <Box
            data-testid="chargement-en-cours"
            sx={{
                top: '50%',
                px: 0,
                py: '10px',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <CircularProgress size="20px" />
        </Box>
    );
}
