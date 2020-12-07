import './App.css';
import React , { useState } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function App() {

  const [name , setName] = useState("");
  const [password , setPassword] = useState("");
  const [nameError , setNameError] = useState("");
  const [nameValidated , setNameValidated] = useState(false);
  const [passwordError , setPasswordError] = useState("");
  const [passwordValidated , setPasswordValidated] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

  const submitHandler = () => {
    if(nameValidated && passwordValidated){
      alert(`Form submission successfull ! \n User: ${name}`);
    }
    else{
      setOpen(true);
    }
  }

  const inputHandler = (e) =>{
    const EmailRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
    if(EmailRegex.test(e.target.value)){
      setNameError("");
      setNameValidated(true);
    }
    else{
      setNameError("Invalid Email");
      setNameValidated(false);
    }
    setName(e.target.value );
  }

  const passwordHandler = (e) =>{
    if(e.target.value.length < 6){
      setPasswordError("Password length should be more than 6");
      setPasswordValidated(false);
    }
    else{
      setPasswordError("");
      setPasswordValidated(true);
    }
    setPassword(e.target.value );
  }

  const handleClickShowPassword = () => {
    setShowPassword(v => !v);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

    return (
      <div className="App">
        <h1>Form Validation</h1>

        <TextField
          type="email" value={name} onChange={ inputHandler }
          label="Email"
        />
        <p className="error_msg">{nameError}</p>
        
        
        <FormControl >
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={passwordHandler}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <p className="error_msg">{passwordError}</p>

        <Button onClick={submitHandler} variant="contained" color="primary">Login</Button>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <MuiAlert onClose={handleClose} severity="info">
            Plese enter username & password to login !!
          </MuiAlert>
        </Snackbar>
      </div>
    );
  
}

export default App;
