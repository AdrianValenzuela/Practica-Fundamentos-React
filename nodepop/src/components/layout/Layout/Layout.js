// libraries imports
import React from 'react';

// local imports
import Header from '../Header';
import Footer from '../Footer';
import { LoginPage } from '../../auth';
import './Layout.css';

function Layout() {
    return (
        // <div className='layout'>
        //     <Header />
        //     <main className='content'>
        //         <h1>title</h1>
        //         <p>content</p>
        //     </main>
        //     <Footer />
        // </div>
        <LoginPage />
    );
}

export default Layout;
