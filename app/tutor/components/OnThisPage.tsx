interface Heading {
  id: string;
  text: string;
  level: number;
}

export function OnThisPage({ headings }: { headings: Heading[] }) {
  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] w-64 flex-shrink-0 overflow-y-auto p-4 pl-8 hidden lg:block">
       <h3 className="mb-4 text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
        On This Page
      </h3>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} style={{ marginLeft: `${(heading.level - 2) * 1}rem` }}>
             <a
              href={`#${heading.id}`}
              className="block text-sm text-gray-500 dark:text-gray-400 py-1 hover:text-primary transition-colors"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}