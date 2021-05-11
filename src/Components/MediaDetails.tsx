import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography,Divider } from '@material-ui/core'
import  {IMedia} from './CardList'
const IMGBASEURL = process.env.REACT_APP_IMG_BASE;

interface IProps{
    open: boolean,
    handleClose: () => void,
    media: IMedia
}
const MediaDetails:React.FC<IProps> = ({open,handleClose,media}) => {

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle style={{backgroundColor:'#903749',color:'#0ebbf4'}}>{media.title || media.name}</DialogTitle>
            <DialogContent  style={{backgroundColor:'#903749'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}> 
                        <img style={{maxHeight:'100%',maxWidth:'100%'}} src={IMGBASEURL + media.poster_path} alt="Movie Poster"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant={"subtitle1"} style={{color:'#37dd61'}}>{media.overview}</Typography>
                        <Divider/>
                        <Typography variant={"subtitle1"} style={media.vote_average>6 ? {color:'#0ebbf4'} : {color:'rgb(243 178 181)'}}>{"IMDB Ratings : " + media.vote_average}</Typography>
                        <Divider/>
                        <Typography variant={"subtitle1"} style={{color:'#0ebbf4'}}>{media.release_date &&  "Release Date : " + media.release_date}</Typography>
                    </Grid>
                    <Divider/>
                    
                </Grid>
            </DialogContent>
            <DialogActions style={{backgroundColor:'#903749'}}>
                <Button onClick={handleClose} variant={"contained"} color="secondary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default MediaDetails
