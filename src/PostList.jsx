import { Divider, List, Box, ListItemButton, ListItemText, IconButton } from "@mui/material";
import React from "react";
import indexJson from './resources/index.json';
import distributedSystemJson from './resources/distributedSystems.json'
import { ArrowBack } from "@mui/icons-material";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            postSelected: false,
            loadedContent: ""
        };
    }

    componentDidMount() {
        // We want to retrieve the list of posts
        const posts = indexJson.categories[this.props.category]["content-files"].map(entry => {
            return {...entry};
        });

        this.setState({
            posts: posts
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.category != this.props.category) {
            const posts = indexJson.categories[this.props.category]["content-files"].map(entry => {
                return {...entry};
            });

            this.setState({
                posts: posts
            });
        }
    }

    handleClickEvent(index, event) {
        const content = distributedSystemJson[index].content;

        this.setState({
            postSelected: true,
            loadedContent: content
        });
    }

    handleBackClickEvent(event) {
        this.setState({
            postSelected: false,
            loadedContent: ""
        });
    }

    render() {
        if(this.state.postSelected) {
            return (
                <Box sx={{ m: 2 }}>
                    <IconButton style={{ display: 'flex'}} onClick={(evt) => this.handleBackClickEvent(evt)}>
                        <ArrowBack />
                    </IconButton>
                    <ReactMarkdown>
                        {this.state.loadedContent}
                    </ReactMarkdown>
                </Box>
            );
        } else {
            return (
                <List>
                    {
                        this.state.posts.map((entry, index) => {
                            return(
                                <div key={index}>
                                    <ListItemButton key={index} onClick={(evt) => this.handleClickEvent(index, evt)}>
                                        <ListItemText 
                                            primary={entry.title}
                                            secondary={entry.description} />
                                    </ListItemButton>
                                    <Divider />
                                </div>
                            )
                        })
                    }
                </List>
            )
        }
    }
}

export default PostList;