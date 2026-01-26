"use client";

import { useEffect, useRef } from 'react';

import { createRoot, Root } from 'react-dom/client';

import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

import type TableInterface from './table-interface';

const MdxTableSorter = ({ tableId }: TableInterface) => {

	// orders: map of column index -> sort direction
	const orders = useRef<Record<number, 'asc' | 'desc' | null>>({});
	// sequence of columns in the order they were added (for multi-column stable priority)
	const orderSequence = useRef<number[]>([]);

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
		const updateIconFns: Array<(state: 'asc' | 'desc' | null) => void> = [];

		const makeIcon = () => {
			const span = document.createElement('span');
			// hidden on very small screens, shown inline on sm+
			span.className = 'mdx-sort-icon ml-2 hidden sm:inline-flex items-center align-middle text-xs sm:text-sm';
			span.style.userSelect = 'none';
			span.setAttribute('aria-hidden', 'true');
			span.style.transition = 'transform .14s ease, opacity .14s ease';
			span.style.transformOrigin = 'center';
			span.style.cursor = 'pointer';
			span.style.flexShrink = '0';
			return span;
		};

		headers.forEach((th, idx) => {
			const iconEl = makeIcon();
			// Try to place the icon right after the title container if present
			const contentContainer = th.querySelector('.select-none') as HTMLElement | null;
			if (contentContainer) {
				// ensure title and icon sit on same line
				contentContainer.style.display = 'inline-flex';
				contentContainer.style.alignItems = 'center';
				contentContainer.style.gap = '0.5rem';
				contentContainer.after(iconEl);
			} else {
				// fallback: append to th
				th.appendChild(iconEl);
			}
			// avoid header wrapping where possible
			th.style.whiteSpace = 'nowrap';
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
			updateIconFns.push(updateIcon);

			const parseNumber = (v: string) => {
				if (!v) return NaN;
				const cleaned = v.replace(/[^0-9+\-.,eE]/g, '').replace(/,/g, '.');
				const n = Number(cleaned);
				return Number.isFinite(n) ? n : NaN;
			};

			const isBooleanLike = (v: string, cell?: HTMLTableCellElement | null) => {
				// prefer explicit data attribute when available
				if (cell) {
					const db = cell.getAttribute('data-bool');
					if (db === 'true' || db === 'false') return true;
				}
				const s = v.trim().toLowerCase();
				return s === 'true' || s === 'false';
			};

			const rowsSortAndRender = (seq: number[]) => {
				const comparator = (a: HTMLTableRowElement, b: HTMLTableRowElement) => {
					for (const col of seq) {
						const dir = orders.current[col];
						if (!dir) continue;
						const aCell = a.cells[col] as HTMLTableCellElement | undefined;
						const bCell = b.cells[col] as HTMLTableCellElement | undefined;
						const aDb = aCell?.getAttribute('data-bool');
						const bDb = bCell?.getAttribute('data-bool');
						const vaRaw = aCell?.textContent?.trim() ?? '';
						const vbRaw = bCell?.textContent?.trim() ?? '';

						// If either cell has explicit data-bool, use boolean comparison
						if ((aDb === 'true' || aDb === 'false') || (bDb === 'true' || bDb === 'false')) {
							const va = (aDb ?? vaRaw).toLowerCase() === 'true' ? 1 : 0;
							const vb = (bDb ?? vbRaw).toLowerCase() === 'true' ? 1 : 0;
							if (va !== vb) return dir === 'asc' ? va - vb : vb - va;
							continue;
						}

						// Fallback: detect boolean-like by text
						if (isBooleanLike(vaRaw) && isBooleanLike(vbRaw)) {
							const va = vaRaw.toLowerCase() === 'true' ? 1 : 0;
							const vb = vbRaw.toLowerCase() === 'true' ? 1 : 0;
							if (va !== vb) return dir === 'asc' ? va - vb : vb - va;
							continue;
						}

						const na = parseNumber(vaRaw);
						const nb = parseNumber(vbRaw);
						if (!Number.isNaN(na) && !Number.isNaN(nb)) {
							if (na !== nb) return dir === 'asc' ? na - nb : nb - na;
							continue;
						}

						const cmp = dir === 'asc' ? vaRaw.localeCompare(vbRaw, undefined, { numeric: true }) : vbRaw.localeCompare(vaRaw, undefined, { numeric: true });
						if (cmp !== 0) return cmp;
					}
					return 0;
				};

				const rowsToSort = Array.from(tbody.querySelectorAll('tr')) as HTMLTableRowElement[];
				rowsToSort.sort(comparator);
				rowsToSort.forEach(r => tbody.appendChild(r));
			};

			const clearSort = (colIdx?: number) => {
				if (typeof colIdx === 'number') {
					// clear only that column
					delete orders.current[colIdx];
					const pos = orderSequence.current.indexOf(colIdx);
					if (pos !== -1) orderSequence.current.splice(pos, 1);
				} else {
					// clear all
					orders.current = {};
					orderSequence.current = [];
				}

				// restore original order only when clearing all
				if (colIdx === undefined) {
					const original = originalRowsRef.current || [];
					original.forEach(r => tbody.appendChild(r));
				} else {
					// if remaining sequence exists, re-sort according to it
					if (orderSequence.current.length) rowsSortAndRender([...orderSequence.current]);
				}

				// clear aria-sort on headers and update icons
				headers.forEach((h, j) => {
					const state = orders.current[j] ?? null;
					if (state) h.setAttribute('aria-sort', state === 'asc' ? 'ascending' : 'descending');
					else h.removeAttribute('aria-sort');
					const fn = updateIconFns[j];
					if (fn) fn(state);
				});
			};

			const handler = (ev?: Event) => {
				const shift = !!(ev && (ev as MouseEvent).shiftKey);

				const current = orders.current[idx] ?? null;
				const nextState: 'asc' | 'desc' | null = current === null ? 'asc' : current === 'asc' ? 'desc' : null;

				// if not shift, clear other columns first
				if (!shift) {
					if (nextState === null) {
						clearSort();
						return;
					}
					orders.current = {};
					orderSequence.current = [];
				}

				if (nextState === null) {
					delete orders.current[idx];
					const pos = orderSequence.current.indexOf(idx);
					if (pos !== -1) orderSequence.current.splice(pos, 1);
				} else {
					orders.current[idx] = nextState;
					if (!orderSequence.current.includes(idx)) orderSequence.current.push(idx);
				}

				const seq = [...orderSequence.current];

				const parseNumber = (v: string) => {
					if (!v) return NaN;
					const cleaned = v.replace(/[^0-9+\-.,eE]/g, '').replace(/,/g, '.');
					const n = Number(cleaned);
					return Number.isFinite(n) ? n : NaN;
				};

				const isBooleanLike = (v: string) => {
					const s = v.trim().toLowerCase();
					return s === 'true' || s === 'false';
				};

				const comparator = (a: HTMLTableRowElement, b: HTMLTableRowElement) => {
					for (const col of seq) {
						const dir = orders.current[col];
						if (!dir) continue;

						const aCell = a.cells[col] as HTMLTableCellElement | undefined;
						const bCell = b.cells[col] as HTMLTableCellElement | undefined;
						const aDb = aCell?.getAttribute('data-bool');
						const bDb = bCell?.getAttribute('data-bool');
						const vaRaw = aCell?.textContent?.trim() ?? '';
						const vbRaw = bCell?.textContent?.trim() ?? '';

						// Prefer explicit data-bool when present
						if ((aDb === 'true' || aDb === 'false') || (bDb === 'true' || bDb === 'false')) {
							const va = (aDb ?? vaRaw).toLowerCase() === 'true' ? 1 : 0;
							const vb = (bDb ?? vbRaw).toLowerCase() === 'true' ? 1 : 0;
							if (va !== vb) return dir === 'asc' ? va - vb : vb - va;
							continue;
						}

						// Fallback: detect boolean-like by text
						if (isBooleanLike(vaRaw) && isBooleanLike(vbRaw)) {
							const va = vaRaw.toLowerCase() === 'true' ? 1 : 0;
							const vb = vbRaw.toLowerCase() === 'true' ? 1 : 0;
							if (va !== vb) return dir === 'asc' ? va - vb : vb - va;
							continue;
						}

						const na = parseNumber(vaRaw);
						const nb = parseNumber(vbRaw);
						if (!Number.isNaN(na) && !Number.isNaN(nb)) {
							if (na !== nb) return dir === 'asc' ? na - nb : nb - na;
							continue;
						}

						const cmp = dir === 'asc' ? vaRaw.localeCompare(vbRaw, undefined, { numeric: true }) : vbRaw.localeCompare(vaRaw, undefined, { numeric: true });
						if (cmp !== 0) return cmp;
					}
					return 0;
				};

				const rowsToSort = Array.from(tbody.querySelectorAll('tr')) as HTMLTableRowElement[];
				rowsToSort.sort(comparator);
				rowsToSort.forEach(r => tbody.appendChild(r));

				// Update aria-sort attributes and icons for all headers
				headers.forEach((h, j) => {
					const state = orders.current[j] ?? null;
					if (state) h.setAttribute('aria-sort', state === 'asc' ? 'ascending' : 'descending');
					else h.removeAttribute('aria-sort');
					const fn = updateIconFns[j];
					if (fn) fn(state);
				});
			};

			th.style.cursor = 'pointer';
			th.setAttribute('role', 'button');
			th.addEventListener('click', handler);
			clickHandlers.push(() => th.removeEventListener('click', handler));

			// icon click clears only this column's sort
			const iconClick = (ev: Event) => { ev.stopPropagation(); clearSort(idx); };
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

export default MdxTableSorter;