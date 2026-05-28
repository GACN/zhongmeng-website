import Link from "next/link";

interface BreadcrumbItem { label: string; href?: string; }
interface Props { items: BreadcrumbItem[]; }

export default function Breadcrumb({ items }: Props) {
  return (
    <nav aria-label="面包屑" className="py-4">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-brown-light">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span className="mx-1 text-brown/30">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-brand transition-colors">{item.label}</Link>
            ) : (
              <span className="text-brown font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
