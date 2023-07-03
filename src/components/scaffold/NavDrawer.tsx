import React from 'react'
import { AppBar, Toolbar, Typography, Drawer, List, ListItem } from '@mui/material';
import { BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import ContactForm from '../Form/ContactForm';
import ContactCardGrid from '../Grid/ContactCardGrid';
import ContactTable from '../Table/ContactTable';
import ContactDataGrid from '../DataGrid/ContactDataGrid';
export const NavDrawer = () => {
    return (
        <BrowserRouter>
            <div>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6">Advanced Material UI Styling</Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="temporary" open={true}>
                    <List>
                        {[{ text: "Input Form", route:"/form"}, { text: "Contact Card Grid", route:"/grid" },{text:"Contact Table", route:"/table"},{text:"Contact Data Grid", route:"/datagrid"}].map(
                            (nav, index) => {
                                return <ListItem key={nav.text}><Link to={nav.route}>{nav.text}</Link></ListItem>
                            }
                        )}
                    </List>
                </Drawer>
                <main>
                    <Routes>
                            <Route path="/" element={<ContactForm/>} />
                            <Route path="/form" element={<ContactForm/>} />
                            <Route path="/grid" element={<ContactCardGrid/>} />
                            <Route path="/table" element={<ContactTable/>} />
                            <Route path="/datagrid" element={<ContactDataGrid/>} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}
