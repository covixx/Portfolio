"use client"

import { useState, useEffect } from 'react'
import { Command } from 'cmdk'
import { Home, FileText, Film, Twitter, Github, MapPinIcon, ArrowUpDown,LinkedinIcon, LaptopMinimal } from 'lucide-react'

import { MdKeyboardReturn } from 'react-icons/md'
import UsageStatsDashboard from './usagestats'
import AsciiArt from './noblogs'

export default function Component() {
   const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    const items = [
      { value: "home", label: "home", icon: Home },
      { value: "blog", label: "blog", icon: FileText },
      { value: "stuff i use", label: "stuff i use", icon: Film },
      { value: "twitter", label: "twitter", icon: Twitter },
      { value: "github", label: "github", icon: Github },
      { value: "leetcode", label: "leetcode", icon: LaptopMinimal },
      { value: "linkedin", label: "linkedin", icon: LinkedinIcon },
    ];

    const handleNavigation = (path) => {
      window.location.href = path;
    };
  
    const handleSelect = (value) => {
      switch (value) {
        case "home":
          handleNavigation("/");
          break;
        case "blog":
          handleNavigation("/blog");
          break;
        case "stuff i use":
          handleNavigation("/uses");
          break;
        case "twitter":
          window.open("https://x.com/covix2772", "_blank");
          break;
        case "github":
          window.open("https://github.com/covixx", "_blank");
          break;
        case "leetcode":
          window.open("https://leetcode.com/u/sirbauderlaire/", "_blank");
          break;
        case "linkedin":
          window.open("https://www.linkedin.com", "_blank");
          break;
      }
      setOpen(false);
    };
  

    useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "/") {
          e.preventDefault();
          setOpen((open) => !open);
          setSelectedIndex(0);
        }

        if (open) {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedIndex((prevIndex) =>
              prevIndex === items.length - 1 ? 0 : prevIndex + 1
            );
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedIndex((prevIndex) =>
              prevIndex === 0 ? items.length - 1 : prevIndex - 1
            );
          } else if (e.key === "Enter") {
            handleSelect(items[selectedIndex].value);
          }
        }
      };

      document.addEventListener("keydown", down);
      return () => document.removeEventListener("keydown", down);
    }, [open, selectedIndex]);


    return (
      <div className="min-h-screen bg-[#1c1c1c] text-[#a9a9a9] font-mono">
        <header className="p-4 flex justify-between items-center">
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" onClick={() => handleNavigation("/")} className="text-[#d87d4a]">home</a></li>
              <li><a href="#" onClick={() => handleNavigation("/blog")} className="text-[#d87d4a]">blog</a></li>
              <li><a href="#" onClick={() => handleNavigation("/uses")} className="text-[#d87d4a]">stuff i use</a></li>
            </ul>
          </nav>
          <div className="flex space-x-2">
            <span className="text-[#d87d4a]">/ to navigate</span>
            <span className="text-[#d87d4a]"></span>
          </div>
        </header>

      <main className="p-8">
        <h1 className="text-4xl text-[#d87d4a] mb-4">V</h1>
        <p className="mb-2 ">  <span className="flex items-center">
            <MapPinIcon size={20} className="mr-1" /> [REDACTED]
          </span></p>
        <b className="mb-4 font-thin"></b>
        <p className="mb-8">student and tinkerer. i enjoy breaking things and ricing neovim.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl text-[#d87d4a] mb-4">work</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-[#ff6b6b] font-bold">[REDACTED]</h3>
                <p className="text-[#4ecdc4]">swe intern</p>
                <p className="text-[##295052]">(jan &apos;24 - jun &apos;24)</p>
                <p className="mt-2">
                  shipped python services to prod that collect metrics for aws services, worked closely with senior devs for improving the landing page UX and closed jira tickets.
                </p>
              </div>
              <div>
                <h3 className="text-[#ff6b6b] font-bold">[startup]</h3>
                <p className="text-[#4ecdc4]">swe intern</p>
                <p className="text-[#4ecdc4]">(may &apos;23 - jul &apos;23)</p>
                <p className="mt-2">
                  built a full-stack website for a client, overhauled performance and set up metrics to track user conversion.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl text-[#d87d4a] mb-4">projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-[#ff6b6b] font-bold" ><a href="https://github.com/covixx/Hyperion" className="text-[#ff6b6b] ">Hyperion</a></h3>
                <p>
                  a drop-in replacement TUI code editor that just works ( only supports Zig for now)
                </p>
              </div>
              <div>
                <h3 className="text-[#ff6b6b] font-bold"><a href="https://github.com/covixx/Magellan" className="text-[#ff6b6b] ">Magellan</a></h3>
                <p>
                  all-in-one productivity and lifestyle tracker
                </p>
              </div>
              <div>
                <h3 className="text-[#2c5557] font-bold"><a href="https://github.com/covixx/Magellan" className="text-[#ff6b6b] ">Ouranous</a></h3>
                <p>
                  A micro-blogging social media platform with a unique sense of community and personality
                </p>
              </div>
              <div>
                <h3 className="text-[#2c5557] font-bold"><a href="https://monkeblocker.koyeb.app" className="text-[#ff6b6b] ">Monke Blocker</a></h3>
                <p>
                  A real-time bot detection and blocking tool that uses ML to classify and detect bots on Twitter
                </p>
              </div>
              <div className='space-y-4'></div><a href="https://github.com/covixx?tab=repositories" className="text-[#ff6b6b] ">all projects →</a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AsciiArt />
 
          <UsageStatsDashboard />
        </div>
      </main>

      <footer className="p-4 flex justify-center space-x-4">
        <a href="https://github.com/covixx" className="text-[#d87d4a]">github</a>
        <a href="https://x.com/covix2772" className="text-[#d87d4a]">twitter</a>
        <a href="https://leetcode.com/u/sirbauderlaire/" className="text-[#d87d4a]">leetcode</a>
      </footer>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[640px] bg-[#2c2c2c] rounded-lg shadow-lg border border-[#d87d4a] font-mono"
      >
        <div className="border-[#d87d4a] border rounded-lg p-1 m-2">
          <Command.Input
            placeholder="type something..."
            className="w-full bg-transparent text-[#a9a9a9] p-2 outline-none placeholder-[#5c5c5c]"
          />
        </div>
        <Command.List className="p-2 space-y-1">
          {items.map((item, index) => (
            <Command.Item
              key={item.value}
              value={item.value}
              onSelect={handleSelect}
              className={`p-2 flex items-center space-x-3 text-[#a9a9a9] hover:bg-[#3c3c3c] rounded ${
                selectedIndex === index ? "bg-[#3c3c3c]" : ""
              }`}
            >
              <item.icon size={16} />
              <span>{item.label}</span>
            </Command.Item>
          ))}
        </Command.List>
        <div className="p-2 flex justify-end space-x-2 text-[#5c5c5c] text-sm">
          <span className="flex items-center">
            <ArrowUpDown size={12} className="mr-1" /> to navigate
          </span>
          <span className="flex items-center">
            <MdKeyboardReturn size={12} className="mr-1" /> to confirm
          </span>
        </div>
      </Command.Dialog>
    </div>
  )
}
