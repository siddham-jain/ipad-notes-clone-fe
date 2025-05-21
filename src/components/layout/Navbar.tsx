import { Link } from 'react-router-dom';
import { Group, Button, AppShellHeader, Container } from '@mantine/core';

const Navbar = () => {
  return (
    <AppShellHeader className="py-2 bg-blue-500">
      <Container fluid h="100%">
        <Group h="100%" px="md" justify="space-between">
          <Group>
            {/* Placeholder for logo or app title */}
            <span className="text-white font-bold">MyApp</span>
          </Group>
          <Group>
            <Button component={Link} to="/" variant="subtle" className="text-white hover:bg-blue-600">
              Home
            </Button>
            <Button component={Link} to="/login" variant="subtle" className="text-white hover:bg-blue-600">
              Login
            </Button>
            <Button component={Link} to="/signup" variant="subtle" className="text-white hover:bg-blue-600">
              Sign Up
            </Button>
          </Group>
        </Group>
      </Container>
    </AppShellHeader>
  );
};

export default Navbar;
