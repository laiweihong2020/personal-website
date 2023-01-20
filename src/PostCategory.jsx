import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { List } from "@mui/material";
import React from "react";
import indexJson from './resources/index.json';

class PostCategory extends React.Component {
    handleClickEvent(cat, event) {
        this.props.onSelect(cat);
    }

    render() {
        return (
            <List>
                {
                    indexJson.categories.map((cat, index) => {
                        return(
                            <ListItemButton key={cat.name} onClick={(evt) => this.handleClickEvent(index, evt)}>
                                <ListItemText primary={cat.name} />
                            </ListItemButton>
                        )
                    })
                }
            </List>
        )
    }
}

export default PostCategory;