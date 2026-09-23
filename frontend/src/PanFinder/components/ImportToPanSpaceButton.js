import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

import { Box } from '../../Primitives'

const compactStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  p: '3px',
  bg: '#1a202c',
  border: '1px solid #4a5568',
  borderRadius: '6px',
  color: '#e2e8f0',
  lineHeight: 0,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  ':hover': {
    bg: '#2d3748',
    borderColor: '#646eb1',
    color: '#e2e8f0',
    transform: 'translateY(-1px)',
    boxShadow: '0 2px 8px rgba(100, 110, 177, 0.3)',
  },
  ':active': {
    transform: 'translateY(0)',
  },
  ':focus-visible': {
    outline: '2px solid #63b3ed',
    outlineOffset: '2px',
  },
}

// Matches the "View Metadata" pill in DocumentDetails
const pillStyles = {
  p: '5px 10px',
  fontSize: '12px',
  display: 'inline-flex',
  width: 'fit-content',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 1,
  borderRadius: '999px',
  border: '1px solid',
  borderColor: 'rgba(160, 174, 192, 0.22)',
  backgroundColor: 'rgba(255, 255, 255, 0.04)',
  color: '#cbd5e0',
  textDecoration: 'none',
  cursor: 'pointer',
  transition:
    'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease',
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderColor: 'rgba(226, 232, 240, 0.35)',
    transform: 'translateY(-1px)',
  },
  ':active': {
    transform: 'translateY(0)',
  },
  ':focus-visible': {
    outline: '2px solid #63b3ed',
    outlineOffset: '2px',
  },
}

function ImportToPanSpaceButton({ doi, title, variant = 'compact' }) {
  const importUrl = process.env.REACT_APP_PANSPACE_IMPORT_URL

  if (!importUrl || !doi) {
    return null
  }

  const href = `${importUrl}?doi=${encodeURIComponent(
    doi,
  )}&title=${encodeURIComponent(title || '')}`
  const isPill = variant === 'pill'

  return (
    <Box
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()} // Prevent row click when clicking link
      sx={isPill ? pillStyles : compactStyles}
      title="Import to PanSpace"
      aria-label="Import to PanSpace"
    >
      <FiExternalLink size={isPill ? 14 : 12} />
      {isPill && 'Import to PanSpace'}
    </Box>
  )
}

export default ImportToPanSpaceButton
