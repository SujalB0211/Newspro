import React from 'react';

const Home = () => {
    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>Welcome to NewsMonkey</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>You can switch categories for articles from Navbar</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
