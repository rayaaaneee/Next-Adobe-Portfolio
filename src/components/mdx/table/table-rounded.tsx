"use client";

import { useEffect } from 'react';

import type TableInterface from './table-interface';

const MdxTableRounded = ({ tableId }: TableInterface) => {

	useEffect(() => {
		const table = document.getElementById(tableId) as HTMLTableElement | null;
		if (!table) return;
		const tbl = table as HTMLTableElement;

		const prevOverflow = tbl.style.overflow;
		tbl.style.overflow = 'hidden';

		const appliedEls: HTMLElement[] = [];

		const applyRoundedCorners = () => {
			const thead = tbl.querySelector('thead');
			if (thead) {
				const firstCell = thead.querySelector('th,td') as HTMLElement | null;
				const lastCell = thead.querySelector('tr')?.lastElementChild as HTMLElement | null;
				if (firstCell) {
				firstCell.classList.add('rounded-tl-md');
				appliedEls.push(firstCell);
				}
				if (lastCell) {
				lastCell.classList.add('rounded-tr-md');
				appliedEls.push(lastCell);
				}
			}

			const tbodyRows = Array.from(tbl.querySelectorAll('tbody tr')) as HTMLTableRowElement[];
			const allTrs = Array.from(tbl.querySelectorAll('tr')) as HTMLTableRowElement[];
			const lastRow = tbodyRows.length ? tbodyRows[tbodyRows.length - 1] : (allTrs.length ? allTrs[allTrs.length - 1] : undefined);
			if (lastRow) {
				const firstCell = lastRow.querySelector('td,th') as HTMLElement | null;
				const lastCell = lastRow.lastElementChild as HTMLElement | null;
				if (firstCell) {
				firstCell.classList.add('rounded-bl-md');
				appliedEls.push(firstCell);
				}
				if (lastCell) {
				lastCell.classList.add('rounded-br-md');
				appliedEls.push(lastCell);
				}
			}
		};

		applyRoundedCorners();

		return () => {

			appliedEls.forEach(el => {
				el.classList.remove('rounded-tl-md', 'rounded-tr-md', 'rounded-bl-md', 'rounded-br-md');
			});

			tbl.style.overflow = prevOverflow || '';

		};

	}, [tableId]);

	return null;
}

export default MdxTableRounded;