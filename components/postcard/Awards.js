import { Avatar, AvatarsGroup, Center, Text } from '@mantine/core';

export const Awards = ({ awards }) => {
    if (awards.length === 0) {
        return null;
    }
    const topThree = awards
        .sort((a, b) => a - b)
        .slice(0, 3)
        .map(award => award.icon.url);

    const totalAwards = awards.reduce((acc, award) => acc + award.count, 0);

    return (
        <Center inline style={{ marginLeft: '10px' }}>
            <AvatarsGroup size={20} limit={3} total={topThree < 3 && totalAwards}>
                {topThree.map(award => {
                    return <Avatar src={award} key={award} />;
                })}
            </AvatarsGroup>
            <Text size="sm" weight="bold">
                {totalAwards}
            </Text>
        </Center>
    );
};
