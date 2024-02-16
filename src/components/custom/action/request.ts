import { message, modal, notification } from './Layout';

export const showMessage = () => {
    message.success('Success!');
};

export const showModal = () => {
    modal.warning({
        centered: true,
        content: 'some messages...some messages...',
        maskClosable: true,
        title: 'This is a warning message'
    });
};

export const showNotification = () => {
    notification.info({
        description: 'Hello, Ant Design Style',
        message: 'Notification'
    });
};
