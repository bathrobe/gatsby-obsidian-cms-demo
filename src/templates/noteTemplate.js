import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import ShortcodeWrapper from "../components/ShortcodeWrapper"

export default function noteTemplate({ data }, props) {
  const { mdx } = data

  return (
    <article>
      {/* <ShortcodeWrapper> */}
      <MDXRenderer>{mdx.body}</MDXRenderer>
      {/* </ShortcodeWrapper> */}
      {mdx.inboundReferences.length > 0 ? <p>Referenced in:</p> : ""}
      <ul>
        {mdx.inboundReferences.map(ref => (
          <li>
            <Link to={`/notes/${ref.slug}`}>{ref.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Back Home</Link>
    </article>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      inboundReferences {
        ... on Mdx {
          frontmatter {
            title
          }
          slug
        }
      }
    }
  }
`
