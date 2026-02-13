import { Box, IconButton, Typography,Paper } from '@mui/material';
import '../css/FilterForm.css';
import { useState, useEffect, useContext, useReducer } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function FilterForm({ filter, HandleChangeFilters }) {
    
    
    
    
    return (
        <>
            <Box className="filter-form-container">
                <Box className="filter-form-filters">
                    <Box className="filter-form-header">
                        <Typography className='filter-form-title'>Date</Typography>
                        <Box className="filter-icon">
                            <IconButton >
                                <KeyboardArrowDownIcon className='down-arrow'/>
                            </IconButton>
                        </Box>
                    </Box>
                    <Box className="filter-form-header">
                        <Typography className='filter-form-title'>Duration</Typography>
                        <Box className="filter-icon">
                            <IconButton >
                                <KeyboardArrowDownIcon className='down-arrow' />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box className="filter-form-header">
                        <Typography className='filter-form-title'>Price</Typography>
                        <Box className="filter-icon">
                            <IconButton >
                                <KeyboardArrowDownIcon className='down-arrow'/>
                            </IconButton>
                        </Box>
                    </Box>
                    <Box className="filter-form-header">
                        <Typography className='filter-form-title'>Reviews</Typography>
                        <Box className="filter-icon">
                            <IconButton disableFocusRipple>
                                <KeyboardArrowDownIcon className='down-arrow'/>
                            </IconButton>
                        </Box>
                    </Box>
                    <Box className="filter-form-header">
                        <Typography className='filter-form-title'>Rating</Typography>
                        <Box className="filter-icon">
                            <IconButton >
                                <KeyboardArrowDownIcon className='down-arrow'/>
                            </IconButton>
                        </Box>
                    </Box>    
                </Box>
            </Box>
        </>
    )
}
export default FilterForm