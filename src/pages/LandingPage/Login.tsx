/* eslint-disable @typescript-eslint/no-explicit-any */
// components/LoginForm.tsx
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Form, Input, message } from "antd";
import { useLoginMutation } from "../../redux/api/api";
import { login } from "../../redux/features/authSlice";

interface IFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const [loginMutation] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const { user, token } = await loginMutation(data).unwrap();
      dispatch(login({ user, token }));
      message.success("Login successful!");
    } catch (error) {
      const errorMessage = (error as any)?.data?.message || "Login failed!";
      message.error(errorMessage);
    }
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
      <Form.Item label="Email">
        <Input {...register("email")} placeholder="Enter your email" />
        {errors.email && <span>{errors.email.message}</span>}
      </Form.Item>

      <Form.Item label="Password">
        <Input.Password
          {...register("password")}
          placeholder="Enter your password"
        />
        {errors.password && <span>{errors.password.message}</span>}
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
