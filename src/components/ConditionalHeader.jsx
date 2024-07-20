
import React from 'react'
import { useLocation } from 'react-router-dom';
import Nav from './Nav.jsx'
import Social from './Social.jsx';

function ConditionalHeader() {
    const location = useLocation();
    const showHeader = ['/works', '/skills', '/resume', '/self'].includes(location.pathname);
  
    return showHeader ? <> <Nav/><Social/> </> : null;
}

export default ConditionalHeader;