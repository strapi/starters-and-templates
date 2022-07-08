import NextImage from "./Image"

const Footer = () => {
  return (
    <div className="flex justify-between m-6">
      <p className="text-xs font-semibold text-gray-600">
        Strapi v4 Starter Next.js E-commerce
      </p>
      <div className="flex gap-3 ml-4">
        <a href="https://twitter.com/strapijs" className="max-w-xs ml-4">
          <NextImage src="/twitter.svg" width={20} height={20} alt="Twitter" />
        </a>
        <a href="https://facebook.com/strapijs" className="ml-3">
          <NextImage
            src="/facebook.svg"
            width={20}
            height={20}
            alt="Facebook"
          />
        </a>
        <a
          href="https://github.com/strapi/strapi-starter-next-ecommerce"
          className="ml-3"
        >
          <NextImage src="/github.svg" width={20} height={20} alt="GitHub" />
        </a>
      </div>
    </div>
  )
}

export default Footer
