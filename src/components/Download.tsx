import React from "react"
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import { Close, Code, FolderOpen, GetApp } from "@mui/icons-material"
import { navigate } from 'gatsby'

interface Props {
  open: boolean
  close: () => void
  repository: string
}

const Download = ({open, close, repository}: Props) => {

  const styles = {
    dialogTitle: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }

  return (
    <Dialog
      open={open}
      scroll="body"
      onClose={close}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title" sx={styles.dialogTitle}>
        <Typography variant="h6">Download TEI data</Typography>
        <IconButton aria-label="close download dialog" onClick={close} size="large">
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>      
        <DialogContentText component="div" id="alert-dialog-slide-description">
          <p>This edition is encoded according to the <a href="https://tei-c.org/">Text Encoding Initiative</a> (TEI) P5 Guidelines.</p>
          <p>The open source code for this edition is avilable on <a href={repository}>
              GitLab</a>.</p>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <Code />
              </ListItemIcon>
              <ListItemText primary="TEI XML data" />
              <ListItemSecondaryAction>
                {/* THESE ARE EXAMPLES. ADJUST AS NEEDED */}
                <IconButton
                  edge="end"
                  aria-label="download"
                  onClick={() => navigate('/data/edition.xml')}
                  size="large">
                  <GetApp />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Code />
              </ListItemIcon>
              <ListItemText primary="Customization ODD" />
              <ListItemSecondaryAction>
                {/* THESE ARE EXAMPLES. ADJUST AS NEEDED */}
                <IconButton
                  edge="end"
                  aria-label="download"
                  onClick={() => navigate('/edition.odd')}
                  size="large">
                  <GetApp />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Code />
              </ListItemIcon>
              <ListItemText primary="RelaxNG schema" />
              <ListItemSecondaryAction>
                {/* THESE ARE EXAMPLES. ADJUST AS NEEDED */}
                <IconButton
                  edge="end"
                  aria-label="download"
                  onClick={() => navigate('/edition.rng')}
                  size="large">
                  <GetApp />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FolderOpen />
              </ListItemIcon>
              <ListItemText primary="Download all (zipped)" />
              {/* THESE ARE EXAMPLES. ADJUST AS NEEDED */}
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="download"
                  onClick={() => navigate('/edition.zip')}
                  size="large">
                  <GetApp />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </DialogContentText>
        
      </DialogContent>
    </Dialog>
  );
}

export default Download