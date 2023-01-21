import './App.css';
import React from 'react';
import { Grid, Divider } from "@mui/material";
import PostList from './PostList';
import PostCategory from './PostCategory';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: 0
        }
    }

    handleCategoryChange = cat => {
        this.setState({
            selectedCategory: cat
        })
    }

    render() {
        return (
            <div>
                <main>
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={2}>
                            <PostCategory onSelect={this.handleCategoryChange}/>
                            {/* This is for the categories */}
                        </Grid>
                        <Grid item xs={8}>
                            <PostList category={this.state.selectedCategory}></PostList>
                        </Grid>
                        <Grid item xs={2}>
                            {/* This is for the metadata for the blog */}
                        </Grid>
                    </Grid>
                </main>
            </div>
        );
    }

}

export default Home;