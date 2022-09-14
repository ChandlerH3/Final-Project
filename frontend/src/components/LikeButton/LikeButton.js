import styled from "styled-components";

import Heart from "./Heart";
import PoppingCircle from "./PoppingCircle";
import ScaleIn from "./ScaleIn";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ size = 40, like }) => {
  const heartSize = size * 0.6;

  return (
    <Wrapper>
      <Heart isToggled={like} />
      {like && <PoppingCircle size={size} color="#E790F7" />}
      {like ? (
        <ScaleIn>
          <Heart isToggled={like} />
        </ScaleIn>
      ) : (
          <Heart isToggled={like} />
        )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;
