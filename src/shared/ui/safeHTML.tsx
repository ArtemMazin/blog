import React from "react";
import DOMPurify from "dompurify";

interface SafeHTMLProps {
  html: string;
}

const SafeHTML: React.FC<SafeHTMLProps> = ({ html }) => {
  const sanitizedHTML = DOMPurify.sanitize(html);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
};

export default SafeHTML;
