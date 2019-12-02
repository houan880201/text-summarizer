import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, 
         TextField } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Axios from 'axios';



export default function Home() {

    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
    const [returnText, setReturnText] = React.useState("THIS SHOULD BE THE RETURNED TEXT");

    const [oriLen, setOriLen] = React.useState(0);
    const [newLen, setNewLen] = React.useState(0);


    const handleChange = event => {
        setValue(event.target.value);
    };

    const buildData = (inputText) => {
        return [
            {
                "id": 0,
                "src": inputText,
                "template": "france seeking release of UNK soldier UNK UNK details of french efforts UNK"
            }
        ]
    
    }

    const sendText = () => {
        const data = buildData(value)
        setOriLen(value.length)
        return Axios.post('http://0.0.0.0:5000/translator/translate', data, {header: {'Content-Type': 'application/json'}})
            .then( (response) => {
                const newText = response.data[0][0].tgt
                setReturnText(newText)
                setNewLen(newText.length)
                console.log(newLen)
                console.log(oriLen)
                console.log(response)
            })
            .catch( (error) => {
                console.log(error)
            })
    }


    return (
        <div className="Home">
            <div className="topbar">
                <Typography style={{paddingTop: '5%', fontFamily: 'Bebas Neue', fontSize: 120, paddingBottom: '5%', color: '#f8a978'}} variant='h1'>
                    Text Summarization
                </Typography>
            </div>
            <div className="instruction" style={{marginLeft: '12%', marginRight: '18%', display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
                    <Typography variant='overline' align='left'>
                        Please enter the text you would like to summarize!
                    </Typography>
                    <Typography variant='overline' align='right'>
                        Your output will appear after clicking the button!
                    </Typography>
            </div>

            <div className="content" style={{marginLeft: '5%', marginRight: '5%', display: 'flex', alignItems: 'center', justifyContent: "center"}}>
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
                <Fab variant="extended" style={{backgroundColor: '#badfdb'}} onClick={sendText} aria-label="add" className={classes.margin}>
                    {/* <NavigationIcon className={classes.extendedIcon} /> */}
                    <Typography style={{marginLeft: '40%', marginRight: '40%', fontFamily: 'Bebas Neue', fontSize: 28}}variant='button'>Summarize!</Typography>
                </Fab>
                

                <TextField
                    id="input_text"
                    value={returnText}
                    multiline
                    disabled={true}
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
            <div className="bottomBar" style={{marginLeft: '55%', marginTop: '2%', marginRight: '5%', display: 'flex', alignItems: 'center', justifyContent: "flex-start"}}>
                <div className="percentageScore" style={{display:'flex', flexDirection: 'column'}}>
                    <Typography style={{paddingTop: '5%', fontFamily: 'Bebas Neue', fontSize: 120, paddingBottom: '5%', color: '#f8a978'}} variant='h1'>
                        {newLen == 0 ? (0) : (Math.round(newLen * 100 / oriLen))}%
                    </Typography>   
                    <Typography style={{paddingTop: '5%', fontFamily: 'Bebas Neue', fontSize: 20, paddingBottom: '5%', color: 'black'}} variant='outline'>
                        Length Reduced to
                    </Typography>  
                </div>
                
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
