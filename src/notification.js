import { Notification } from 'electron';

export const notify = ({ title, body, icon }) => {
    const notification = new Notification({ title, body, icon });
    notification.show();
};