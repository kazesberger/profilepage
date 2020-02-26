import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import blogLinkStyles from '../components/BlogLink.module.css'
// import theme from '../../config/theme';


const BlogLink = ({ cover, path, date, title, excerpt }) => (
  // <Wrapper>
  //   <Image>
  //     <Img fluid={cover} />
  //   </Image>
  //   <StyledLink to={path}>
  //     <Info>
  //       <span>{date}</span>
  //       <Title>{title}</Title>
  //       <span>{excerpt}</span>
  //     </Info>
  //   </StyledLink>
  // </Wrapper>
  <article className={blogLinkStyles.blogPreview}>
    <div className={blogLinkStyles.blogImage}>
      <Img className={blogLinkStyles.blogImageImg} fluid={cover} />
    </div>
    <Link className={blogLinkStyles.styledLink} to={path}>
    {/* <Link to={path}> */}
      <div className={blogLinkStyles.postInfo}>
        <span>{date}</span>
        <h2 className={blogLinkStyles.postTitle}>{title}</h2>
        <span>{excerpt}</span>
      </div>
    </Link>
  </article>
);

export default BlogLink;

// PostList.propTypes = {
//   cover: PropTypes.object.isRequired,
//   path: PropTypes.string.isRequired,
//   excerpt: PropTypes.string,
//   date: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };
