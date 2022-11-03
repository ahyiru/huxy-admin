const Index = ({children, title, placement}) => (
  <span className={`tooltip-${placement}`} tooltip={title}>
    {children}
  </span>
);

export default Index;
