import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { setTimerCount } from "../../redux/actions/actions";

const Timer = () => {
    const dispatch = useDispatch();
    const { date, time } = useSelector(state => state.timer);
    const [finish, setFinish] = useState(false);
    useEffect(() => {
        let interval = setInterval(() => {
            const timestamp = `${date}T${time}.000`;
            const currentTime = moment(timestamp)
                .add(-1, "seconds")
                .format("HH:mm:ss");
            dispatch(setTimerCount({ date, time: currentTime }));
            if (currentTime === "00:00:00") setFinish(true);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [dispatch, time]);

    return (
        <div className="timer">
            {!finish ? time : "Finish writing your post and save it."}
        </div>
    );
};

export default Timer;
