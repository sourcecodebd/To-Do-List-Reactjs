import React from 'react';
import Tasks from '../Tasks/Tasks';
import ComposeChart from '../ComposeChart/ComposeChart';
import StackedAreaChart from '../StackedAreaChart/StackedAreaChart';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Tasks />
            <div className="container row mx-auto mt-5">
                <div className="col-md-6 col-12 my-5">
                    <div className="heading shadow-lg bg-primary text-white">
                        <h5>Composed-Chart</h5>
                    </div>
                    <ComposeChart />
                </div>
                <div className="col-md-6 col-12 my-5">
                    <div className="heading shadow-lg bg-success text-white">
                        <h5>Stacked Area-Chart</h5>
                    </div>
                    <StackedAreaChart />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;