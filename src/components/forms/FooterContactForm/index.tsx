import { Form, Input, Button, Typography  } from "antd";
import { FORM_TITLE} from './consts';
import styles from "./styles.module.css"

const {Title} = Typography;
export const FooterContactForm = ()=> {

    const onFinish = (values: { email: string }) => {
        // TODO: Implement email subscription logic
        // e.g., call API endpoint to subscribe email
        console.log(values)
      };

    return (
        <div className={styles.emailWrapper}>
            <Title level={2}>{FORM_TITLE}</Title>
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
                    <Input placeholder="Enter your email" variant="underlined" />
                </Form.Item>
                <Form.Item>
                 <Button type="primary" htmlType="submit">Subscribe</Button>
                </Form.Item>
            </Form>
        </div>
    )
}






