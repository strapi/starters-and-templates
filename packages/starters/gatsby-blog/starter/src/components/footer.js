import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 bg-neutral-100 py-8 text-neutral-700">
      <div className="container">
        <p>Copyright {currentYear}</p>
      </div>
    </footer>
  )
}

export default Footer
