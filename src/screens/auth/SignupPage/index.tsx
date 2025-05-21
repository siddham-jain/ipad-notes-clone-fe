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

const SignupPage = () => {
  return (
    <Container size={460} my={40}> {/* Matched size and margin with LoginPage */}
      {/* Center content vertically, accounting for Navbar (approx 60px) and container padding (my={40} -> 80px) */}
      <Center style={{ width: '100%', minHeight: 'calc(100vh - 60px - 80px)' }}>
        <Stack w="100%" align="stretch">
          <Title ta="center" className="text-2xl font-semibold">
            Create your account
          </Title>
          <Text c="dimmed" size="sm" ta="center" mt={5}>
            Already have an account?{' '}
            <Anchor component={Link} to="/login" size="sm">
              Log in
            </Anchor>
          </Text>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <Stack gap="md">
              <TextInput
                label="Email"
                placeholder="you@example.com"
                required
                // Form handling to be added later
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                mt="md"
                // Form handling to be added later
              />
              <PasswordInput
                label="Confirm Password"
                placeholder="Confirm your password"
                required
                mt="md"
                // Form handling to be added later
              />
              <Button type="submit" fullWidth mt="xl">
                Sign Up
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Center>
    </Container>
  );
};

export default SignupPage;
