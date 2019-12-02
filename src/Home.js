import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, 
         TextField } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';


export default function Home() {

    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    let submit = false
    let returnText = "THIS SHOULD BE THE RETURNED TEXT"

    const handleChange = event => {
        setValue(event.target.value);
    };

    function convertText(){
        console.log(value)
    }

    function getText(){
        if (submit){
            submit = false
            return returnText
        }
    }

    return (
        <div className="Home">
            <div className="topbar">
                <Typography style={{paddingTop: '5%', fontFamily: 'Bebas Neue', fontSize: 120, paddingBottom: '5%', color: '#f8a978'}} variant='h1'>
                    Text Summarization
                </Typography>
            </div>
            <div className="instruction" style={{marginLeft: 120, marginRight: 260, display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
                    <Typography variant='overline' align='left'>
                        Please enter the text you would like to summarize!
                    </Typography>
                    <Typography variant='overline' align='right'>
                        Your output will appear after clicking the button!
                    </Typography>
            </div>

            <div className="content" style={{marginLeft: 100, marginRight: 100, display: 'flex', alignItems: 'center', justifyContent: "center"}}>
                <div className="col1" style={{flex: 1, display: 'flex'}}>
                    <TextField
                        id="input_text"
                        label="Original Text"
                        multiline
                        rows="20"
                        className={classes.textField}
                        onChange={handleChange}
                        margin="normal"
                        style={{flex: 1}}
                        variant="outlined"
                        InputLabelProps={{
                            classes: {
                            root: classes.cssLabel,
                            focused: classes.cssFocused,
                            },
                        }}
                        InputProps={{
                            classes: {
                            root: classes.cssOutlinedInput,
                            focused: classes.cssFocused,
                            notchedOutline: classes.notchedOutline,
                            },
                            inputMode: "numeric"
                        }}
                        /> 
                </div>
                <Fab variant="extended" style={{backgroundColor: '#badfdb'}} onClick={convertText} aria-label="add" className={classes.margin}>
                    {/* <NavigationIcon className={classes.extendedIcon} /> */}
                    <Typography style={{marginLeft: 20, marginRight: 20, fontFamily: 'Bebas Neue', fontSize: 28}}variant='button'>Summarize!</Typography>
                </Fab>

                <TextField
                    id="input_text"
                    label="Output Text"
                    multiline
                    disabled={true}
                    value={getText()}
                    rows="20"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    style={{flex: 1}}
                    InputLabelProps={{
                        classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                        },
                    }}
                    InputProps={{
                        classes: {
                            root: classes.cssOutlinedInput,
                            focused: classes.cssFocused,
                            notchedOutline: classes.notchedOutline,
                        },
                        inputMode: "numeric"
                    }}
                    />
            </div>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    margin: {
        margin: theme.spacing(4),
    },
        extendedIcon: {
        marginRight: theme.spacing(1),
    },
    cssFocused: {
        fontFamily: "Bebas Neue",
    },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: '#badfdb !important',
            borderWidth: '10px'
        }
    }, 
    notchedOutline: {
        borderWidth: '10px',
        borderColor: '#badfdb !important',
    },
}));


// export default Home;
