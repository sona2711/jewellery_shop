import { Form, Input, Button, Typography, Flex  } from "antd";
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
        <Flex className={styles.emailWrapper} justify="center" align="center" gap="middle" vertical>
            <Title level={2}>{FORM_TITLE}</Title>
             <Form 
                name="emailForm"
                layout="inline"
                onFinish={onFinish}
                style={{ maxWidth: 500 }}
                >
                <Form.Item
                name="email"
                rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email address" }
                ]}
                >
                    <Input placeholder="Enter your email" variant="underlined" style={{marginBottom: 8}} />
                </Form.Item>
                <Form.Item>
                 <Button type="primary" htmlType="submit" style={{ marginLeft: 10 }}>Subscribe</Button>
                </Form.Item>
            </Form>
        </Flex>
    )
}






