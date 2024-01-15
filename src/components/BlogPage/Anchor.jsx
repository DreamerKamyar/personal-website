import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Anchor, Link } from "../AllSVG";
const AnchorComponent = (props) => {
  const ref = useRef();
  const hiddenRef = useRef();
  useEffect(() => {
    const handelScroll = () => {
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
      let diffp = (diff * 100) / (bodyHeight - windowSize);
      ref.current.style.transform = `translateY(${-diffp}%)`;
      if (window.pageYOffset > 30) {
        hiddenRef.current.style.display = "none";
      } else {
        hiddenRef.current.style.display = "block";
      }
      if (window.pageYOffset > 30) {
        ref.current.style.display = "flex";
      } else {
        ref.current.style.display = "none";
      }
    };

    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);
  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden">
        <Anchor width={70} height={70} fill="currentColor"></Anchor>
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(props.numbers)].map((x, id) => {
          return (
            <Link
              key={id}
              width={25}
              height={25}
              fill="currentColor"
              className="chain"
            ></Link>
          );
        })}
        <Anchor width={70} height={70} fill="currentColor"></Anchor>
      </Slider>
    </Container>
  );
};

export default AnchorComponent;

const PreDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);
  .chain {
    transform: rotate(135deg);
  }
`;
const Container = styled.div`
  position: relative;
`;
