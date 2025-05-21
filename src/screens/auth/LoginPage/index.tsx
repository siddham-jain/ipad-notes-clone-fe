import { Link } from 'react-router-dom';
import {
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Title,
  Text,
  Container,
  Stack,
  Center,
  Anchor,
} from '@mantine/core';

const LoginPage = () => {
  return (
    <Container size={460} my={40}>
      {/* Center content vertically, accounting for Navbar (approx 60px) and container padding (my={40} -> 80px) */}
      <Center style={{ width: '100%', minHeight: 'calc(100vh - 60px - 80px)' }}>
        <Stack w="100%" align="stretch">
          <Title ta="center" className="text-2xl font-semibold">
            Welcome back!
          </Title>
          <Text c="dimmed" size="sm" ta="center" mt={5}>
            Don't have an account yet?{' '}
            <Anchor component={Link} to="/signup" size="sm">
              Create account
            </Anchor>
          </Text>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <Stack gap="md">
              <TextInput
                label="Email"
                placeholder="you@example.com"
                required
                // You can add form handling (e.g., formik, react-hook-form) later
                // value={form.values.email}
                // onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                // error={form.errors.email && 'Invalid email'}
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                mt="md"
                // value={form.values.password}
                // onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                // error={form.errors.password && 'Password should include at least 6 characters'}
              />
              {/* <Group justify="space-between" mt="lg"> */}
                {/* Optional: Add 'Forgot password?' link here if needed */}
                {/* <Checkbox label="Remember me" /> */}
                {/* <Anchor component="button" size="sm">
                  Forgot password?
                </Anchor> */}
              {/* </Group> */}
              <Button type="submit" fullWidth mt="xl">
                Sign in
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Center>
    </Container>
  );
};

export default LoginPage;
