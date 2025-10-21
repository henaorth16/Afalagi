import React from 'react'

export default function Footer() {
  return (
     <footer className="py-10 text-center border-t mt-10 text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Afalagi — Reuniting Families, Empowering Communities.
        </p>
      </footer>
    )
}
