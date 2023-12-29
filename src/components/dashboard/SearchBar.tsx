import { InputBase, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {
  return (
    <div className='bg-[#242424] rounded-lg 2xl:w-96 flex'>
    <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{
            'aria-label': 'search', style: {
                color: 'white',
            }
        }}
    />
    <IconButton type="button" sx={{ p: '10px', color: 'gray' }} aria-label="search">
        <SearchIcon />
    </IconButton>
</div>
  )
}

export default SearchBar