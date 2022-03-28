import React from 'react'

import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import SquareFootIcon from '@mui/icons-material/SquareFoot';


export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon:<HomeIcon/>,
        cName: 'nav-text-own'
    },
    {
        title:'Directas',
        path:'/directas',
        icon:<SchoolIcon/>,
        cName: 'nav-text-own'
    },
    {
        title:'Indirectas',
        path:'/indirectas',
        icon:<HomeWorkIcon/>,
        cName: 'nav-text-own'
    },
    {
        title:'Evaluaciones',
        path:'/evaluacion',
        icon:<ExpandCircleDownIcon/>,
        cName: 'nav-text-own'
    },
    {
        title:'Complementarias',
        path:'/complementos',
        icon:<SquareFootIcon/>,
        cName: 'nav-text-own'
    }
]