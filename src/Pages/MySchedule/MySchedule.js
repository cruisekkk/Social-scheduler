import React, { useState } from 'react';
import { Button } from 'antd';
import './mySchedule.less';

function MySchedule() {
    const [schedules, setSchedules] = useState([]);
    return (
        <div id="scheduler_panel">
            {schedules.map(item => (
                <ScheduleCell status={item.status} />
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
                    // setSchedules([...schedules, {}])
                }}
            >
                <p style={{ fontWeight: '500', color: '#FFFFFF', marginTop: '2px' }}>New Event</p>
            </Button>
        </div>
    );
}

export default MySchedule;
