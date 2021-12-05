import React, { useState } from 'react';
import { Button } from 'antd';

import MyScheduleCell from '../../Component/MyScheduleCell/MyScheduleCell';
import './mySchedule.less';

function MySchedule() {
    const [schedules, setSchedules] = useState([]);
    const updateLength = (length, index) => {
        let new_schedules = [...schedules];
        new_schedules[index].timeLength = length;
        setSchedules(new_schedules);
    };
    const cleanSchedule = index => {
        let new_schedules = [...schedules];
        new_schedules.splice(index, 1);
        setSchedules(new_schedules);
    };
    return (
        <div id="scheduler_panel" style={{}}>
            {schedules.map((item, index) => (
                <MyScheduleCell
                    key={item.index + item.content}
                    content={item.content}
                    timeLength={item.timeLength}
                    index={index}
                    updateLength={updateLength}
                    cleanSchedule={cleanSchedule}
                />
            ))}
            <Button
                style={{
                    backgroundColor: '#8576ED',
                    marginLeft: '100px',
                    width: '560px',
                    height: '40px',
                    borderRadius: '6px',
                    borderWidth: '1px',
                }}
                onClick={() => {
                    setSchedules([...schedules, { content: null, timeLength: 1 }]);
                }}
            >
                <p style={{ fontWeight: '500', color: '#FFFFFF', marginTop: '2px' }}>New Event</p>
            </Button>
        </div>
    );
}

export default MySchedule;
