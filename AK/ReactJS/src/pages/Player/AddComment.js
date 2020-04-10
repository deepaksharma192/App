import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddComment(props) {

  return (
    <div>
      <Dialog open={true} onClose={props.hideComment} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Comment</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="comment"
            label="Add Comments"
            inputRef={props.commentRef}
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.hideComment} color="primary">
            Cancel
          </Button>
          <Button onClick={props.AddCommentFun} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
