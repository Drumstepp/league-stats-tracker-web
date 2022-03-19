import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function BasicSelect(props) {


    const handleChange = (event) => {
        props.setUser(event.target.value);
    };
    
    const [userList, setUserList] = React.useState('');
    React.useEffect(() => {
        // Fetch Here
        setUserList(['Hockomock', 'Drumstepp', 'Jikan Kama'])
    }, []);

    const menuItems = (() => {
        var items = []; 
        for (var x in userList) {
            items.push(<MenuItem value={userList[x]}>{userList[x]}</MenuItem>);
        }
        return items;
    });

    return (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">User</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.user}
              label="User"
              onChange={handleChange}
            >
              {/* <MenuItem value={10}>Landon</MenuItem>
              <MenuItem value={20}>Jill </MenuItem>
              <MenuItem value={30}>Sabina</MenuItem> */}
              {menuItems()}
            </Select>
          </FormControl>
        </Box>
      );


}