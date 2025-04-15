import {
  PointsDescription,
  PointsValue,
  ScoreBoxContainer,
  ScoreBoxWrapper,
  ShopButton,
  ShopButtonWrapper,
} from './score-box.styles';
import shopButtonBg from '../../assets/images/button-bg.svg';

export default function ScoreBox() {
  return (
    <ScoreBoxWrapper>
      <ScoreBoxContainer>
        <PointsValue>2350 pts</PointsValue>
        <PointsDescription>($235)</PointsDescription>

        <ShopButtonWrapper>
          <ShopButton background={shopButtonBg}>Shop Perks</ShopButton>
        </ShopButtonWrapper>
      </ScoreBoxContainer>
    </ScoreBoxWrapper>
  );
}
