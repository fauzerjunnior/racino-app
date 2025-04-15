import { FeedContainer, FeedContainerWrapper, FeedCard } from './feed.styles';

import backgroundImg from '../../assets/images/background.svg';

export default function Feed() {
  return (
    <FeedContainer>
      <FeedContainerWrapper>
        <FeedCard backgroundImg={backgroundImg}>
          <h3>Feed</h3>

          <p>
            The Feed showcases top point earners, recognizing contributions and
            inspiring friendly competition.
          </p>
        </FeedCard>
      </FeedContainerWrapper>
    </FeedContainer>
  );
}
