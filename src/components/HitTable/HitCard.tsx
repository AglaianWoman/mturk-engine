import * as React from 'react';
import { Hit, Requester } from '../../types';
import { Card, Stack } from '@shopify/polaris';
import ActionSection from './ActionSection';
import InfoSection, { Props as InfoSectionProps } from './InfoSection';

export interface Props {
  readonly hit: Hit;
  readonly requester?: Requester;
}

const HitCard = ({ hit, requester }: Props) => {
  const { requesterName, reward, title, groupId, requesterId } = hit;
  const infoSectionProps: InfoSectionProps = {
    requester: requester || requesterName,
    requesterId: requesterId,
    title: title
  };

  return (
    <Card>
      <Stack>
        <ActionSection reward={reward} groupId={groupId} />
        <InfoSection {...infoSectionProps} />
      </Stack>
    </Card>
  );
};

export default HitCard;
