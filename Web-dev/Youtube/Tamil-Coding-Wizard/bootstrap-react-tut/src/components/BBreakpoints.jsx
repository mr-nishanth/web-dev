import { Container } from "react-bootstrap";

const BBreakpoints = () => {
  return (
    <>
      <Container className="">
        <div className="text-bg-danger mb-3">Normal</div>
      </Container>
      <Container fluid>
        <div className="text-bg-info mb-3">Fluid</div>
      </Container>
      <Container fluid="md">
        <div className="text-bg-success mb-3">Fluid until medium screen</div>
      </Container>
    </>
  );
};
export default BBreakpoints;

/*
X-Small devices (portrait phones, less than 576px)
No media query for `xs` since this is the default in Bootstrap

$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);


Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) { ... }

*/
