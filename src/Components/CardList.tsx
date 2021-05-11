import { Grid } from '@material-ui/core'
import MediaCard from './MediaCard'

export interface IMedia{
    id:string,
    title:string,
    name:string,
    vote_average:number,
    poster_path:string,
    overview:string,
    release_date:string,
}

interface IProps{
    mediasArr: IMedia[] | undefined,
    triggerDialogue:(media: IMedia) => void,
}

const MovieCards:React.FC<IProps> = ({mediasArr,triggerDialogue}) => {
    return (
        <Grid container alignItems="center" justify="center" direction={"row"}>
            <Grid item={true} xs={1}></Grid>
                {/* //Middle */}
                <Grid container spacing={2} xs={10} justify="center" alignItems="center">
                        
                        {mediasArr && mediasArr.map(media => 
                        <Grid key={media.id} item xs={12} sm={4} md={3} lg={3}>
                                <MediaCard 
                                    triggerDialogue={triggerDialogue}
                                    media={media}
                                    mediaTitle={media.title || media.name} 
                                    ratings={media.vote_average} 
                                    poster={media.poster_path}
                                    description={media.overview}/>
                        </Grid>)}

                </Grid>
            <Grid container xs={1}></Grid>
        </Grid>
    )
}

export default MovieCards
