import { AppBar, Tab, Tabs } from '@material-ui/core';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';

interface IProps{
    value: number,
    setValue: (value:number) => void,
}

const Navigation:React.FC<IProps> = ({value,setValue}) => {

    const handleChange = (event:React.ChangeEvent<{}>, newValue:number) => setValue(newValue);

    return (
        <AppBar position="static" style={{backgroundColor:'#53354a'}}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="secondary"
                centered
                variant="fullWidth"
            >
            <Tab label="Movies" icon={<MovieIcon/>}/>
            <Tab label="TV Shows" icon={<TvIcon/>}/>
            </Tabs>
      </AppBar>
    )
}

export default Navigation
