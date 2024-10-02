"use client" 
import { useState, useEffect } from 'react'
import { Command } from 'cmdk'
import { Home, FileText, Film, Twitter, Github, ArrowUpDown, LinkedinIcon, LaptopMinimal } from 'lucide-react'
import { MdKeyboardReturn } from 'react-icons/md'

export default function Uses() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tools = [
    { name: "nvim", description: "while you were busy partying i was studying the grep", url: "https://github.com/neovim/neovim" },
    { name: "arc", description: "because memory management is so 1994", url: "https://arc.net/"},
    { name: "bun", description: "the one true JS runtime", url: "https://bun.sh/" },
    { name: "python/js/zig/cpp/gdscript", description: "all the languages im currently good at" , url: "" },
    { name: "magellan", description: "shameless plug / productivity manager" , url: "https://magellan-ivory.vercel.app/" },
  ]

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
    const down = (e) => {
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

          </nav>
          <div className="flex space-x-2">
            <span className="text-[#d87d4a]">/ to navigate</span>
            <span className="text-[#d87d4a]"></span>
          </div>
        </header>
          <h1 className="text-4xl font-bold pt-4 mb-4 px-4 text-[#d87d4a]">stuff i use</h1>
          <p className="text-[#4ecdc4] mb-6"></p>
          <ul className="space-y-4">
          {tools.map((tool, index) => (
  <li key={index}>
    <a href={tool.url}> {/* assuming tool.url is the desired URL */}
      <span className="text-[#cc6666] font-bold px-4 underline underline-offset-2">{tool.name}</span>
    </a>
    <p className="text-[#4ecdc4] ml-4 px-4" >{tool.description}</p>
  </li>
))}
          </ul>
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