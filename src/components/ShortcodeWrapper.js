import React from "react"
import { MDXProvider } from "@mdx-js/react"

export default function ShortcodeWrapper(props) {
  return <MDXProvider>{props.children}</MDXProvider>
}
