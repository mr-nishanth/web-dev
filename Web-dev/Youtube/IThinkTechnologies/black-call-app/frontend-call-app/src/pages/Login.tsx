import { Button, Card, Form, Input } from "antd";
import Title from "antd/es/typography/Title";
const SignIn: React.FC = () => {
  return (
    <div className='w-full h-screen bg-gray-100 flex justify-center items-center'>
      <Card className='w-full md:w-96'>
        <Title>Login</Title>
        <Form layout='vertical'>
          <Form.Item label={"Email"}>
            <Input />
          </Form.Item>
          <Form.Item label={"Password"}>
            <Input />
          </Form.Item>
          <Button htmlType='submit' type='primary' size='large'>
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
};
export default SignIn;
