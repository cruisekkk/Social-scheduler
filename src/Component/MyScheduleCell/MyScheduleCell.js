import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
const { TextArea } = Input;
function MyScheduleCell({ timeLength, index, updateLength, cleanSchedule }) {
    let tLength = timeLength;
    return (
        <div
            style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '103px',
                marginTop: '25px',
                marginBottom: '25px',
                width: '560px',
                height: `${40 * tLength}px`,
                background: 'rgba(133, 118, 237, 0.15)',
                borderLeft: '#8576ED solid 3px',
            }}
        >
            {tLength === 1 ? null : (
                <div
                    style={{
                        position: 'absolute',
                        width: '22px',
                        height: '22px',
                        top: '0%',
                        transform: 'translateY(-50%)',
                        // lineHeight: `${40 * tLength}px`,
                        background: "url('http://localhost:8000/reduce_icon.png')",
                        backgroundRepeat: 'no-repeat',
                    }}
                    onClick={() => {
                        updateLength(timeLength - 1, index);
                    }}
                ></div>
            )}
            <div
                style={{
                    position: 'absolute',
                    width: '22px',
                    height: '22px',
                    bottom: '0%',
                    transform: 'translateY(50%)',
                    background: "url('http://localhost:8000/extend_icon.png')",
                    backgroundRepeat: 'no-repeat',
                }}
                onClick={() => {
                    updateLength(timeLength + 1, index);
                }}
            ></div>
            <TextArea
                placeholder="Please enter your event"
                bordered={false}
                autoSize={{ minRows: 1, maxRows: 4 }}
            />
            <div
                style={{
                    position: 'absolute',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '35px',
                    height: '100%',
                    right: '0%',
                    background: 'rgba(151,151,151,0.35)',
                }}
            >
                <div
                    style={{
                        width: '20px',
                        height: '25px',
                        background: "url('http://localhost:8000/clean.png')",
                        zIndex: 1,
                        opacity: '0.75',
                    }}
                    onClick={() => {
                      cleanSchedule(index);
                  }}
                ></div>
            </div>
        </div>
    );
}

export default MyScheduleCell;
