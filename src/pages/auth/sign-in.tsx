import { useToggle, upperFirst } from "@mantine/hooks";
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
    Container,
} from "@mantine/core";
import { GoogleButton, GitHubButton } from "../../components/shared";

export default function SignInPage(props: PaperProps) {
    return (
        <Container my="lg">
            <Paper radius="md" p="xl" withBorder {...props}>
                <Text size="lg" weight={500}>
                    Welcome to Mantine, with
                </Text>

                <Group grow mb="md" mt="md">
                    <GoogleButton radius="xl">Google</GoogleButton>
                    <GitHubButton radius="xl">GitHub</GitHubButton>
                </Group>

                {/* <Divider label="Or continue with email" labelPosition="center" my="lg" /> */}
            </Paper>
        </Container>
    );
}
