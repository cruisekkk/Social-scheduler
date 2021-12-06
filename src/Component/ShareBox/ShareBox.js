import React, { useState } from 'react';
import { Button, Modal, message, Input } from 'antd';

function ShareBox() {
    const [isShareVisible, setIsShareVisible] = useState(false);

    const showModal = () => {
        setIsShareVisible(true);
    };

    const handleOk = () => {
        message.success('successfully shared');
        setIsShareVisible(false);
    };

    const handleCancel = () => {
        setIsShareVisible(false);
    };

    return (
        <>
            <Button
                size="large"
                style={{
                    backgroundColor: '#F39946',
                    marginLeft: '200px',
                    marginTop: '150px',
                }}
                onClick={showModal}
            >
                Share
            </Button>
            <Modal
                title="Send link"
                visible={isShareVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[]}
            >
                <div>
                    <div style={{ position: 'relative' }}>
                        <Input.Group compact id="inputPlace">
                            <Input
                                style={{ width: 'calc(100% - 200px)' }}
                                defaultValue="yichen.qian@duke.edu"
                            />
                            <Button style={{ backgroundColor: '#EE6C4D' }} onClick={handleOk}>
                                Send invite
                            </Button>
                        </Input.Group>
                    </div>
                    <img
                        src="http://localhost:8000/shareBoxButtom.png"
                        style={{ width: '472px' }}
                    />
                </div>
            </Modal>
        </>
    );
}

export default ShareBox;
