"use client";

import { useEffect, useRef } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

type Props = {
  tableId: string;
};

export default function MdxTableSorter({ tableId }: Props) {
  const orders = useRef<Record<number, 'asc' | 'desc' | null>>({});
  const originalRowsRef = useRef<HTMLTableRowElement[] | null>(null);

  useEffect(() => {
    const table = document.getElementById(tableId) as HTMLTableElement | null;
    if (!table) throw new Error(`Table with id "${tableId}" not found.`);

    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');
    if (!thead || !tbody) return;

    const headerRow = thead.querySelector('tr');
    if (!headerRow) return;

    const headers = Array.from(headerRow.children) as HTMLElement[];

    // snapshot original order so we can restore when clearing sort
    if (!originalRowsRef.current) {
      originalRowsRef.current = Array.from(tbody.querySelectorAll('tr')) as HTMLTableRowElement[];
    }

    const clickHandlers: Array<() => void> = [];
    const iconRemovers: Array<() => void> = [];
    const iconRoots: Root[] = [];

    const makeIcon = () => {
      const span = document.createElement('span');
      span.className = 'mdx-sort-icon ml-2 inline-flex items-center align-middle text-sm';
      span.style.userSelect = 'none';
      span.setAttribute('aria-hidden', 'true');
      span.style.transition = 'transform .14s ease, opacity .14s ease';
      span.style.transformOrigin = 'center';
      return span;
    };

    headers.forEach((th, idx) => {
      const iconEl = makeIcon();
      th.appendChild(iconEl);
      // render react-icons into the icon container
      const root = createRoot(iconEl);
      iconRoots.push(root);

      const updateIcon = (state: 'asc' | 'desc' | null) => {
        if (!iconEl) return;
        // small pop animation
        iconEl.style.transform = 'scale(1.05)';
        setTimeout(() => { iconEl.style.transform = 'scale(1)'; }, 140);
        if (state === 'asc') root.render(<FaSortUp />);
        else if (state === 'desc') root.render(<FaSortDown />);
        else root.render(<FaSort />);
      };

      const clearSort = () => {
        delete orders.current[idx];
        // restore original order
        const original = originalRowsRef.current || [];
        original.forEach(r => tbody.appendChild(r));
        // clear aria-sort on headers
        headers.forEach(h => h.removeAttribute('aria-sort'));
        // reset icons
        headers.forEach((h) => {
          const ic = h.querySelector('.mdx-sort-icon') as HTMLElement | null;
          if (ic) ic.innerHTML = '⇅';
        });
      };

      const handler = (_?: Event) => {
        const rows = Array.from(tbody.querySelectorAll('tr')) as HTMLTableRowElement[];
        const getCellValue = (row: HTMLTableRowElement) => {
          const cell = row.cells[idx];
          if (!cell) return '';
          return cell.textContent?.trim() ?? '';
        };

        const current = orders.current[idx] ?? null;
        const nextState: 'asc' | 'desc' | null = current === null ? 'asc' : current === 'asc' ? 'desc' : null;
        if (nextState === null) {
          clearSort();
          return;
        }

        orders.current[idx] = nextState;

        // robust comparator: try numeric parse per value, fallback to localeCompare
        const parseNumber = (v: string) => {
          if (!v) return NaN;
          const cleaned = v.replace(/[^0-9+\-.,eE]/g, '').replace(/,/g, '.');
          const n = Number(cleaned);
          return Number.isFinite(n) ? n : NaN;
        };

        rows.sort((a, b) => {
          const va = getCellValue(a);
          const vb = getCellValue(b);
          const na = parseNumber(va);
          const nb = parseNumber(vb);
          if (!Number.isNaN(na) && !Number.isNaN(nb)) {
            return nextState === 'asc' ? na - nb : nb - na;
          }
          return nextState === 'asc' ? va.localeCompare(vb, undefined, { numeric: true }) : vb.localeCompare(va, undefined, { numeric: true });
        });

        // Re-append rows in sorted order
        rows.forEach(r => tbody.appendChild(r));

        // Update aria-sort attributes for accessibility and icons
        headers.forEach((h, j) => {
          const ic = h.querySelector('.mdx-sort-icon') as HTMLElement | null;
          if (j === idx) {
            h.setAttribute('aria-sort', nextState === 'asc' ? 'ascending' : 'descending');
            if (ic) ic.innerHTML = nextState === 'asc' ? '▲' : '▼';
          } else {
            h.removeAttribute('aria-sort');
            if (ic) ic.innerHTML = '⇅';
          }
        });
      };

      th.style.cursor = 'pointer';
      th.setAttribute('role', 'button');
      th.addEventListener('click', handler);
      clickHandlers.push(() => th.removeEventListener('click', handler));

      // icon click clears sort
      const iconClick = (ev: Event) => { ev.stopPropagation(); clearSort(); };
      iconEl.addEventListener('click', iconClick);
      iconRemovers.push(() => iconEl.removeEventListener('click', iconClick));
      // init icon
      updateIcon(null);
    });

    return () => {
      clickHandlers.forEach(un => un());
      iconRemovers.forEach(un => un());
      // unmount roots
      iconRoots.forEach(r => { try { r.unmount(); } catch (_) { /* ignore */ } });
    };
  }, [tableId]);

  return null;
}
