import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'; 
import PersonIcon from '@mui/icons-material/Person';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';


export const mainSidebarElemets = [
    {
        id: 0,
        icon: HomeIcon,
        label: 'Home',
        route: '/',
    },
    {
        id: 1,
        icon: TagIcon,
        label: 'Explore',
        route: 'explore',
    },
    {
        id: 2,
        icon: NotificationsNoneIcon,
        label: 'Notifications',
        route: 'notifications',
    },
    {
        id: 3,
        icon: MailOutlineIcon,
        label: 'Messages',
        route: 'messages',
    },
    {
        id: 4,
        icon: BookmarkBorderOutlinedIcon,
        label: 'Bookmarks',
        route: 'bookmarks',
    },
    {
        id: 5,
        icon: TwitterIcon,
        label: 'Twitter Blue',
        route: 'twitter_blue',
    },
    {
        id: 6,
        icon: VerifiedOutlinedIcon,
        label: 'Verified Organiza...',
        route: 'verified_orgs',
    },
    {
        id: 7,
        icon: PersonIcon,
        label: 'Profile',
        route: 'profile',
    },
    
]






export const dropdownElements = [
    {
        id: 21,
        icon: ContactSupportOutlinedIcon,
        label: 'Topics',
        route: 'topics',
    },
    {
        id: 21,
        icon: ListAltOutlinedIcon,
        label: 'Lists',
        route: 'lists',
    },
    {
        id: 21,
        icon: PersonAddAltOutlinedIcon,
        label: 'Twitter Circle',
        route: 'members',
    },
    {
        id: 21,
        icon: VerifiedOutlinedIcon,
        label: 'Verified Orgs',
        route: 'verified_orgs_signup',
    },
]