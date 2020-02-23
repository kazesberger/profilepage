import PropTypes from 'prop-types';
import React from 'react';
import BlogLink from '../components/BlogLink';

const BlogList = ({data}) => (
    <div>
        <h1>About data.site.siteMetadata.title</h1>
        <p>
            We're the only site running on your computer dedicated to showing the best
            photos and videos of pandas eating lots of food.
        </p>
        <div>
            {data.allMarkdownRemark.map(({ node }) => {
            const { id, excerpt, frontmatter } = node;
            const { cover, path, title, date } = frontmatter;
            return (
                <BlogLink
                key={id}
                cover={cover.childImageSharp.fluid}
                path={path}
                title={title}
                date={date}
                excerpt={excerpt}
                />
            );
            })}
        </div>
</div>
)

export default BlogList;

BlogList.displayName = 'BlogList';
BlogList.propTypes = {
    images: PropTypes.array
};

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
