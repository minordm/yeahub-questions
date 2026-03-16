import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type Props = {
  html: string;
};

export const HtmlRenderer = ({ html }: Props) => {
  const cleanHtml = DOMPurify.sanitize(html);

  const options = {
    replace: (domNode: any) => {
      // Перехватываем <pre><code>
      if (domNode.name === "pre" && domNode.children?.[0]?.name === "code") {
        const codeNode = domNode.children[0];
        const className = codeNode.attribs?.class || "";
        const match = className.match(/language-(\w+)/);

        const language = match ? match[1] : "plaintext";
        const code = codeNode.children?.[0]?.data || "";

        return (
          <SyntaxHighlighter language={language}>{code}</SyntaxHighlighter>
        );
      }
    },
  };

  return parse(cleanHtml, options);
};
