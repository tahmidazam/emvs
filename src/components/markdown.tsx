import "@/css/markdown.css";
import em from "@/utils/em";
import rem from "@/utils/rem";
import round from "@/utils/round";
import {
  Blockquote,
  Code,
  Heading,
  Kbd,
  Link as RadixLink,
  Text,
} from "@radix-ui/themes";
import { Responsive } from "@radix-ui/themes/props";
import { promises } from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import path from "path";
import remarkGfm from "remark-gfm";
import sanitizeHtml from "sanitize-html";
import TurndownService from "turndown";

/**
 * The props for the `Md` component.
 */
export interface MarkdownProps {
  html?: string;
  publicPath?: string;
  source?: string;
  textColour?:
    | "gray"
    | "gold"
    | "bronze"
    | "brown"
    | "yellow"
    | "amber"
    | "orange"
    | "tomato"
    | "red"
    | "ruby"
    | "crimson"
    | "teal"
    | "plum"
    | "purple"
    | "violet"
    | "iris"
    | "indigo"
    | "blue"
    | "cyan"
    | "teal"
    | "jade"
    | "green"
    | "grass"
    | "lime"
    | "mint"
    | "sky"
    | undefined;
  textSize?:
    | Responsive<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9">
    | undefined;
}

/**
 * Render markdown content from a source, a filename from the public folder, or
 * HTML.
 *
 * - HTML content is sanitised and converted to markdown.
 * - The file contents of the filename are read asynchronously.
 * - The source is rendered directly as markdown.
 *
 * Note a provided HTML or filename overrides the source property, and a
 * filename overrides the HTML property.
 *
 * The `textColour` property is applied to all text elements with the exception
 * of links.
 * @param param0 The string source and size.
 * @returns The rendered markdown if a source can be resolved, otherwise null.
 */
export default async function Markdown({
  html,
  source,
  publicPath,
  textSize,
  textColour,
}: MarkdownProps) {
  if (html) {
    // Sanitize the HTML to prevent XSS attacks.
    const sanitizedHtml = sanitizeHtml(html);

    // Convert the sanitized HTML to markdown.
    const turndownService = new TurndownService();

    source = turndownService.turndown(sanitizedHtml);
  }

  if (publicPath)
    source = await promises.readFile(
      path.join(process.cwd(), "public", publicPath),
      "utf8"
    );

  if (!source) return null;

  return (
    <div className="md">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            rehypePlugins: [],
            remarkPlugins: [remarkGfm],
          },
        }}
        components={{
          Kbd,
          a: (props) =>
            props.href && (
              <RadixLink asChild size={textSize} color="teal">
                <Link href={props.href}>{props.children}</Link>
              </RadixLink>
            ),
          p: (props) => (
            <Text
              as="p"
              mb={em(20, 16)}
              mt={em(20, 16)}
              size={textSize}
              color={textColour}
            >
              {props.children}
            </Text>
          ),
          blockquote: (props) => (
            <Blockquote size={textSize}>{props.children}</Blockquote>
          ),
          ul: (props) => (
            <ul
              style={{
                marginTop: em(16, 14),
                marginBottom: em(16, 14),
                paddingInlineStart: em(22, 14),
                listStyleType: "disc",
              }}
            >
              {props.children}
            </ul>
          ),
          ol: (props) => (
            <ol
              style={{
                marginTop: em(16, 14),
                marginBottom: em(16, 14),
                paddingInlineStart: em(22, 14),
                listStyleType: "decimal",
              }}
            >
              {props.children}
            </ol>
          ),
          li: (props) => (
            <li
              style={{
                marginTop: em(4, 14),
                marginBottom: em(4, 14),
              }}
            >
              {props.children}
            </li>
          ),
          pre: (props) => (
            <pre
              style={{
                fontSize: em(12, 14),
                lineHeight: round(20 / 12),
                marginTop: em(20, 12),
                marginBottom: em(20, 12),
                borderRadius: rem(4),
                paddingTop: em(8, 12),
                paddingInlineEnd: em(12, 12),
                paddingBottom: em(8, 12),
                paddingInlineStart: em(12, 12),
                backgroundColor: "var(--gray-2)",
              }}
            >
              {props.children}
            </pre>
          ),
          code: (props) => (
            <Code size={textSize} variant="ghost" color={textColour}>
              {props.children}
            </Code>
          ),
          h1: (props) => (
            <Heading
              as="h1"
              color={textColour}
              style={{
                fontSize: em(36, 16),
                marginTop: "0",
                marginBottom: em(32, 36),
                lineHeight: round(40 / 36),
              }}
            >
              {props.children}
            </Heading>
          ),
          h2: (props) => (
            <Heading
              as="h2"
              color={textColour}
              style={{
                fontSize: em(24, 16),
                marginTop: em(48, 24),
                marginBottom: em(24, 24),
                lineHeight: round(32 / 24),
              }}
            >
              {props.children}
            </Heading>
          ),
          h3: (props) => (
            <Heading
              as="h3"
              color={textColour}
              style={{
                fontSize: em(20, 16),
                marginTop: em(32, 20),
                marginBottom: em(12, 20),
                lineHeight: round(32 / 20),
              }}
            >
              {props.children}
            </Heading>
          ),
          h4: (props) => (
            <Heading
              as="h3"
              color={textColour}
              style={{
                marginTop: em(24, 16),
                marginBottom: em(8, 16),
                lineHeight: round(24 / 16),
              }}
            >
              {props.children}
            </Heading>
          ),
        }}
      />
    </div>
  );
}
