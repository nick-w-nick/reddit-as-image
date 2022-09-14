import {
    Container,
    ActionIcon,
    useMantineColorScheme,
    Group,
    MediaQuery,
    useMantineTheme,
    Title
} from '@mantine/core';

import { Sun, MoonStars } from 'tabler-icons-react';

import usePost from '../hooks/usePost.js';
import RedditLinkInput from '../components/RedditLinkInput.js';
import { PostCardContainer } from '../components/PostCardContainer.js';

export default function Index() {
    const { post, loading, error, fetchPost } = usePost();

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();
    const dark = colorScheme === 'dark';
    return (
        <Container size="md">
            <Title className="hero" color={theme.colors.indigo}>
                <span className="reddit">reddit</span>
                <br /> as <br />
                image
            </Title>
            <Group align="end">
                <MediaQuery smallerThan="xs" styles={{ width: '100%', flex: 'none !important' }}>
                    <RedditLinkInput
                        fetchPost={fetchPost}
                        post={post}
                        error={error}
                        loading={loading}
                    />
                </MediaQuery>
                <ActionIcon
                    size="36px"
                    variant="outline"
                    color={dark ? 'yellow' : 'blue'}
                    onClick={() => toggleColorScheme()}
                    title="Toggle color scheme"
                >
                    {dark ? <Sun size={20} /> : <MoonStars size={20} />}
                </ActionIcon>
            </Group>
            {post && <PostCardContainer post={post} />}
        </Container>
    );
}
