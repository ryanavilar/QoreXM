import React from 'react';
import {Button, Modal} from 'antd';

export default function ButtonModal(props?: {
    title: string;
    label: string;
    content: any;
    handleCancel?: any;
    handleOk?: any;
}) {
    const [isModalOpen, setModalOpen] = React.useState(false);
    let handleOk = props?.handleOk;
    let handleCancel = props?.handleCancel;

    const showModal = () => {
        setModalOpen(true);
    };

    if (handleOk === undefined) {
        handleOk = () => {
            setModalOpen(false);
        };
    }

    if (handleCancel === undefined) {
        handleCancel = () => {
            setModalOpen(false);
        };
    }

    return (
        <>
            <Button className="rounded-md from-blue-600" type="primary" onClick={showModal}>
                {props?.label}
            </Button>

            <Modal visible={isModalOpen} title={props?.title} onOk={handleOk} onCancel={handleCancel}>
                {props?.content}
            </Modal>
        </>
    );
}
