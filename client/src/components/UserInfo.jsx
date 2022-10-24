import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

const UserInfo = ({ user }) => {
  return (
    <List
      sx={{
        borderRadius: "10%",
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <ListItem>
        <ListItemText primary="Email" secondary={user?.email} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Direction" secondary={user?.direccion} />
      </ListItem>
      <ListItem>
        <ListItemText primary="State" secondary={user?.provincia} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Since" secondary={user?.date} />
      </ListItem>
    </List>
  );
};

export default UserInfo;
