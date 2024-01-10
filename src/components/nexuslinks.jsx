import React from 'react';
import { PillIcon, BarChart3Icon, SendIcon } from 'lucide-react';

const NexusLink = ({ icon: Icon, label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center justify-center p-6 rounded-lg bg-gray-900/50 border border-blue-600/20 hover:border-blue-600/50 transition-all duration-300 hover:bg-gray-800/50"
  >
    <div className="mb-3">
      <Icon className="w-8 h-8 text-blue-600 group-hover:blue-600 transition-colors duration-300" />
    </div>
    <span className="text-blue-600 text-sm group-hover:blue-600 transition-colors duration-300">
      {label}
    </span>
  </a>
);

const TwitterIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-8 h-8 text-blue-600 group-hover:text-blue-500 transition-colors duration-300"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const NexusLinks = () => {
  const links = [
    {
      label: 'Exchange',
      icon: PillIcon,
      href: 'SINCLAIR'
    },
    {
      label: 'Chart',
      icon: BarChart3Icon,
      href: 'SINCLAIR'
    },
    {
      label: 'Community',
      icon: SendIcon,
      href: 'https://t.me/KORVAIcoin'
    },
    {
      label: 'Updates',
      icon: TwitterIcon,
      href: 'https://x.com/korvaicoin'
    }
  ];

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-8 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          DIMENSIONAL ACCESS POINTS
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {links.map((link) => (
          <NexusLink
            key={link.label}
            icon={link.icon}
            label={link.label}
            href={link.href}
          />
        ))}
      </div>
    </section>
  );
};

export default NexusLinks;
