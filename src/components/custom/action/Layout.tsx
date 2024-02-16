import { Flex } from "antd";
import { ThemeProvider } from "antd-style";
import { MessageInstance } from "antd/es/message/interface";
import { ModalStaticFunctions } from "antd/es/modal/confirm";
import { NotificationInstance } from "antd/es/notification/interface";
import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

export let message: MessageInstance;
export let modal: Omit<ModalStaticFunctions, "warn">;
export let notification: NotificationInstance;

const Center = styled(Flex)`
    background-color: #f5f5f5;
    height: 100vh;
`;

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => (
    <ThemeProvider
        getStaticInstance={instances => {
            message = instances.message;
            modal = instances.modal;
            notification = instances.notification;
        }}
        theme={{
            token: { borderRadius: 2, colorInfo: "#5bdbe6", colorPrimary: "#5bdbe6" },
        }}>
        <Center align="center" justify="center">
            {children}
        </Center>
    </ThemeProvider>
);

export interface LayoutProps {}

export default Layout;
