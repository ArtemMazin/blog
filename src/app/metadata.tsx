import { Metadata } from "next";

export const getMetadata = (
  title: string,
  description: string,
  path: string,
): Metadata => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const fullUrl = `${baseUrl}${path}`;
  const ogImage = `${baseUrl}/og-image.jpg`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "Star Wars Universe",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Star Wars Universe",
        },
      ],
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
};
