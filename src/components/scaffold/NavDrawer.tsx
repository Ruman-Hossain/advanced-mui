import React from 'react'
import { AppBar, Toolbar, Typography, Drawer, List, ListItem } from '@mui/material'
export const NavDrawer = () => {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6">Advanced Material UI Styling</Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="temporary" open={true}>
                <List>
                    {[{ text: "Input Form" }, { text: "Contact Card Grid" }].map(
                        (nav, index) => {
                            return <ListItem key={nav.text}>{nav.text}</ListItem>
                        }
                    )}
                </List>
            </Drawer>
        </>
    )
}
