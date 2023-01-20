import { Grid } from "@mui/material";
import React from "react";

class About extends React.Component {
    render() {
        return (
            <div>
                <h2>About Page</h2>
                <main>
                    <Grid container direction="row">
                        <Grid item xs={2}>
                            {/* This is for the categories */}
                        </Grid>
                        <Grid item xs={8}>
                            {/* This is for the actual blog */}
                        </Grid>
                        <Grid item xs={2}>
                            {/* This is for the metadata for the blog */}
                        </Grid>
                    </Grid>
                </main>
            </div>
        )
    }
}

export default About;