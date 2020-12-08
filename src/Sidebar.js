import React from 'react';
import "./Sidebar.css"
import SidebarOption from "./SidebarOption"
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"/>
            <SidebarOption Icon={HomeIcon} title="Search"/>
            <SidebarOption Icon={SearchIcon} title="Home"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>
            <SidebarOption title="Hip hop"/>
            <SidebarOption title="Rock"/>
            <SidebarOption title="R&B"/>
        </div>
    );
};

export default Sidebar;