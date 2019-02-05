import React from 'react';
import classes from './Blender.css';

const Blender = (props) => {
    return (
        <>
        <div className={classes.topper}></div>
        <div className={classes.topperFoundation}></div>
            <div className = {classes.textBoxWrapper}>
                <div className = {classes.box}>
                    <h3>Box 1</h3>
                    <p>Contrary to popular belief</p>
                </div>

                <div className = {classes.box}>
                    <h3>Box 2</h3>
                    <p> a Lorem Ipsum passage</p>
                </div>

                <div className = {classes.box}>
                <h3>Spinach</h3>
                <img src="https://previews.123rf.com/images/marijapiliponyte/marijapiliponyte1406/marijapiliponyte140600024/29508481-hand-drawn-spinach-icon-with-a-name-and-wooden-background.jpg" width="40" height="40" alt="Spinach"/>
                <p>300Kcal</p>
            </div>
        </div>
        <div className={classes.baseTrapezium}></div>
        <div className={classes.baseRectangle}>test</div>
        </>
    );
}

export default Blender;