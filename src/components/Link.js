import Link from '@mui/material/Link';


const MaybeLink = ({ children, ...props }) => {
  if (!props.href) {
    return children;
  } else {
    return <Link {...props}>{children}</Link>;
  }
};

export default MaybeLink;