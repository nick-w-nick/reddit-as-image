import {
    Card,
    Image as MantineImage,
    Text,
    useMantineTheme,
    Title,
    Box,
    Center,
    Paper,
    Container,
    Group
} from '@mantine/core';

import ReactMarkdown from 'react-markdown';
import { ArrowBigTop as ArrowNarrowUp, MessageCircle2, Calendar } from 'tabler-icons-react';
import { Awards } from './Awards';

export default function PostCard({ post, postRef }) {
    const theme = useMantineTheme();

    const primaryTextColor =
        theme.colorScheme === 'dark' ? theme.colors.gray[2] : theme.colors.dark[9];

    const secondaryTextColor =
        theme.colorScheme === 'dark' ? theme.colors.gray[5] : theme.colors.dark[9];

    const {
        subreddit,
        title,
        body,
        author,
        upvotes,
        image,
        permalink,
        comments,
        created,
        locked,
        awards,
        link_flair_text,
        link_flair_background_color
    } = post;

    return (
        // Get snapshot of this element
        <Container p="sm">
            <Paper ref={postRef} px={'lg'} py={'sm'} shadow="xl">
                <Text color={primaryTextColor} mt={10}>
                    <Group spacing={'xs'}>
                        <Text color={primaryTextColor} size="sm" weight="600" component="span">
                            {subreddit}
                        </Text>
                        <Text
                            mx={'-5px'}
                            color={secondaryTextColor}
                            size="xs"
                            weight="200"
                            component="span"
                        >
                            •
                        </Text>

                        <Text
                            style={{
                                verticalAlign: 'middle',
                                display: 'inline-block',
                                whiteSpace: 'nowrap'
                            }}
                            size="sm"
                            color={secondaryTextColor}
                            component="span"
                        >
                            Posted by u/{author}
                        </Text>
                    </Group>
                </Text>
                <Title style={{ color: primaryTextColor }} order={4} mt={'xs'}>
                    {title}
                </Title>

                <Box mt={''}>
                    <Center inline>
                        <ArrowNarrowUp
                            size={20}
                            style={{ verticalAlign: 'middle', marginRight: '5px' }}
                        />
                        <Box>{upvotes}</Box>
                    </Center>
                    <Center inline style={{ marginLeft: '10px' }}>
                        <MessageCircle2
                            size={20}
                            style={{ verticalAlign: 'middle', marginRight: '5px' }}
                        />
                        <Box>{comments}</Box>
                    </Center>
                    <Center inline style={{ marginLeft: '10px' }}>
                        <Calendar
                            size={20}
                            style={{ verticalAlign: 'middle', marginRight: '5px' }}
                        />
                        <Box>{created}</Box>
                    </Center>
                    <Awards awards={awards} />
                    {image ? (
                        <Card shadow="sm" p="lg" mt={'md'}>
                            <Card.Section>
                                <MantineImage
                                    src={image}
                                    height={500}
                                    fit={'contain'}
                                    alt={title}
                                />
                            </Card.Section>
                        </Card>
                    ) : (
                        <ReactMarkdown components={{ image: img => console.log(img) }}>
                            {body}
                        </ReactMarkdown>
                    )}
                </Box>
            </Paper>
        </Container>
    );
}
