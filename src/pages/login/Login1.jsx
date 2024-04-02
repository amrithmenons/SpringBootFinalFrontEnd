//import React , {useState} from 'react';
import React , {useState} from 'react';
import Validator from 'validator';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const Paperstyle = {
    padding: 15,
    height: 300,
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
};

const containerstyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
};

const TextFieldstyle = {
    marginBottom: 25,
    width : '100%',
}

const TypoText = {
    marginBottom: 30,
}

function HangInThere(){
    
    // const [username , setUsername] = useState(" ");
    // const [email , setEmail] = useState(" ");
    // const [password , setPassword] = useState(" ");
    // const [Enail , setEmail] = useState(null);
    // const Validator(){   
    // }np
    return(
        <div style={containerstyle}>
        <Paper 
            className='Paperstyle'
            elevation={8} 
            style = {Paperstyle}
            square = {false}
        >
            <Typography variant='h4' style={TypoText}>BookMyStay</Typography>

            <TextField
                //required
                id="outlined-required"
                label="email"
                defaultValue=""
                style={TextFieldstyle}
                />

            <TextField
                //required
                id="outlined-required"
                label="password"
                defaultValue=""
                type='password'
                style={TextFieldstyle}
            />

        </Paper>
        </div>
    );
}

export default HangInThere;