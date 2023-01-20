import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { AppBar, Button, CssBaseline, Toolbar, Typography } from "@mui/material";

function NavBar() {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="static">
                <CssBaseline />
                <Toolbar
                    sx={{
                        justifyContent: "space-between"
                    }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{display: { xs: 'none', sm: 'block' }}}
                    >
                        Lai Wei Hong's Stuff
                    </Typography>
                    <div>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Button to="/" component={Link} sx={{ color: '#fff' }}>
                                Home
                            </Button>
                            <Button to="/about" component={Link} sx={{ color: '#fff' }}>
                                About
                            </Button>
                        </Box>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default NavBar;