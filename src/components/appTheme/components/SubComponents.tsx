"use client";

import { Button, DatePicker, Form, InputNumber, Select, Slider, Space, Switch } from "antd";
import { createStyles } from "antd-style";
import { FC } from "react";
import TopLog from "./TopLogo";

const { Option } = Select;

const useStyles = createStyles(({ css }) => ({
    form: css`
        margin-bottom: 100px;
    `,
    header: css`
        margin-bottom: 10px;
        padding: 10px 100px 0;
        text-align: center;
    `,
    select: css`
        width: 192px;
    `,
}));

const SubComponents: FC = () => {
    const { styles } = useStyles();
    return (
        <>
            <TopLog className={styles.header} tips="Form" />
            <Form className={styles.form} labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
                <Form.Item label="数字输入框">
                    <InputNumber defaultValue={3} max={10} min={1} />
                    <span className="ant-form-text ml-2">台机器</span>
                </Form.Item>
                <Form.Item label="开关">
                    <Switch defaultChecked />
                </Form.Item>
                <Form.Item label="滑动输入条">
                    <Slider defaultValue={70} />
                </Form.Item>
                <Form.Item label="筛选器">
                    <div className={styles.select}>
                        <Select defaultValue="lucy">
                            <Option value="jack">jack</Option>
                            <Option value="lucy">lucy</Option>
                            <Option value="disabled" disabled>
                                disabled
                            </Option>
                            <Option value="yiminghe">yiminghe</Option>
                        </Select>
                    </div>
                </Form.Item>
                <Form.Item label="日期选择器">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="日期范围选择框">
                    <DatePicker.RangePicker />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button>Cancel</Button>
                        <Button type="primary" ghost>
                            Without Sub Components
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </>
    );
};

export default SubComponents;
