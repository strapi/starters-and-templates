import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="container border-t-4 border-neutral-100 py-8 text-neutral-500">
      <p>Copyright {currentYear}</p>
    </footer>
  )
}

export default Footer
