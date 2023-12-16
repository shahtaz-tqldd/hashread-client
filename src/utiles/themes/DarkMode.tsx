"use client"
import React, { useEffect, useState } from 'react';
import { applyTheme } from './utiles';
import baseTheme from './base';
import darkTheme from './dark';
import { IoIosMoon } from 'react-icons/io';
import { LuSunMedium } from "react-icons/lu";

const DarkMode = () => {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    if (!dark) applyTheme(baseTheme)
    else applyTheme(darkTheme)
  }, [dark])
  return (
    <button onClick={() => setDark(!dark)} className='-ml-5'>
      {
        !dark ? <IoIosMoon className="hover:bg-primary p-1.5 rounded-full text-4xl tr" /> : <LuSunMedium className="hover:bg-primary p-1.5 rounded-full text-4xl tr" />
      }
    </button>
  )
}

export default DarkMode