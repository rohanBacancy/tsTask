import { CardActionArea, CardContent } from '@material-ui/core'
import nonImg from '../Static/notAvailable.jpg'
import { IMedia } from './CardList';
import { SBadge, SMediaCard,SMedia, SMediaTitle, SMediaDescription} from './StyledComponents/StyledComponents';

const IMGBASEURL = process.env.REACT_APP_IMG_BASE;

interface IProps{
    triggerDialogue: (media: IMedia) => void,
    media: IMedia,
    mediaTitle: string,
    ratings:number,
    poster:string,
    description:string,
}


const MediaCard:React.FC<IProps> = ({ triggerDialogue,media,mediaTitle,ratings,poster,description}) => {
    return (
        <SBadge badgeContent={ratings} color={ratings>6 ? "primary" : "secondary"}>
            <SMediaCard onClick={() => triggerDialogue(media)}>
                <CardActionArea>
                    <SMedia
                        alt={mediaTitle}
                        src={IMGBASEURL+poster}
                        title={mediaTitle}
                        onError={(e: React.ChangeEvent<HTMLImageElement>) => e.target.src = nonImg}
                    />
                    <CardContent>
                        <SMediaTitle gutterBottom variant="h6">
                            {mediaTitle}
                        </SMediaTitle>
                        <SMediaDescription variant="body2" color="textSecondary">
                            {description}
                        </SMediaDescription>
                    </CardContent>
                </CardActionArea>
            </SMediaCard>
        </SBadge>
    )
}

export default MediaCard
