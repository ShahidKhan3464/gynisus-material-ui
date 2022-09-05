import { Stack, Pagination, PaginationItem } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { PaginationText } from '../../assets/style/index'

const Paginations = () => {
    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            sx={{ padding: { xs: '20px 0', sm: '0' } }}>
            <PaginationText
                variant='p'
                component='p'
            >
                Showing 1 to 8 of 20
            </PaginationText>
            <Pagination
                count={5}
                size='small'
                defaultPage={2}
                // showFirstButton
                // showLastButton
                renderItem={(item) => (
                    <PaginationItem
                        components={{ previous: KeyboardDoubleArrowLeftIcon, next: KeyboardDoubleArrowRightIcon }}
                        {...item}
                    />
                )}
            />
        </Stack >
    );
}

export default Paginations