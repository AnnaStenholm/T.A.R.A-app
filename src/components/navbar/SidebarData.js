import react from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
export const SidebarData = [
    {
        title: 'HEM',
        path: '/start',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'ALLA RECEPT',
        path: '/recept/:kategori' ,
        icon: <FaIcons.FaUtensils/>,
        cName: 'nav-text'
    },
    {
        title: 'KÖTT',
        path: '/kategori/kott',
        icon: <GiIcons.GiMeat/>,
        cName: 'nav-text'
    },
    {
        title: 'FISK',
        path: '/kategori/fisk',
        icon: <FaIcons.FaFish/>,
        cName: 'nav-text'
    },
    {
        title: 'VEGO',
        path: '/kategori/vego',
        icon: <FaIcons.FaCarrot/>,
        cName: 'nav-text'
    },
    {
        title: 'LÄGG TILL RECEPT',
        path: '/postpage',
        icon:<FaIcons.FaPlus/>,
        cName: 'nav-text'
    },
    {
        title: 'REGISTRERA DIG',
        path: '/registrera-dig',
        icon: <AiIcons.AiOutlinePlusCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'LOGGA IN',
        path: '/logga-in',
        icon: <AiIcons.AiOutlineLogin/>,
        cName: 'nav-text'
    },
]