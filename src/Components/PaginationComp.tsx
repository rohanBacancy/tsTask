import Pagination from '@material-ui/lab/Pagination';
import { PaginationWrapper } from './StyledComponents/StyledComponents';

interface IProps{
    page: number,
    setPage:(pageNo: number) => void,
    totalPages: number
}

const PaginationComp:React.FC<IProps> = ({ page,setPage,totalPages }) => {

    const handleChange = (event : React.ChangeEvent<unknown>, value: number) => setPage(value);

    return (
        <PaginationWrapper>
            <Pagination count={totalPages} page={page} onChange={handleChange} color={"secondary"}/>
        </PaginationWrapper>
    )
}

export default PaginationComp
