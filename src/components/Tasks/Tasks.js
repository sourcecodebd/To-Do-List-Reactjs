import { Button, Card } from '@mui/material';
import Rating from 'react-rating';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useTasks from '../../hooks/useTasks';
import Heading from '../Heading/Heading';
import Search from '../Search/Search';

const Tasks = () => {
    const [tasks] = useTasks(); // custom hook used from hooks folder

    let totalTrue = 0;
    let totalFalse = 0;
    for (let trues of tasks) {
        if (trues.completed.toString() === "true") {
            totalTrue += trues.completed;
        }
    }
    for (let i = 0; i < tasks.length; i++) {
        const falses = tasks[i];
        if (falses.completed.toString() === "false") {
            totalFalse++;
        }
    }

    let total = totalTrue + totalFalse;
    const truePercentage = totalTrue / total * 100;
    const falsePercentage = totalFalse / total * 100;

    /* Rating React */
    let totalRatingValue = total / 40;
    let completedRatingValue = truePercentage / 20;
    let incompletedRatingValue = falsePercentage / 20;
    const fullIcon = <i className="fas fa-star"></i>
    const emptyIcon = <i className="far fa-star"></i>


    let history = useHistory();
    const handleTasks = () => {
        const URL = `/total-tasks`;
        history.push(URL);
    }
    const handleCompleted = () => {
        const URL = `/completed-tasks`;
        history.push(URL);
    }
    const handleInCompleted = () => {
        const URL = `/incompleted-tasks`;
        history.push(URL);
    }

    return (
        <div>
            <Search />
            <Heading />
            <div className="container-fluid row mt-3 mx-auto gy-3">
                <Card elevation={3} className="col-lg-4 col-md-6 col-12 p-3" sx={{
                    backgroundColor: '#33b5e5',
                    color: 'white'
                }}>
                    <div className="row row-cols-md-2 row-cols-sm-2 row-cols-1">
                        <div>
                            <h4>Total Tasks</h4>
                            <h1>{tasks.length}</h1>
                            <h5>{parseFloat(truePercentage.toFixed(2)) + parseFloat(falsePercentage.toFixed(2))}%</h5>
                            <i className="fas fa-angle-up"></i><br />
                            <Button variant="contained" onClick={handleTasks}>
                                <i className="fas fa-tasks me-2"></i> Visit Tasks
                            </Button><br /><br />
                        </div>
                        <div>
                            <i className="fas fa-clipboard-list fa-6x"></i>
                            <div className="row mt-5">
                                {/* <div className="col">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div> */}
                                <Rating
                                    placeholderRating={totalRatingValue}
                                    emptySymbol={emptyIcon}
                                    placeholderSymbol={fullIcon}
                                    fullSymbol={fullIcon}
                                    readonly
                                />
                            </div>
                        </div>
                    </div>
                </Card>
                <Card elevation={3} className="col-lg-4 col-md-6 col-12 p-3" sx={{
                    backgroundColor: '#00c853',
                    color: 'white'
                }}>
                    <div className="row row-cols-md-2 row-cols-sm-2 row-cols-1">
                        <div>
                            <h4>Completed</h4>
                            <h1>{totalTrue}</h1>
                            <h5>{parseFloat(truePercentage.toFixed(2))}%</h5>
                            <i className="fas fa-angle-up"></i><br />
                            <Button variant="contained" color="success" onClick={handleCompleted}>
                                <i className="fas fa-calendar-check me-2"></i> Complete
                            </Button><br /><br />
                        </div>
                        <div>
                            <i className="fas fa-check-circle fa-6x"></i>
                            <div className="row mt-5">
                                <div className="col">
                                    <Rating
                                        placeholderRating={completedRatingValue}
                                        emptySymbol={emptyIcon}
                                        placeholderSymbol={fullIcon}
                                        fullSymbol={fullIcon}
                                        readonly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card elevation={3} className="col-lg-4 col-md-6 col-12 p-3" sx={{
                    backgroundColor: '#aa66cc',
                    color: 'white'
                }}>
                    <div className="row row-cols-md-2 row-cols-sm-2 row-cols-1">
                        <div>
                            <h4>Incompleted</h4>
                            <h1>{totalFalse}</h1>
                            <h5>{parseFloat(falsePercentage.toFixed(2))}%</h5>
                            <i className="fas fa-angle-up"></i><br />
                            <Button variant="contained" color="error" onClick={handleInCompleted}>
                                <i className="fas fa-times-circle me-2"></i> Incomplete
                            </Button><br /><br />
                        </div>
                        <div>
                            <i className="fas fa-exclamation-circle fa-6x"></i>
                            <div className="row mt-5">
                                <div className="col">
                                    <Rating
                                        placeholderRating={incompletedRatingValue}
                                        emptySymbol={emptyIcon}
                                        placeholderSymbol={fullIcon}
                                        fullSymbol={fullIcon}
                                        readonly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Tasks;