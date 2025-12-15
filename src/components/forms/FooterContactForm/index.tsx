import { Form, Input, Button,   } from "antd";
// import { FORM_TITLE } from "./consts"; Typography
import styles from "./styles.module.css"

// const { Title } = Typography;
export const FooterContactForm = ()=> {

    const onFinish = (values: string) => {
        console.log("Submitted values:", values);
      };

    return (
        <div className={styles.emailWrapper}>
             {/* <Title level={3}>{FORM_TITLE}</Title>    */}
             <Form 
                name="emailForm"
                layout="inline"
                onFinish={onFinish}
                style={{ maxWidth: 400 }}
                >
                <Form.Item
                name="email"
                rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email address" }
                ]}
                >
                    <Input placeholder="Enter your email" />
                </Form.Item>

                <Form.Item>
                 <Button type="primary" htmlType="submit">Subscribe</Button>
                </Form.Item>
            </Form>
        </div>
    )
}






