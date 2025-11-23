import React, { useEffect, useState, useRef } from 'react'

export default function Task() {
  const [profileStatus, setProfileStatus] = useState('Fetching profile...')
  const [searchText, setSearchText] = useState('')
  const [searchStatus, setSearchStatus] = useState('')
  const searchTimeoutRef = useRef(null)

  // On mount - fetch profile
  useEffect(() => {
    const timer = setTimeout(() => {
      setProfileStatus('Profile Loaded')
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Handle search input with debounce
  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchText(value)

    // Clear existing timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current)
    }

    // If input is cleared, hide everything
    if (value.trim() === '') {
      setSearchStatus('')
      return
    }

    // Show searching immediately
    setSearchStatus('Searching...')

    // Set new timeout for debounced search
    searchTimeoutRef.current = setTimeout(() => {
      setSearchStatus(`Search result for: ${value}`)
    }, 400)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div>
      <h1>Task Component</h1>
      <div>
        <p>{profileStatus}</p>
      </div>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        {searchStatus && <p>{searchStatus}</p>}
      </div>
    </div>
  )
}
