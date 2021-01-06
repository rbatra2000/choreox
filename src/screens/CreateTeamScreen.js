import React, { useEffect, useRef, useState } from 'react';
import TempDrawer from '../components/Drawer';
import { Button, Container, Grid, TextField } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteIcon from '@material-ui/icons/Favorite';
import * as dom from 'react-router-dom';
// import firebase from "../constants/firebase";

// const dbh = firebase.firestore();

function checkIfExists(teamid) {

    //     var docRef = dbh.collection(teamid);
    //     console.log(teamid);

    //     docRef.get().then(function (doc) {
    //         if (doc.exists) {
    //             return true;
    //         } else {
    //             // doc.data() will be undefined in this case
    //             return false;
    //         }
    //     }).catch(function (error) {
    //         console.log("Error getting document:", error);
    //     });

    // TODO: idk why its not working but check to make sure it doesn't already exist
    return false;
}

export default function CreateTeamScreen() {
    const childRef = useRef();
    const [teamId, setId] = useState("");
    const [name, setName] = useState("");
    const [length, setLength] = useState(7);
    const [depth, setDepth] = useState(4);
    const [invitations, setInvitations] = useState("");

    /*
        Create a unique ID (Should ensure that it doesn't already exist)
    */
    function makeUniqueID() {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        while (result === '' || checkIfExists(result)) {
            result = '';
            for (var i = 0; i < 5; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
        }
        return result;
    }

    // Update the database
    function newTeam() {
        
    }

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        setId(makeUniqueID());
    }, []);

    return (
        <div>
            <TempDrawer ref={childRef} />
            <Button onClick={() => childRef.current.toggle()}>
                <MenuIcon style={{ fontSize: 45, height: '5vh' }} />
            </Button>
            <Container maxWidth="lg" style={{ height: '95vh' }}>
                <Grid container
                    align="center"
                    spacing={3}>
                    <Grid item xs={12}>
                        <h1>Formatio</h1>
                        <h2>Create Team</h2>
                        <FavoriteIcon style={{ fontSize: 45 }} />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="standard-read-only-input"
                            label="Team ID (Write this down)"
                            name="teamid"
                            variant="filled"
                            value={teamId}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Team Name"
                            name="name"
                            variant="filled"
                            value={name}
                            onChange={(e) => (setName(e.target.value))}
                            autoFocus
                        />
                    </Grid>
                    {/* TODO: Add a min/max to this of about 3 to 10 */}
                    <Grid item xs={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="length"
                            variant="filled"
                            id="standard-number"
                            label="Length"
                            type="number"
                            autoFocus
                            value={length}
                            onChange={(e) => (setLength(e.target.value))}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="depth"
                            variant="filled"
                            id="standard-number"
                            label="Depth"
                            type="number"
                            autoFocus
                            value={depth}
                            onChange={(e) => (setDepth(e.target.value))}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoFocus
                            variant="filled"
                            fullWidth
                            id="standard-multiline-static"
                            label="Invitations (separate emails with comma)"
                            multiline
                            value={invitations}
                            onChange={(e) => (setInvitations(e.target.value))}
                            rows={3}
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <dom.Link to="/create" style={{ textDecoration: 'none' }}>
                            <Button
                                onClick={newTeam}
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Create Team
                        </Button>
                        </dom.Link>
                    </Grid>
                    <Grid item xs={12}>
                        <dom.Link to="/dashboard" variant="body2">
                            {"Cancel"}
                        </dom.Link>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};
