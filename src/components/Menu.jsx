import React from 'react'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';

const data = [
    { icon: <People />, label: 'Authentication' },
    { icon: <Dns />, label: 'Database' },
    { icon: <PermMedia />, label: 'Storage' },
    { icon: <Public />, label: 'Hosting' },
];

function Menu() {
    const [open, setOpen] = React.useState(true);
    return (
        <div className='menu'>
            <Divider />
            <Box
                sx={{
                    bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
                    pb: open ? 2 : 0,
                }}
            >

                <ListItemButton
                    alignItems="flex-start"
                    onClick={() => setOpen(!open)}
                    sx={{
                        px: 3,
                        pt: 1,
                        pb: open ? 0 : 2.5,
                        '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                    }}
                >
                    <People sx={{ color: 'black' }}/>
                    <ListItemText
                        primary="Select"
                        primaryTypographyProps={{
                            fontSize: 15,
                            fontWeight: 'medium',
                            lineHeight: '20px',
                            mb: '2px',
                        }}
                        secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                        secondaryTypographyProps={{
                            noWrap: true,
                            fontSize: 12,
                            lineHeight: '16px',
                            color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                        }}
                        sx={{ my: 0 }}
                    />
                    <KeyboardArrowDown
                        sx={{
                            mr: -1,
                            opacity: 0,
                            transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                            transition: '0.2s',
                        }}
                    />
                </ListItemButton>
                {open &&
                    data.map((item) => (
                        <ListItemButton
                            key={item.label}
                            sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                        >
                            <ListItemIcon sx={{ color: 'inherit' }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                            />
                        </ListItemButton>
                    ))}
            </Box>
        </div>
    )
}

export default Menu