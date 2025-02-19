import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'; 
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import InstallDesktopOutlinedIcon from '@mui/icons-material/InstallDesktopOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import RemoveFromQueueOutlinedIcon from '@mui/icons-material/RemoveFromQueueOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


export const dropdownElements = [
    {
        id: 21,
        icon: ContactSupportOutlinedIcon,
        label: 'Topics',
        route: 'topics',
    },
    {
        id: 22,
        icon: ListAltOutlinedIcon,
        label: 'Lists',
        route: 'lists',
    },
    {
        id: 23,
        icon: PersonAddAltOutlinedIcon,
        label: 'Twitter Circle',
        route: 'members',
    },
    {
        id: 24,
        icon: VerifiedOutlinedIcon,
        label: 'Verified Orgs',
        route: 'verified_orgs_signup',
    },
]


export const selectElements = [
    {
        id: 31,
        label: 'Creator Studio',
        selects: [
            {
                id: 311,
                icon: BarChartOutlinedIcon,
                label: 'Analytics',
                route: 'analytics',
            },
        ]
    },

    
    {
        id: 32,
        label: 'Professional Tools',
        selects: [
            {
                id: 321,
                icon: RocketLaunchOutlinedIcon,
                label: 'Twitter for Professionals',
                route: 'professionals',
            },
            {
                id: 322,
                icon: InstallDesktopOutlinedIcon,
                label: 'Twitter Ads',
                route: 'ads',
            },
            {
                id: 323,
                icon: PaymentsOutlinedIcon,
                label: 'Monetization',
                route: 'monetization',
            },
        ]
    },
    {
        id: 33,
        label: 'Settings and Support',
        selects: [
            {
                id: 331,
                icon: SettingsOutlinedIcon,
                label: 'Settings and privacy',
                route: 'privacy',
            },
            {
                id: 332,
                icon: HelpOutlineOutlinedIcon,
                label: 'Help Cenyer',
                route: 'help',
            },
            {
                id: 333,
                icon: RemoveFromQueueOutlinedIcon,
                label: 'Display',
                route: 'display',
            },
            {
                id: 334,
                icon: AccountCircleOutlinedIcon,
                label: 'Keyboard shortcuts',
                route: 'keyboard',
            },
        ]
    },
]