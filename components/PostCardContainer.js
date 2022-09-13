import { Button, Container, Group } from '@mantine/core';
import { toBlob } from 'html-to-image';
import { useRef } from 'react';
import { Download } from 'tabler-icons-react';
import PostCard from './postcard/PostCard';
import { saveAs } from 'file-saver';

export const PostCardContainer = ({ post }) => {
    const postRef = useRef();
    
    const handleGetPostAsImage = e => {
        const { image } = post;
        const imageName = image.replace('https://i.redd.it/', '').split('.')[0];
        const saveAsName = imageName ? `reddit-as-image_${imageName}.png` : 'reddit-as-image.png';
        
        toBlob(postRef.current, { cacheBust: true }).then(function (blob) {
            saveAs(blob, saveAsName);
        });
    };
    
    return (
        <Container
            mt={'30px'}
            p="md"
            style={{
                border: '3px solid white',
                borderRadius: '10px'
            }}
        >
            <Container p="sm">
                <Group position="right">
                    <Button
                        onClick={handleGetPostAsImage}
                        leftIcon={<Download size={16} />}
                        variant="outline"
                    >
                        Export
                    </Button>
                </Group>
            </Container>
            <PostCard post={post} postRef={postRef} />
        </Container>
    );
};
