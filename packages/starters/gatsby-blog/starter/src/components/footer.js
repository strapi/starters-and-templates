import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="container mt-16 bg-neutral-100 py-8 text-neutral-700">
      <p>Copyright {currentYear}</p>
    </footer>
  )
}

export default Footer
