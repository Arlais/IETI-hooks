import React, {useEffect, useState} from 'react'
import {Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography} from "@mui/material";
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

const Login=()=>{
    const [ user, setUser ] = useState("");
    const [ pass, setPass ] = useState("");
    const [ btn, setBtn ] = useState(0);
    const [ token, setToken ] = useState("");
    const paperStyle={padding :20, height: '70vh', width: 280, margin: '20px auto'}
    const avatarStyle={backgroundColor:'#216eab'}
    const txtStyle={margin: '6px 0'}
    const btnStyle={margin: '8px 0'}
    useEffect(()=>{
        fetch(`http://localhost:8080/v1/auth`, {method : "POST", body: `{\"email\" : \"${user}\",\"password\" : \"${pass}\"}`,
            headers : {'Content-Type':'application/json'}})
            .then(response=> response.json()
                // Just an example, it actually should set this token into a localStorage variable or some kind of global state.w
                //console.log(response);
        ).then(data=>{
        console.log(data)
        setToken(data.token);
        console.log(token)})},[btn])
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>w
                <Grid align='center'>
                    <Avatar style={avatarStyle}><SecurityOutlinedIcon/></Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <TextField label={'username'} onChange={e => setUser(e.target.value)} placeholder={'Enter username'} style={txtStyle} fullWidth required/>
                <TextField label={'password'} onChange={e => setPass(e.target.value)} placeholder={'Enter password'} type={'password'} fullWidth required/>
                <FormControlLabel control={<Checkbox />} label="Remember username" />
                <Button type={'submit'} onClick={e => setBtn(btn+1)}color={'primary'} fullWidth variant={'contained'} style={btnStyle}>Sign in</Button>
                <Typography>
                    <Link href={'#'}>Forgot password?</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;